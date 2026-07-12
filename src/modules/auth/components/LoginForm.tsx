import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormData,
} from "../validators/login.schema";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
const navigate = useNavigate();
  const {
  register,
  handleSubmit,
  setValue,
  formState: { errors, isSubmitting },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});
const fillAdminCredentials = () => {
  setValue("email", "vishnu@gmail.com");
  setValue("password", "admin123");
};

const fillShopperCredentials = () => {
  setValue("email", "shopper@example.com");
  setValue("password", "shopper123");
};
const onSubmit = async (
  data: LoginFormData
): Promise<void> => {
  try {
    const loggedInUser = await login(data);

    toast.success("Login successful");

    if (loggedInUser.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/shop/products");
    }
  } catch (error: any) {
    toast.error(
      error.response?.data?.message ??
        "Login failed"
    );
  }
};
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500">
          Sign in to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="mb-6 grid grid-cols-2 gap-3">
  <button
    type="button"
    onClick={fillAdminCredentials}
    className="rounded-lg border border-blue-600 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
  >
    Login as Admin
  </button>

  <button
    type="button"
    onClick={fillShopperCredentials}
    className="rounded-lg border border-green-600 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
  >
    Login as Shopper
  </button>
</div>
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Signing In..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;