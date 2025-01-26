import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  dark?: boolean;
  variant?: "outlined" | "contained";
  halfwidth?: boolean;
  mdWidth?: boolean;
}

export const RButton = ({
  children,
  fullWidth,
  halfwidth,
  mdWidth,
  disabled,
  success,
  danger,
  dark,
  variant = "contained",
  ...props
}: IButton) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(
        "rounded-t-[30px] rounded-b-[30px] py-3 px-4 text-center capitalize transition-all",
        {
          // Full Width
          "w-full": fullWidth,
          "w-[214px]": halfwidth,
          "w-[129px]": mdWidth,
          // Contained Variant
          "bg-primary text-white hover:bg-secondary": variant === "contained",
          "bg-primary text-white hover:cursor-not-allowed":
            variant === "contained" && disabled,
          // Outlined Variant
          "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white":
            variant === "outlined",
          "bg-transparent border border-primary text-primary cursor-not-allowed":
            variant === "outlined" && disabled,
          // Success State
          "bg-green-500 text-white hover:bg-green-600":
            variant === "contained" && success,
          // Danger State
          "bg-[#BF0401] text-white hover:bg-red-600":
            variant === "contained" && danger,
          // Danger State
          "bg-[#000000] text-white hover:bg-black-600":
            variant === "contained" && dark,
        }
      )}
    >
      {children}
    </button>
  );
};
