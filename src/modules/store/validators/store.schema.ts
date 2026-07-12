import { z } from "zod";

export const storeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Store name must be at least 3 characters")
    .max(100, "Store name cannot exceed 100 characters"),

  location: z
    .string()
    .trim()
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location cannot exceed 100 characters"),
});

export type StoreFormData = z.infer<typeof storeSchema>;