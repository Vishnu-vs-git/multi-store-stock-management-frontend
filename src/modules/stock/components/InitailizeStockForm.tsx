import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  initializeStockSchema,
  type InitializeStockFormData,
} from "../validators/stock.schema";

import type { Product } from "../../product/types/product.types";
import type { Store } from "../../store/types/store.types";

interface InitializeStockFormProps {
  products: Product[];
  stores: Store[];
  onSubmit: (
    data: InitializeStockFormData
  ) => Promise<void>;
}

const InitializeStockForm = ({
  products,
  stores,
  onSubmit,
}: InitializeStockFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<InitializeStockFormData>({
    resolver: zodResolver(initializeStockSchema),
    defaultValues: {
      productId: "",
      storeId: "",
      quantity: 0,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Product */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Product
        </label>

        <select
          {...register("productId")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Product
          </option>

          {products.map((product) => (
            <option
              key={product.id}
              value={product.id}
            >
              {product.name}
            </option>
          ))}
        </select>

        {errors.productId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.productId.message}
          </p>
        )}
      </div>

      {/* Store */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Store
        </label>

        <select
          {...register("storeId")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Store
          </option>

          {stores.map((store) => (
            <option
              key={store.id}
              value={store.id}
            >
              {store.name}
            </option>
          ))}
        </select>

        {errors.storeId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.storeId.message}
          </p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Quantity
        </label>

        <input
          type="number"
          {...register("quantity", {
            valueAsNumber: true,
          })}
          className="w-full rounded-lg border p-3"
          placeholder="Enter quantity"
        />

        {errors.quantity && (
          <p className="mt-1 text-sm text-red-500">
            {errors.quantity.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting
            ? "Initializing..."
            : "Initialize Stock"}
        </button>
      </div>
    </form>
  );
};

export default InitializeStockForm;