import { z } from "zod";

export const initializeStockSchema = z.object({
  productId: z.string().min(1, "Product is required"),

  storeId: z.string().min(1, "Store is required"),

  quantity: z
    .number()
    .int()
    .min(0, "Quantity cannot be negative"),
});

export type InitializeStockFormData = z.infer<
  typeof initializeStockSchema
>;

export const adjustStockSchema = z.object({
  productId: z.string().min(1, "Product is required"),

  storeId: z.string().min(1, "Store is required"),

  quantity: z
    .number()
    .int()
    .positive("Quantity must be greater than zero"),

  type: z.enum(["add", "remove"]),
});

export type AdjustStockFormData = z.infer<
  typeof adjustStockSchema
>;

export const transferStockSchema = z.object({
  productId: z.string().min(1, "Product is required"),

  fromStoreId: z.string().min(1, "Source store is required"),

  toStoreId: z.string().min(1, "Destination store is required"),

  quantity: z
    .number()
    .int()
    .positive("Quantity must be greater than zero"),
});

export type TransferStockFormData = z.infer<
  typeof transferStockSchema
>;