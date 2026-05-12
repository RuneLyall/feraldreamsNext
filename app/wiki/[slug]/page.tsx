import creature from "@data/creatures.json";

export default function WikiEntry({ params }: { params: { slug: string } }) {
    const entry = creature.find((i) => i.slug === params.slug);

    if (!entry) return <h1>{`Doesn't Exist`}</h1>;

    return (
        <article>
            <h1>{entry.title}</h1>
            <p>{entry.content}</p>
        </article>
    );
}
