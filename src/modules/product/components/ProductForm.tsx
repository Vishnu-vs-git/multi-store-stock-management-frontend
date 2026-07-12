import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  productSchema,

  type ProductFormData,
} from "../validators/product.schema";

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => Promise<void>;
}

const ProductForm = ({
  onSubmit,
}: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: "",
      sku: "",
      description: "",
      price: 0,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Product Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter product name"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* SKU */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          SKU
        </label>

        <input
          {...register("sku")}
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter SKU"
        />

        {errors.sku && (
          <p className="mt-1 text-sm text-red-500">
            {errors.sku.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter description"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Price
        </label>

        <input
          type="number"
          step="0.01"
          {...register("price", {
  valueAsNumber: true,
})}
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
          placeholder="Enter price"
        />

        {errors.price && (
          <p className="mt-1 text-sm text-red-500">
            {errors.price.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting
            ? "Saving..."
            : "Save Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;