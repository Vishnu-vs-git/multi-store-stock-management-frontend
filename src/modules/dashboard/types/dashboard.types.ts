export interface DashboardData {
  totalProducts: number;
  totalStores: number;
  totalStockEntries: number;
  lowStockItems: number;
}

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}