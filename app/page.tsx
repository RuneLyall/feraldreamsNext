"use client";
import dynamic from "next/dynamic";
const QuoteCard = dynamic(() => import("@/components/QuoteCard"), {
    ssr: false,
});
export default function Home() {
    return (
        <main className="max-w-7xl w-full">
            <div className="">
                <h1 className="text-4xl text-center text-purple-600 mb-3 py-5 font-bold">
                    Welcome to my Den
                </h1>
                <p className="">
                    {`I see, it would appear you have found your way to my little
                    hideaway within the void. It's a pleasure to make your
                    acquaintance, I welcome you to this humble den and would
                    like you invite you further.`}
                </p>

                <p className="">
                    {`To your left a small glade , a peace amongst the trees with
                    a view of the stars and a quiet but warm breeze flows. The
                    scent of wildgrass will be your constant companion and you
                    are free to linger as long as you like. Though I do kindly
                    ask please don't break anything or uproot anything, it's
                    supposed to be a relaxing space, not a playground.`}
                </p>

                <p className="">
                    {`To your right, you will find a place of strange energy,
                    where the laws of space and time sometimes don't obey what
                    they should. If you venture that way, I'm not sure where you
                    will end up, but it could be fun regardless.`}
                </p>
                <p className="">
                    {`Feel free to wander, try not to break anything but if ya do
                    oh well, life goes on. To those here from places where I'm
                    not really known, nice ta meetcha, to those that do know me,
                    well, welcome to you too of course.`}
                </p>
                <p className=" text-sky-800">
                    In the back, well, only those that know me unlock the space
                    within there.
                </p>
                <div>
                    <QuoteCard />
                </div>
            </div>
        </main>
    );
}
