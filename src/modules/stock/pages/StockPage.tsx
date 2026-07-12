import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import Modal from "../../../components/ui/Modal";

import StockTable from "../components/StockTable";
import InitializeStockForm from "../components/InitailizeStockForm";
import AdjustStockForm from "../components/AdjustStockForm";

import { stockService } from "../service/stock.service";
import { productService } from "../../product/services/product.service";
import { storeService } from "../../store/services/store.service";

import type { Stock } from "../types/stock.types";
import type { Product } from "../../product/types/product.types";
import type { Store } from "../../store/types/store.types";

import type {
  InitializeStockFormData,
  AdjustStockFormData,
  TransferStockFormData,
} from "../validators/stock.schema";
import TransferStockForm from "../components/TransferStockForm";
interface StockPageProps {
  readOnly?: boolean;
}
const StockPage = ({
  readOnly = false,
}: StockPageProps) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [isTransferOpen, setIsTransferOpen] =
  useState(false);

  const [loading, setLoading] = useState(false);

  const [selectedStock, setSelectedStock] =
    useState<Stock | null>(null);

  const [isInitializeOpen, setIsInitializeOpen] =
    useState(false);

  const [isAdjustOpen, setIsAdjustOpen] =
    useState(false);

  const loadData = async () => {
    try {
      setLoading(true);

      const [
        productsResponse,
        storesResponse,
        stocksResponse,
      ] = await Promise.all([
        productService.getProducts(),
        storeService.getStores(),
        stockService.getStocks(),
      ]);

      setProducts(productsResponse.data);
      setStores(storesResponse.data);
      setStocks(stocksResponse.data);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to load data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInitializeStock = async (
    data: InitializeStockFormData
  ) => {
    try {
      const response =
        await stockService.initializeStock(data);

      toast.success(response.message);

      setIsInitializeOpen(false);

      await loadData();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to initialize stock"
      );
    }
  };

  const handleAdjust = (stock: Stock) => {
    setSelectedStock(stock);
    setIsAdjustOpen(true);
  };

  const handleAdjustStock = async (
    data: AdjustStockFormData
  ) => {
    try {
      const response =
        await stockService.adjustStock(data);

      toast.success(response.message);

      setIsAdjustOpen(false);
      setSelectedStock(null);

      await loadData();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to adjust stock"
      );
    }
  };
const handleTransfer = (stock: Stock) => {
   console.log("Transfer clicked", stock);
  setSelectedStock(stock);
  setIsTransferOpen(true);
};
const handleTransferStock = async (
  data: TransferStockFormData
) => {
  try {
    const response =
      await stockService.transferStock(data);

    toast.success(response.message);

    setIsTransferOpen(false);
    setSelectedStock(null);

    await loadData();
  } catch (error: any) {
    toast.error(
      error.response?.data?.message ??
        "Failed to transfer stock"
    );
  }
};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Stocks
          </h1>

          <p className="text-slate-500">
            Manage product inventory
          </p>
        </div>

      {!readOnly && (
  <button
    onClick={() => setIsInitializeOpen(true)}
    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
  >
    <Plus size={18} />
    Initialize Stock
  </button>
)}
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <StockTable
          stocks={stocks}
          loading={loading}
           showActions={!readOnly}
          onAdjust={handleAdjust}
          onTransfer={handleTransfer}
        />
      </div>

      {/* Initialize Stock Modal */}
      <Modal
        open={isInitializeOpen}
        title="Initialize Stock"
        onClose={() => setIsInitializeOpen(false)}
      >
        <InitializeStockForm
          products={products}
          stores={stores}
          onSubmit={handleInitializeStock}
        />
      </Modal>

      {/* Adjust Stock Modal */}
      <Modal
        open={isAdjustOpen}
        title="Adjust Stock"
        onClose={() => {
          setIsAdjustOpen(false);
          setSelectedStock(null);
        }}
      >
        {selectedStock && (
          <AdjustStockForm
            stock={selectedStock}
            onSubmit={handleAdjustStock}
          />
        )}
      </Modal>
      <Modal
  open={isTransferOpen}
  title="Transfer Stock"
  onClose={() => {
    setIsTransferOpen(false);
    setSelectedStock(null);
  }}
>
  {selectedStock && (
    <TransferStockForm
      stock={selectedStock}
      stores={stores}
      onSubmit={handleTransferStock}
    />
    
  )}

  <h1>Hello Transfer</h1>
</Modal>
    </div>
  );
};

export default StockPage;