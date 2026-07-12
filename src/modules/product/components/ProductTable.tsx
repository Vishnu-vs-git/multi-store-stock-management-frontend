import type { Product } from "../types/product.types";

interface ProductTableProps {
  products: Product[];
  loading: boolean;
}

const ProductTable = ({
  products,
  loading,
}: ProductTableProps) => {
  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500">
        Loading products...
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="py-10 text-center text-slate-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">SKU</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium">
                {product.name}
              </td>

              <td className="px-6 py-4">
                {product.sku}
              </td>

              <td className="px-6 py-4">
                ₹{product.price.toLocaleString()}
              </td>

              <td className="px-6 py-4">
                {product.description || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;