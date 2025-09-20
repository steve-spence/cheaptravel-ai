import ThemeToggle from "./ThemeToggles";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-xl font-bold">cheaptravel.ai</h1>
            <ThemeToggle />
        </header>
    );
}
