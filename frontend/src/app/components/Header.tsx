import { Icon } from "lucide-react";
import ThemeToggle from "./ThemeToggles";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <Image id="logo" src="/cheaptravel_logo.png" width={30} height={30} alt="logo" />
            <h1 className="text-xl font-bold">cheaptravel.ai</h1>
            <ThemeToggle />
        </header>
    );
}
