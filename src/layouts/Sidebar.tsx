const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold">
          StockFlow
        </h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li className="rounded-lg p-3 hover:bg-slate-800 cursor-pointer">
            Dashboard
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-800 cursor-pointer">
            Products
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-800 cursor-pointer">
            Stores
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-800 cursor-pointer">
            Stocks
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-800 cursor-pointer">
            Low Stock
          </li>

          <li className="rounded-lg p-3 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer">
            Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;