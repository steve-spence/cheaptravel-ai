import { db } from ".";
import { destinations } from "./schema";

async function main() {
    console.log("DB URL:", process.env.DATABASE_URL);

    await db.insert(destinations).values([
        {
            name: "Paris",
            country: "France",
            description: "The city of lights, famous for the Eiffel Tower and croissants.",
            image: "/images/paris.jpg",
        },
        {
            name: "Kyoto",
            country: "Japan",
            description: "Historic temples, cherry blossoms, and traditional tea houses.",
            image: "/images/kyoto.jpg",
        },
    ]);

    console.log("Seeded destinations!");
}

main()
    .catch((err) => {
        console.error("Error seeding:", err);
        process.exit(1);
    })
    .finally(() => process.exit());
