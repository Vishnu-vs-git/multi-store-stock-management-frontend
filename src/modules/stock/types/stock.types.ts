import type { ApiResponse } from "../../../types/api.types";

export interface Stock {
  id: string;
  productId: string;
  storeId: string;
  quantity: number;

  product?: {
    id: string;
    name: string;
    sku: string;
  };

  store?: {
    id: string;
    name: string;
    location: string;
  };
}

export interface InitializeStockRequest {
  productId: string;
  storeId: string;
  quantity: number;
}

export interface AdjustStockRequest {
  productId: string;
  storeId: string;
  quantity: number;
  type: "add" | "remove";
}

export interface TransferStockRequest {
  productId: string;
  fromStoreId: string;
  toStoreId: string;
  quantity: number;
}

export type StockResponse = ApiResponse<Stock>;

export type StocksResponse = ApiResponse<Stock[]>;