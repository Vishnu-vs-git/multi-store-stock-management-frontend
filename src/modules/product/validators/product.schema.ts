import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Product name must be at least 3 characters")
    .max(100, "Product name cannot exceed 100 characters"),

  sku: z
    .string()
    .trim()
    .min(3, "SKU must be at least 3 characters")
    .max(30, "SKU cannot exceed 30 characters")
    .transform((value) => value.toUpperCase()),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters")
    .optional(),
price: z
  .number()
  .positive("Price must be greater than 0"),
});export type ProductFormData = z.infer<typeof productSchema>;