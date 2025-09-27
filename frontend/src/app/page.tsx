"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const [destinations, setDestinations] = useState<any[]>([]);
  const router = useRouter();

  const handleSubmit = () => {
    if (query)
      router.push(`/budget?location=${encodeURIComponent(query)}`);
  }

  // Fetch destinations from the api
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch("/api/travel/destinations");
        const data = await res.json();
        setDestinations(data);
      } catch (err) {
        console.error("Failed to load destinations:", err);
      }
    }
    fetchDestinations();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Search Section */}
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Find your next destination
        </h1>
        <div className="w-full max-w-md flex items-center gap-2">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // stop page refresh
              handleSubmit();
            }}
            className="flex gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Search destinations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <button
              type="submit" // <-- important
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

        </div>
      </section>

      {/* Popular Destinations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Popular Destinations</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              {dest.image && (
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{dest.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {dest.description}
                </p>
                <p className="text-blue-600 text-sm font-medium">
                  {dest.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
