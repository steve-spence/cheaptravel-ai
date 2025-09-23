import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "travel";

    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY!,
        },
    });

    const data = await res.json();
    return NextResponse.json(data);
}