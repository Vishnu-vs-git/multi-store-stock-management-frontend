
import { api } from "../../../api/axios";
import type { DashboardResponse } from "../types/dashboard.types";

class DashboardService {
  async getDashboard() {
    const response =
      await api.get<DashboardResponse>("/dashboard");

    return response.data;
  }
}

export const dashboardService =
  new DashboardService();