import creature from "@/data/creatures.json";
import Link from "next/link";

export default function Wiki() {
    return (
        <div className="max-w-7xl w-full flex flex-col  items-center">
            <h1 className="mb-4 text-4xl text-pink-400">
                Welcome to the Repository
            </h1>
            <div className="grid grid-cols-5 w-full gap-5 place-items-center">
                {creature.map((entry) => (
                    <div
                        key={entry.slug}
                        className="border-2 border-amber-300 rounded-lg min-h-20 min-w-30 flex justify-center items-center">
                        <Link href={`/wiki/${entry.slug}`}>{entry.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
