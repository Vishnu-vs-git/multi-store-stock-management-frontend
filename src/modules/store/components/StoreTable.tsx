import type { Store } from "../types/store.types";

interface StoreTableProps {
  stores: Store[];
  loading: boolean;
}

const StoreTable = ({
  stores,
  loading,
}: StoreTableProps) => {
  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500">
        Loading stores...
      </div>
    );
  }

  if (!stores.length) {
    return (
      <div className="py-10 text-center text-slate-500">
        No stores found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">
              Store Name
            </th>

            <th className="px-6 py-4 text-left">
              Location
            </th>
          </tr>
        </thead>

        <tbody>
          {stores.map((store) => (
            <tr
              key={store.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {store.name}
              </td>

              <td className="px-6 py-4">
                {store.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreTable;