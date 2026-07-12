import type { LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ActionCard = ({
  title,
  description,
  icon: Icon,
  onClick,
}: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="rounded-lg bg-blue-100 p-3">
        <Icon className="text-blue-600" size={24} />
      </div>

      <div>
        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <p className="text-sm text-slate-500">
          {description}
        </p>
      </div>
    </button>
  );
};

export default ActionCard;