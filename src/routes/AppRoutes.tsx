import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../modules/auth/pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../modules/dashboard/pages/dashboardPage";
import ProductPage from "../modules/product/pages/ProductPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
  {/* Public */}
  <Route path="/login" element={<LoginPage />} />

  {/* Protected */}
  <Route element={<ProtectedRoute />}>
    <Route element={<DashboardLayout />}>
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      {/* We'll add these later */}
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/stores" element={<div>Stores</div>} />
      <Route path="/stocks" element={<div>Stocks</div>} />
    </Route>
  </Route>
</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;