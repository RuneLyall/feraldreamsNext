import rawCreature from "@data/creatures.json";

interface CreatureEntry {
    slug: string;
    title: string;
    content: string;
    tags: string[];
    type: string;
    author: string;
    license: string;
    source: string;
}

const creature = rawCreature as CreatureEntry[];

export default async function WikiEntry({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const entry = creature.find((i) => i.slug === slug);

    if (!entry) return <h1>{`Doesn't Exist`}</h1>;

    return (
        <article className="max-w-7xl w-full">
            <h1 className="text-4xl text-gray-400 text-center mb-4">
                {entry.title}
            </h1>
            <p className="text-amber-100 leading-relaxed font-sans text-lg">
                {entry.content}
            </p>
            <p className="text-amber-100 leading-relaxed font-sans text-lg">
                Creature Tags:{" "}
                <span>
                    {entry.tags
                        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
                        .join(", ")}
                </span>
            </p>
            <p className="text-amber-100 leading-relaxed font-sans text-lg">
                Type/Origin: {entry.type}
            </p>
            {entry.author && (
                <p className="text-amber-100 leading-relaxed font-sans text-lg">
                    Entry Author: {entry.author}
                </p>
            )}
            {entry.license && (
                <p className="text-amber-100 leading-relaxed font-sans text-lg">
                    Entry used under License: {entry.license}
                </p>
            )}
            {entry.source && (
                <p className="text-amber-100 leading-relaxed font-sans text-lg">
                    Source: {entry.source}
                </p>
            )}
        </article>
    );
}
