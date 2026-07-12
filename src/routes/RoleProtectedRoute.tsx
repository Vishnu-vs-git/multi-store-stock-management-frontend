import {
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from "../modules/auth/hooks/useAuth";



interface RoleProtectedRouteProps {
  allowedRoles: string[];
}

const RoleProtectedRoute = ({
  allowedRoles,
}: RoleProtectedRouteProps) => {
  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (
    !allowedRoles.includes(user.role)
  ) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default RoleProtectedRoute;