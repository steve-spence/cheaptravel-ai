import { NextResponse } from "next/server";
import { db } from "@/db";
import { destinations } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
    try {
        const rows = await db
            .select()
            .from(destinations)
            .orderBy(desc(destinations.createdAt));

        // Enrich with image URLs
        const enriched = await Promise.all(
            rows.map(async (dest) => {
                const res = await fetch(
                    `https://api.pexels.com/v1/search?query=${encodeURIComponent(dest.name)}`,
                    {
                        headers: {
                            Authorization: process.env.PEXELS_API_KEY!,
                        },
                    }
                );

                const data = await res.json();
                return {
                    ...dest,
                    image: data.photos?.[0]?.src?.medium ?? null,
                };
            })
        );

        return NextResponse.json(enriched);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return NextResponse.json({ error: "Failed to fetch destinations" }, { status: 500 });
    }
}
