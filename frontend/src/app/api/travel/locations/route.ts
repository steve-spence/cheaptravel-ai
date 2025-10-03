import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ features: [] });
    }

    try {
        const res = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                query
            )}.json?access_token=${process.env.MAPBOX_API_TOKEN}&limit=5&types=place,region,country&language=en`
        );

        if (!res.ok) {
            throw new Error("Mapbox request failed");
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Mapbox API error:", error);
        return NextResponse.json({ features: [] }, { status: 500 });
    }
}
