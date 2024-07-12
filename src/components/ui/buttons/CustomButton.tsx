import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "green" | "transparent" | "white" | "black";
}

export default function CustomButton(props: ICustomButton) {
  const { theme = "green", className, children, ...rest } = props;

  return (
    <button
      className={clsx({
        [`block w-full mx-auto text-2xl border-2 py-5 ${className}`]: true,
        ["bg-greenish text-secondary border-greenish"]: theme === "green",
        ["bg-secondary text-primary border-primary"]: theme === "white",
        ["bg-primary text-secondary border-secondary"]: theme === "black",
        ["bg-transparent text-primary border-greenish"]:
          theme === "transparent",
      })}
      children={children}
      {...rest}
    />
  );
}
