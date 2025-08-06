import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import type { AlertProps } from "../../interfaces/interfaces";
import { cn } from "../../utils/cn";
import React from "react";

type AlertType = "info" | "success" | "warning" | "error";

const typeStyles: Record<AlertType, { bg: string; icon: React.ReactElement }> = {
  info: {
    bg: "bg-blue-50 text-blue-800",
    icon: <Info className="w-5 h-5 text-blue-600" />,
  },
  success: {
    bg: "bg-green-50 text-green-800",
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
  },
  warning: {
    bg: "bg-orange-50 text-orange-800",
    icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
  },
  error: {
    bg: "bg-red-50 text-red-800",
    icon: <AlertCircle className="w-5 h-5 text-red-600" />,
  },
};

export const Alert: React.FC<AlertProps> = ({
  type = "info",
  label,
  text,
  showClose = false,
  onClose,
  className,
}) => {
  const { bg, icon } = typeStyles[type];

  return (
    <div
      className={cn(
        "rounded-xl p-4 flex items-start justify-between gap-4",
        bg,
        className
      )}
    >
      <div className="flex gap-3">
        <div className="pt-1">{icon}</div>
        <div className="text-sm space-y-1">
          {label && <p className="font-semibold leading-none">{label}</p>}
          {text && <p className="leading-snug">{text}</p>}
        </div>
      </div>

      {showClose && (
        <button
          onClick={onClose}
          className="text-inherit hover:opacity-70 transition"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
