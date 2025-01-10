import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean; 
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp ref={ref} className={className} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
