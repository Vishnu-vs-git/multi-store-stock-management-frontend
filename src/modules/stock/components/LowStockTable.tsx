import { TriangleAlert } from "lucide-react";

import type { Stock } from "../types/stock.types";

interface LowStockTableProps {
  stocks: Stock[];
  loading: boolean;
}

const LowStockTable = ({
  stocks,
  loading,
}: LowStockTableProps) => {
  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500">
        Loading...
      </div>
    );
  }

  if (!stocks.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <TriangleAlert
          size={48}
          className="text-green-500"
        />

        <h3 className="mt-4 text-lg font-semibold">
          No Low Stock Products
        </h3>

        <p className="mt-2 text-slate-500">
          Everything is well stocked.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">
              Product
            </th>

            <th className="px-6 py-4 text-left">
              SKU
            </th>

            <th className="px-6 py-4 text-left">
              Store
            </th>

            <th className="px-6 py-4 text-left">
              Quantity
            </th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4">
                {stock.product?.name}
              </td>

              <td className="px-6 py-4">
                {stock.product?.sku}
              </td>

              <td className="px-6 py-4">
                {stock.store?.name}
              </td>

              <td className="px-6 py-4 font-semibold text-red-600">
                {stock.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LowStockTable;