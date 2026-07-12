import {
  Boxes,
  Package,
  Store,
  TriangleAlert,
} from "lucide-react";


import QuickActions from "../components/QuickActions";
import StatCard from "../components/StaticCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


import type { DashboardData } from "../types/dashboard.types";
import { dashboardService } from "../service/dashboard.service";
const DashboardPage = () => {
  const [dashboard, setDashboard] =
  useState<DashboardData | null>(null);

const [loading, setLoading] =
  useState(false);

  useEffect(() => {
  const loadDashboard = async () => {
    try {
      setLoading(true);

      const response =
        await dashboardService.getDashboard();

      setDashboard(response.data);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  loadDashboard();
}, []);
   if(loading) return<p>Loading</p>
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
         value={dashboard?.totalProducts ?? 0}
          icon={Package}
        />

        <StatCard
          title="Stores"
          value={dashboard?.totalStores ?? 0}
          icon={Store}
        />

        <StatCard
          title="Stock Entries"
        value={dashboard?.totalStockEntries ?? 0}
          icon={Boxes}
        />

        <StatCard
          title="Low Stock"
          value={dashboard?.lowStockItems ?? 0}
          icon={TriangleAlert}
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default DashboardPage;