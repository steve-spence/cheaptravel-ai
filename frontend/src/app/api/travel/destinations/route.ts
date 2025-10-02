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
                // If already has image, return as is
                if (dest.image) return dest;

                // Otherwise fetch from Pexels
                const res = await fetch(
                    `https://api.pexels.com/v1/search?query=${encodeURIComponent(dest.name)}`,
                    {
                        headers: {
                            Authorization: process.env.PEXELS_API_KEY!,
                        },
                    }
                );

                const data = await res.json();
                const imageUrl = data.photos?.[0]?.src?.medium ?? null;

                if (imageUrl) {
                    // Update DB with new image URL
                    await db
                        .update(destinations)
                        .set({ image: imageUrl })
                        .where(eq(destinations.id, dest.id));
                }

                return {
                    ...dest,
                    image: imageUrl,
                };
            })
        );


        return NextResponse.json(enriched);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 });
    }
}
