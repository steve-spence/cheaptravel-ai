export default function DestinationPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div>
            <h1>Destination: {params.slug}</h1>
        </div>
    );
}