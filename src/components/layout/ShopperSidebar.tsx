import { Boxes, Package, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../modules/auth/hooks/useAuth";
import toast from "react-hot-toast";

const links = [
  {
    title: "Products",
    path: "/shop/products",
    icon: Package,
  },
  {
    title: "Stocks",
    path: "/shop/stocks",
    icon: Boxes,
  },
];

const ShopperSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <aside className="w-64 border-r bg-white flex flex-col justify-between h-screen">
      <div>
        <div className="p-6 text-2xl font-bold">
          Inventory
        </div>

        <nav className="space-y-2 p-4">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg p-3 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />
                {link.title}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50 hover:text-red-700 cursor-pointer"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default ShopperSidebar;