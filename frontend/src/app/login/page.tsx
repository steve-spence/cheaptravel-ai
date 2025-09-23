import Image from "next/image";
import Link from "next/link";

export default function Login() {
    // TODO login logic...


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-950">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6">

                {/* Logo / Header */}
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src="/cheaptravel_icon.png"
                        width={60}
                        height={60}
                        alt="Logo"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Sign in to cheaptravel.ai
                    </h1>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-2 text-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer links */}
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
