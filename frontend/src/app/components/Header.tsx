import { Icon } from "lucide-react";
import ThemeToggle from "./ThemeToggles";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-800">
            <Link href="/">
                <Image id="logo" src="/cheaptravel_icon.png" width={80} height={80} alt="logo" />
            </Link>

            <h1 className="text-xl font-bold">cheaptravel.ai</h1>
            <ThemeToggle />
        </header>
    );
}
