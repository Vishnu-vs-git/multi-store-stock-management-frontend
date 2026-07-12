import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/useAuth";


const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";

      case "/products":
        return "Products";

      case "/stores":
        return "Stores";

      case "/stocks":
        return "Stocks";

      case "/low-stock":
        return "Low Stock";

      default:
        return "Dashboard";
    }
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {getTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative rounded-full p-2 transition hover:bg-slate-100">
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            {user?.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-semibold text-slate-800">
              {user?.name}
            </p>

            <p className="text-sm capitalize text-slate-500">
              {user?.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;