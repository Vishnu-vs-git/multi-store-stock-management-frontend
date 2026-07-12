import {
  Boxes,
  Package,
  Store,
  TriangleAlert,
} from "lucide-react";


import QuickActions from "../components/QuickActions";
import StatCard from "../components/StaticCard";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening in your inventory.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Products"
          value={12}
          icon={Package}
        />

        <StatCard
          title="Stores"
          value={5}
          icon={Store}
        />

        <StatCard
          title="Stocks"
          value={220}
          icon={Boxes}
        />

        <StatCard
          title="Low Stock"
          value={8}
          icon={TriangleAlert}
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default DashboardPage;