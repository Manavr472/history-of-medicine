'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
    { name: "On This Day", path: "/onthisday" },
    { name: "Medical History", path: "/history/preclinical" },
    { name: "Surgeons Directory", path: "/surgeoninfo" },
    { name: "Medical Timelines", path: "/timeline" },
    { name: "Did You Know?", path: "/did-you-know" },
];

export default function SectionsPanel() {
    const pathname = usePathname();
    
    return (
        <nav className="mt-6 py-4 flex flex-row gap-8 py-4 justify-center">
            {sections.map((section) => (
                <Link href={section.path} key={section.name} passHref>
                    <span
                        className={`px-6 py-3 minigap transition-colors duration-300 text-lg font-medium rounded-md
                        ${(section.name === "Medical History" && pathname.startsWith("/history/")) || pathname === section.path 
                            ? 'border-b-2 border-green-500' 
                            : 'hover:text-green-200'}`}
                        tabIndex={0}
                        role="button"
                    >
                        {section.name}
                    </span>
                </Link>
            ))}
        </nav>
    );
}
