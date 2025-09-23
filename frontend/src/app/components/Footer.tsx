import { Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 p-6 text-center md:text-left">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left side: Brand */}
                <div className="flex items-center gap-2">
                    <Image src="/cheaptravel_icon.png" alt="Logo" width={50} height={50} />
                    <span className="font-semibold">cheaptravel.ai</span>
                </div>



                {/* Middle: Links */}
                <nav className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <a href="https://github.com/msuaiagent/cheaptravel-ai" target="_blank" rel="noopener noreferrer">
                        <Image src="/github.svg" alt="Logo" width={25} height={25} />
                    </a>
                </nav>
            </div>

            {/* Bottom bar */}
            <p className="mt-4 text-xs text-gray-300 dark:text-gray-300 text-center">
                © {new Date().getFullYear()} cheaptravel.ai. All rights reserved.
            </p>
        </footer>
    );
}
