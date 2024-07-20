import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-violet-200 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-violet-250 transition-all disabled:opacity",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
