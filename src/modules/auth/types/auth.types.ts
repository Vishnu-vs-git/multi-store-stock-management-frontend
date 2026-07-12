// src/modules/auth/types/auth.types.ts

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "shopper";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
}