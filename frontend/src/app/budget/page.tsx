'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// This inner component can safely use useSearchParams
function BudgetContent() {
    const searchParams = useSearchParams();
    const location = searchParams.get("location");

    const [items, setItems] = useState<Record<string, string | number>>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!location) return;

        setLoading(true);
        fetch(`/api/travel/budget?location=${encodeURIComponent(location)}`)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Error fetching budget data:", err))
            .finally(() => setLoading(false));
    }, [location]);

    return (
        <div className="p-6">
            <Typography variant="h4" gutterBottom>
                Budget for {location || "Unknown"}
            </Typography>

            {loading && <CircularProgress />}

            {!loading && Object.keys(items).length === 0 && (
                <Typography>No budget data available.</Typography>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {Object.entries(items).map(([activity, cost]) => (
                    <Card key={activity} className="shadow-md">
                        <CardContent>
                            <Typography variant="h6">{activity}</Typography>
                            <Typography color="text.secondary">
                                Estimated Cost: ${cost}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Wrap in Suspense to satisfy Next.js
export default function Budget() {
    return (
        <Suspense fallback={<div className="p-6">Loading budget…</div>}>
            <BudgetContent />
        </Suspense>
    );
}
