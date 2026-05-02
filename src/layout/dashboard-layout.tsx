
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="p-6 space-y-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}