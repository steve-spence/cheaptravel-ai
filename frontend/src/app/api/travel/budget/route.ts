import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location") || "Unknown";

    // replace this with llm query for getting 
    // what people noramally spend money on at 'location'
    // 
    const data = {
        "Hotel (per night)": 120,
        "Local transport": 15,
        "Meals (per day)": 50,
        "Coffee": 5,
        "Museum ticket": 20,
        "Souvenirs": 40,
        "Outdoor tour": 100,
        "Train ride": 60,
    };

    return NextResponse.json(data);
}
