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
  login: (data: LoginRequest) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
 const loadUser = useCallback(async () => {
  try {
    const response = await authService.getCurrentUser();
    setUser(response.data);
  } catch {
    setUser(null);
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    void loadUser();
  }, [loadUser]);

  const login = async (data: LoginRequest) => {
    await authService.login(data);

    await loadUser();
  };

  const logout = async () => {
    await authService.logout();

    setUser(null);
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