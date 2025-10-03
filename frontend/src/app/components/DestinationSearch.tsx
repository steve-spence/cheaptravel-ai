"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DestinationSearch() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const router = useRouter();

    async function fetchSuggestions(value: string) {
        setQuery(value);
        if (!value) return setSuggestions([]);

        try {
            const res = await fetch(`/api/travel/locations?q=${encodeURIComponent(value)}`);
            const data = await res.json();
            setSuggestions(data.features || []);
        } catch (err) {
            console.error("Suggestion fetch failed:", err);
        }
    }

    function handleSubmit() {
        if (query) {
            router.push(`/budget?location=${encodeURIComponent(query)}`);
        }
    }

    return (
        <div className="w-full max-w-md flex flex-col gap-2 relative">
            {/* Form with enter key */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="flex gap-2 w-full">
                <input
                    type="text"
                    placeholder="Search destinations..."
                    value={query}
                    onChange={(e) => fetchSuggestions(e.target.value)}
                    className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                    Search
                </button>
            </form>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((s: any) => (
                        <li
                            key={s.id}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => {
                                setQuery(s.place_name);
                                setSuggestions([]);
                                router.push(`/budget?location=${encodeURIComponent(s.place_name)}`);
                            }}>
                            {s.place_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
