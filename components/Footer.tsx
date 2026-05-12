"use client";

export default function Footer() {
    return (
        <div className="relative w-full h-32 flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="purple"
                stroke="silver"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-paw-print-icon lucide-paw-print">
                <circle cx="11" cy="4" r="2" />
                <circle cx="18" cy="8" r="2" />
                <circle cx="20" cy="16" r="2" />
                <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
            </svg>

            <span className="relative z-10 font-bold text-white text-lg pl-2 pr-2">
                FeralDreams
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="purple"
                stroke="silver"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-paw-print-icon lucide-paw-print transform scale-x-[-1]">
                <circle cx="11" cy="4" r="2" />
                <circle cx="18" cy="8" r="2" />
                <circle cx="20" cy="16" r="2" />
                <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
            </svg>

            <a href="https://github.com/RuneLyall" className="pl-3">
                GitHub
            </a>
        </div>
    );
}
