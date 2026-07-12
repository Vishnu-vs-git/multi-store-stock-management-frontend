import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  transferStockSchema,
  type TransferStockFormData,
} from "../validators/stock.schema";

import type { Stock } from "../types/stock.types";
import type { Store } from "../../store/types/store.types";

interface TransferStockFormProps {
  stock: Stock;
  stores: Store[];
  onSubmit: (
    data: TransferStockFormData
  ) => Promise<void>;
}

const TransferStockForm = ({
  stock,
  stores,
  onSubmit,
}: TransferStockFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<TransferStockFormData>({
    resolver: zodResolver(transferStockSchema),

    defaultValues: {
      productId: stock.product?.id,
      fromStoreId: stock.store?.id,
      toStoreId: "",
      quantity: 0,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Hidden fields */}
      <input
        type="hidden"
        {...register("productId")}
      />

      <input
        type="hidden"
        {...register("fromStoreId")}
      />

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

      {/* From Store */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          From Store
        </label>

        <input
          value={stock.store?.name}
          disabled
          className="w-full rounded-lg border bg-slate-100 p-3"
        />
      </div>

      {/* To Store */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          To Store
        </label>

        <select
          {...register("toStoreId")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Destination Store
          </option>

          {stores
            .filter(
              (store) =>
                store.id !== stock.store?.id
            )
            .map((store) => (
              <option
                key={store.id}
                value={store.id}
              >
                {store.name}
              </option>
            ))}
        </select>

        {errors.toStoreId && (
          <p className="mt-1 text-sm text-red-500">
            {errors.toStoreId.message}
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
          className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting
            ? "Transferring..."
            : "Transfer Stock"}
        </button>
      </div>
    </form>
  );
};

export default TransferStockForm;