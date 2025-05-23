"use client"
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex rounded-2xl items-center w-full justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-greenish text-secondary text-xl xl:text-2xl hover:opacity-70 active:opacity-100 ",
        transparent:
          "bg-transparent text-primary text-xl xl:text-2xl border-2 border-greenish hover:bg-greenish hover:text-secondary active:bg-transparent active:text-primary",
        modal:
          "bg-transparent text-primary text-xl xl:text-2xl border-2 border-primary hover:opacity-70 active:opacity-100",
        social_black:
          "text-xl xl:text-2xl gap-8 border-2 border-secondary text-secondary bg-primary hover:invert",
        social_white:
          "text-xl xl:text-2xl gap-8 border-2 border-primary text-primary bg-secondary hover:invert",
        black:
          "text-xl xl:text-2xl bg-primary border-2 border-primary text-secondary hover:bg-secondary hover:text-primary hover:border-primary active:text-secondary active:bg-primary",
        white:
          "text-xl xl:text-2xl bg-secondary border-2 border-primary text-primary hover:bg-primary hover:text-secondary active:text-primary active:bg-secondary",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-8 px-4 py-2",
        sm: "h-6 px-3",
        lg: "xl:h-18 h-14 px-8",
        icon: "h-10 w-10",
        square: "size-[280px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
