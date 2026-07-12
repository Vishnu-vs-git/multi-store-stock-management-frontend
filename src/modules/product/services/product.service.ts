import { api } from "../../../api/axios";
import type {
  CreateProductRequest,
  ProductResponse,
  ProductsResponse,
} from "../types/product.types";

class ProductService {
  async getProducts() {
    const response = await api.get<ProductsResponse>(
      "/products"
    );

    return response.data;
  }

  async createProduct(
    data: CreateProductRequest
  ) {
    const response = await api.post<ProductResponse>(
      "/products",
      data
    );

    return response.data;
  }
}

export const productService = new ProductService();