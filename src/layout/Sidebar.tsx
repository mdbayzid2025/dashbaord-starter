import { LayoutDashboard, BarChart3, Users, Settings } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64  bg-background  border-r hidden md:flex flex-col p-4">

            <h1 className="text-xl font-bold mb-6 text-foreground!">MyDashboard</h1>

            <nav className="space-y-2">
                <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
                <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
                <SidebarItem icon={<Users size={18} />} label="Users" />
                <SidebarItem icon={<Settings size={18} />} label="Settings" />
            </nav>

        </aside>
    );
}

function SidebarItem({ icon, label }: any) {
    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
}