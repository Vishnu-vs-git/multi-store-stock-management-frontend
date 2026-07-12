import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  adjustStockSchema,
  type AdjustStockFormData,
} from "../validators/stock.schema";

import type { Stock } from "../types/stock.types";

interface AdjustStockFormProps {
  stock: Stock;
  onSubmit: (
    data: AdjustStockFormData
  ) => Promise<void>;
}

const AdjustStockForm = ({
  stock,
  onSubmit,
}: AdjustStockFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<AdjustStockFormData>({
    resolver: zodResolver(adjustStockSchema),

    defaultValues: {
      productId: stock.productId,
      storeId: stock.storeId,
      quantity: 0,
      type: "add",
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

        <input
          value={stock.product?.name}
          disabled
          className="w-full rounded-lg border bg-slate-100 p-3"
        />
      </div>

      {/* Store */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Store
        </label>

        <input
          value={stock.store?.name}
          disabled
          className="w-full rounded-lg border bg-slate-100 p-3"
        />
      </div>

      {/* Type */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Adjustment Type
        </label>

        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="add"
              {...register("type")}
            />
            Add
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="remove"
              {...register("type")}
            />
            Remove
          </label>
        </div>

        {errors.type && (
          <p className="mt-1 text-sm text-red-500">
            {errors.type.message}
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
            ? "Updating..."
            : "Adjust Stock"}
        </button>
      </div>
    </form>
  );
};

export default AdjustStockForm;