

import { api } from "../../../api/axios";
import type { AuthResponse, LoginRequest } from "../types/auth.types";

class AuthService {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    return response.data;
  }

  async logout() {
    const response = await api.post("/auth/logout");

    return response.data;
  }

  async refreshToken() {
    const response = await api.post("/auth/refresh");

    return response.data;
  }
}

export const authService = new AuthService();