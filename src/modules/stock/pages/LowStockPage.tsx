import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import LowStockTable from "../components/LowStockTable";
import { stockService } from "../service/stock.service";

import type { Stock } from "../types/stock.types";

const LowStockPage = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLowStocks = async () => {
      try {
        setLoading(true);

        const response =
          await stockService.getLowStock();

        setStocks(response.data);
      } catch (error: any) {
        toast.error(
          error.response?.data?.message ??
            "Failed to fetch low stock"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLowStocks();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Low Stock
        </h1>

        <p className="text-slate-500">
          Products that require replenishment.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <LowStockTable
          stocks={stocks}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default LowStockPage;