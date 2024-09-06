import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isProfile?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isProfile = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full text-primary placeholder-primary text-sm  lg:text-lg file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50",
          {
            [`border-2 border-primary bg-background px-3 py-2 xl:h-20 h-16`]:
              !isProfile,
              [`border-b-2 border-primary bg-transparent h-12 placeholder:text-primary lg:text-2xl`]:
                isProfile,
                [`hidden`]:
                  type =="file",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
