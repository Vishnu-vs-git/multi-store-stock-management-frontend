import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { LoginRequest, User } from "../types/auth.types";
import { authService } from "../services/auth.service";



interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => Promise<User>;
  logout: () => Promise<void>;
  loadUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(
  null
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(!localStorage.getItem("user"));

  const loadUser = useCallback(async () => {
    try {
      const response = await authService.getCurrentUser();
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch {
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  }, []);
useEffect(() => {
  if (window.location.pathname !== "/login") {
    void loadUser();
  } else {
    setLoading(false);
  }
}, [loadUser]);

  const login = async (
    data: LoginRequest
  ): Promise<User> => {
    await authService.login(data);

    const response = await authService.getCurrentUser();

    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  };
const logout = async () => {
  try {
    await authService.logout();
  } finally {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};