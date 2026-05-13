import Link from "next/link";
export default function Falling() {
    return (
        <main className="max-w-7xl w-full">
            <div className="">
                <h1 className="text-4xl text-amber-400 text-center mb-4">
                    Falling...
                </h1>
                <p className="leading-relaxed p-2 mb-2 text-lg">
                    {`So, you came this way, take a breath, calm down, you aren't
                    in danger. Just let yourself stand up, you won't keep
                    falling. ...See, you're fine, now that yer here, welcome.`}
                </p>

                <p className="leading-relaxed p-2 mb-2 text-lg">
                    {`This place is a bit strange, it doesn't really follow any
                    guidlines or rules, it's just sorta, here, you might find a
                    huge repository of knowlege, or you might find a milkbone,
                    who knows.`}
                </p>

                <p className="leading-relaxed p-2 mb-2 text-lg">
                    {`Either way, over there is that`}{" "}
                    <Link href="/wiki">repository</Link>{" "}
                    {`I mentioned, it's sorta, big, and has a bunch of different creatures listed in it.`}
                </p>
                <p className="leading-relaxed p-2 mb-2 text-lg">
                    {`In that direction is this interactive adventure that's sorta, still
                    generating itself, might not work, might, can't say for
                    sure.((Currently doesn't work, flat out doesn't exist
                    sorry))`}
                </p>
                <p className="leading-relaxed p-2 mb-2 text-lg">
                    {`Up there is, well, I'll just let you see that one for
                    yourself.`}
                </p>
            </div>
        </main>
    );
}
