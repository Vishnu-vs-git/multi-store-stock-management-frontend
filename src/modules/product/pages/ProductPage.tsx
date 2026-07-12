import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import Modal from "../../../components/ui/Modal";
import ProductForm from "../components/ProductForm";
import { productService } from "../services/product.service";
import type { ProductFormData } from "../validators/product.schema";
import ProductTable from "../components/ProductTable";
import type { Product } from "../types/product.types";


const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(false);
  
 const fetchProducts = async () => {
  try {
    setLoading(true);

    const response = await productService.getProducts();

    setProducts(response.data);
  } catch (error: any) {
    toast.error(
      error.response?.data?.message ??
        "Failed to fetch products"
    );
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
  fetchProducts();
}, []);
  const handleCreateProduct = async (
    data: ProductFormData
  ) => {
    try {
      const response =
        await productService.createProduct(data);

      toast.success(response.message);

      setIsOpen(false);
       await fetchProducts();
    
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to create product"
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <p className="text-slate-500">
            Manage your products
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

     <div className="rounded-xl bg-white p-6 shadow-sm">
  <ProductTable
    products={products}
    loading={loading}
  />
</div>

      <Modal
        open={isOpen}
        title="Add Product"
        onClose={() => setIsOpen(false)}
      >
        <ProductForm
          onSubmit={handleCreateProduct}
        />
      </Modal>
    </div>
  );
};

export default ProductPage;