import { api } from "../../../api/axios";

import type {
  CreateStoreRequest,
  StoreResponse,
  StoresResponse,
} from "../types/store.types";

class StoreService {
  async getStores() {
    const response =
      await api.get<StoresResponse>("/stores");

    return response.data;
  }

  async createStore(
    data: CreateStoreRequest
  ) {
    const response =
      await api.post<StoreResponse>(
        "/stores",
        data
      );

    return response.data;
  }
}

export const storeService = new StoreService();