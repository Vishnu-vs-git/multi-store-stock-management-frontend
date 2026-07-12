import type { ApiResponse } from "../../../types/api.types";

export interface Store {
  id: string;
  name: string;
  location: string;
}

export interface CreateStoreRequest {
  name: string;
  location: string;
}

export type StoreResponse = ApiResponse<Store>;

export type StoresResponse = ApiResponse<Store[]>;