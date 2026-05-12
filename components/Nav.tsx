"use client";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-center gap-8 py-6">
            <Link href="/" className="">
                Home
            </Link>
            <Link href="/glade">Glade</Link>
            <Link href="/falling">Falling</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}
