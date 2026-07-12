import type { Stock } from "../types/stock.types";
interface StockTableProps {
  stocks: Stock[];
  loading: boolean;
  showActions?: boolean;
  onAdjust?: (stock: Stock) => void;
  onTransfer?: (stock: Stock) => void;
}
const StockTable = ({
  stocks,
  loading,
  showActions = true,
  onAdjust,
  onTransfer,
}: StockTableProps) => {
  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500">
        Loading stocks...
      </div>
    );
  }

  if (!stocks.length) {
    return (
      <div className="py-10 text-center text-slate-500">
        No stocks found.
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
              Store
            </th>

            <th className="px-6 py-4 text-left">
              Quantity
            </th>
{showActions && (
  <th className="px-6 py-4 text-center">
    Actions
  </th>
)}
          </tr>
        </thead>

        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {stock.product?.name}
              </td>

              <td className="px-6 py-4">
                {stock.store?.name}
              </td>

              <td className="px-6 py-4">
                {stock.quantity}
              </td>

             {showActions && (
  <td className="px-6 py-4">
    <div className="flex justify-center gap-2">
      <button
        onClick={() => onAdjust?.(stock)}
        className="rounded-lg bg-amber-500 px-3 py-1 text-sm text-white hover:bg-amber-600"
      >
        Adjust
      </button>

      <button
        onClick={() => onTransfer?.(stock)}
        className="rounded-lg bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
      >
        Transfer
      </button>
    </div>
  </td>
)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;