import { api } from "../../../api/axios";

import type {
  AdjustStockRequest,
  InitializeStockRequest,
  StocksResponse,
  StockResponse,
  TransferStockRequest,
} from "../types/stock.types";

class StockService {
  async getStocks() {
    const response =
      await api.get<StocksResponse>("/stocks");

    return response.data;
  }

  async initializeStock(
    data: InitializeStockRequest
  ) {
    const response =
      await api.post<StockResponse>(
        "/stocks",
        data
      );

    return response.data;
  }

  async adjustStock(
    data: AdjustStockRequest
  ) {
    const response =
      await api.patch<StockResponse>(
        "/stocks/adjust",
        data
      );

    return response.data;
  }

  async transferStock(
    data: TransferStockRequest
  ) {
    const response =
      await api.post<StockResponse>(
        "/stocks/transfer",
        data
      );

    return response.data;
  }

  async getLowStock() {
    const response =
      await api.get<StocksResponse>(
        "/stocks/low-stock"
      );

    return response.data;
  }
}

export const stockService = new StockService();