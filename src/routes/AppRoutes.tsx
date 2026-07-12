import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../modules/auth/pages/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../modules/dashboard/pages/dashboardPage";
import ProductPage from "../modules/product/pages/ProductPage";
import StorePage from "../modules/store/pages/StorePage";
import StockPage from "../modules/stock/pages/StockPage";
import LowStockPage from "../modules/stock/pages/LowStockPage";
import RoleProtectedRoute from "./RoleProtectedRoute";
import { Role } from "../constants/roles";

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route
      path="/login"
      element={<LoginPage />}
    />

    {/* Shared Layout */}
    <Route element={<DashboardLayout />}>
      {/* Admin */}
      <Route
        element={
          <RoleProtectedRoute
            allowedRoles={[Role.ADMIN]}
          />
        }
      >
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="/products"
          element={<ProductPage />}
        />
        <Route
          path="/stores"
          element={<StorePage />}
        />
        <Route
          path="/stocks"
          element={<StockPage />}
        />
        <Route
          path="/low-stock"
          element={<LowStockPage />}
        />
      </Route>

      {/* Shopper */}
      <Route
        element={
          <RoleProtectedRoute
            allowedRoles={[Role.SHOPPER]}
          />
        }
      >
        <Route
          path="/shop/products"
          element={<ProductPage readOnly />}
        />
        <Route
          path="/shop/stocks"
          element={<StockPage readOnly />}
        />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>
  );
};

export default AppRoutes;