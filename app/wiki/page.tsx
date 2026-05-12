import creature from "@/data/creatures.json";
import Link from "next/link";

export default function Wiki() {
    return (
        <div>
            <h1>Welcome to the Repository</h1>
            <ul>
                {creature.map((entry) => (
                    <li key={entry.slug} className="">
                        <Link href={`/wiki/${entry.slug}`}>{entry.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
