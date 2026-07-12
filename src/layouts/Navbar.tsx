import { useAuth } from "../modules/auth/hooks/useAuth";
import { Role } from "../constants/roles";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-semibold">
            {user?.name}
          </p>

          <p className="text-sm text-slate-500">
            {user?.role === Role.ADMIN
              ? "Administrator"
              : "Shopper"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;