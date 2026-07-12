import type { ApiResponse } from "../../../types/api.types";

export interface Product {
  id: string;
  name: string;
  sku: string;
  description?: string;
  price: number;
}

export interface CreateProductRequest {
  name: string;
  sku: string;
  description?: string;
  price: number;
}

export type ProductResponse = ApiResponse<Product>;
export type ProductsResponse = ApiResponse<Product[]>;