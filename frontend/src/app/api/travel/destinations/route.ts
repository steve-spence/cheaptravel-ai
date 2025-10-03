import { NextResponse } from "next/server";
import { db } from "@/db";
import { destinations } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function GET() {
    try {
        const rows = await db
            .select()
            .from(destinations)
            .orderBy(desc(destinations.createdAt));

        const enriched = await Promise.all(
            rows.map(async (dest) => {
                // Already has both description + image
                if (dest.description && dest.image) return dest;

                let description = dest.description;
                let imageUrl = dest.image;

                // Try Wikipedia first
                if (!description || !imageUrl) {
                    try {
                        const wikiRes = await fetch(
                            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(dest.name)}`
                        );

                        if (wikiRes.ok) {
                            const wikiData = await wikiRes.json();
                            description = description || wikiData.extract || null;
                            imageUrl =
                                imageUrl || wikiData.originalimage?.source || wikiData.thumbnail?.source || null;
                        }
                    } catch (err) {
                        console.warn(`Wikipedia fetch failed for ${dest.name}`, err);
                    }
                }

                // Fallback to Pexels if still no image
                if (!imageUrl) {
                    try {
                        const res = await fetch(
                            `https://api.pexels.com/v1/search?query=${encodeURIComponent(dest.name + " cityscape")}&orientation=landscape&size=large&per_page=10`,
                            {
                                headers: {
                                    Authorization: process.env.PEXELS_API_KEY!,
                                },
                            }
                        );
                        const data = await res.json();
                        imageUrl = data.photos?.[0]?.src?.large2x ?? null;
                    } catch (err) {
                        console.warn(`Pexels fetch failed for ${dest.name}`, err);
                    }
                }

                // Update DB if we enriched anything
                if (description || imageUrl) {
                    await db
                        .update(destinations)
                        .set({
                            description: description ?? dest.description,
                            image: imageUrl ?? dest.image,
                        })
                        .where(eq(destinations.id, dest.id));
                }

                return {
                    ...dest,
                    description: description ?? dest.description,
                    image: imageUrl ?? dest.image,
                };
            })
        );

        // Setting up like descriptions for the destinations;
        // https://en.wikipedia.org/api/rest_v1/page/summary/paris


        return NextResponse.json(enriched);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 });
    }
}
