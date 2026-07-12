const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          A
        </div>

        <div>
          <p className="font-medium">Admin</p>
          <p className="text-sm text-slate-500">
            Administrator
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;