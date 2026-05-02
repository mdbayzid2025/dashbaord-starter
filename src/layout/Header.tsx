import { Search, Bell, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        const isDark = root.classList.contains("dark");
        setDark(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };
    return (
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">

            {/* Search */}
            <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg w-80">
                <Search size={16} className="text-muted-foreground" />
                <input
                    className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
                    placeholder="Search..."
                />
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-secondary hover:bg-muted transition"
                >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Notification */}
                <Bell size={18} className="text-foreground" />

                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-muted" />
            </div>

        </header>
    );
}