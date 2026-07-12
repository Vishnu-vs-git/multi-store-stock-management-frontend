import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  storeSchema,
  type StoreFormData,
} from "../validators/store.schema";

interface StoreFormProps {
  onSubmit: (data: StoreFormData) => Promise<void>;
}

const StoreForm = ({ onSubmit }: StoreFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StoreFormData>({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Store Name
        </label>

        <input
          {...register("name")}
          placeholder="Enter store name"
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Location
        </label>

        <input
          {...register("location")}
          placeholder="Enter location"
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
        />

        {errors.location && (
          <p className="mt-1 text-sm text-red-500">
            {errors.location.message}
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
            ? "Saving..."
            : "Save Store"}
        </button>
      </div>
    </form>
  );
};

export default StoreForm;