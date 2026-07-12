import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import ShopperSidebar from "../components/layout/ShopperSidebar";

import { useAuth } from "../modules/auth/hooks/useAuth";
import { Role } from "../constants/roles";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-slate-100">
      {user?.role === Role.ADMIN ? (
        <Sidebar />
      ) : (
        <ShopperSidebar />
      )}

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;