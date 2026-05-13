"use client";
import { useState } from "react";
import quotes from "../data/quotes.json";

export default function QuoteCard() {
    const [quote] = useState(
        () => quotes[Math.floor(Math.random() * quotes.length)],
    );
    if (!quote) return <div className="min-h-12.5" />;
    return (
        <div>
            <p>{quote.quote}</p>
            <p>
                - {quote.speaker} - {quote.source}
            </p>
        </div>
    );
}
