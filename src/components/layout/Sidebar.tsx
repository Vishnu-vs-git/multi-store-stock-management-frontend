import {
  Boxes,
  LayoutDashboard,
  LogOut,
  Package,
  Store,
  TriangleAlert,
} from "lucide-react";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col bg-slate-900">
      <Logo />

      <nav className="flex-1 space-y-2 p-4">
        <SidebarItem
          title="Dashboard"
          path="/dashboard"
          icon={LayoutDashboard}
        />

       <SidebarItem
  title="Products"
  path="/products"
  icon={Package}
/>

        <SidebarItem
          title="Stores"
          path="/stores"
          icon={Store}
        />

        <SidebarItem
          title="Stocks"
          path="/stocks"
          icon={Boxes}
        />

        <SidebarItem
          title="Low Stock"
          path="/low-stock"
          icon={TriangleAlert}
        />
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-400 transition hover:bg-red-600 hover:text-white">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;