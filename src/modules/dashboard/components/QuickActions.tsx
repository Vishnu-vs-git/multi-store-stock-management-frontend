import {
  ArrowRightLeft,
  PackagePlus,
  Store,
  Boxes,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ActionCard from "./ActionCard";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <ActionCard
          title="Add Product"
          description="Create a new product"
          icon={PackagePlus}
          onClick={() => navigate("/products")}
        />

        <ActionCard
          title="Add Store"
          description="Create a new store"
          icon={Store}
          onClick={() => navigate("/stores")}
        />

        <ActionCard
          title="Initialize Stock"
          description="Assign stock to a store"
          icon={Boxes}
          onClick={() => navigate("/stocks")}
        />

        <ActionCard
          title="Transfer Stock"
          description="Transfer between stores"
          icon={ArrowRightLeft}
          onClick={() => navigate("/stocks")}
        />
      </div>
    </div>
  );
};

export default QuickActions;