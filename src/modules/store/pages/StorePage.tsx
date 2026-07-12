import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import Modal from "../../../components/ui/Modal";
import StoreForm from "../components/StoreForm";
import StoreTable from "../components/StoreTable";
import { storeService } from "../services/store.service";

import type { Store } from "../types/store.types";
import type { StoreFormData } from "../validators/store.schema";

const StorePage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchStores = async () => {
    try {
      setLoading(true);

      const response = await storeService.getStores();

      setStores(response.data);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to fetch stores"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleCreateStore = async (
    data: StoreFormData
  ) => {
    try {
      const response =
        await storeService.createStore(data);

      toast.success(response.message);

      setIsOpen(false);

      await fetchStores();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ??
          "Failed to create store"
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Stores
          </h1>

          <p className="text-slate-500">
            Manage your stores
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Store
        </button>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <StoreTable
          stores={stores}
          loading={loading}
        />
      </div>

      <Modal
        open={isOpen}
        title="Add Store"
        onClose={() => setIsOpen(false)}
      >
        <StoreForm
          onSubmit={handleCreateStore}
        />
      </Modal>
    </div>
  );
};

export default StorePage;