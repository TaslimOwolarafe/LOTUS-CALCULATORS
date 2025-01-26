import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { UseControllerProps, useController } from "react-hook-form";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  disabled?: boolean;
  variant?: "short" | "medium" | "long" | "big";
  smplaceholder?: boolean;
  forminput?: boolean;
  halfwidth?: boolean;
  auth?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export const RoundedTextField = ({
  label,
  variant = "long",
  smplaceholder,
  forminput,
  halfwidth,
  auth,
  error = false,
  errorMessage = "",
  ...props
}: UseControllerProps & ITextField) => {
  const { field, fieldState } = useController(props);

  return (
    <span
      className={clsx("pb-3", {
        "": variant === "long",
        "w-[282px]": variant === "medium",
        "w-[111px] md:w-[172px]": variant === "short",
        "pb-0 p-0 mb-0": variant === 'big'
      })}
    >
      {/* Label */}
      <label className="block text-sm font-medium mb-[6px] text-gray-700"
      style={{
        ...(forminput && { fontSize: '12px' }),
        fontSize: variant === 'big'? '12px' : '',
        fontWeight: variant === 'big'? '300': '',
        lineHeight: variant === 'big'? '11.48px': '',
        marginBottom: '12px'
      }}
      >
        {label}
      </label>

      {/* Input Field */}
      <input
        {...field}
        {...props}
        className={clsx(
          "block smplaceholder:font-[5.77px] w-full rounded-full bg-white appearance-none focus:outline-none py-2 px-4 text-gray-700 placeholder-gray-400 disabled:opacity-75 disabled:cursor-not-allowed",
          {
            "border border-[#DA1E28]": fieldState.invalid,
            "h-[47px] placeholder-big pt-3 pb-3": variant === "big",
          }
        )}
        placeholder={props.placeholder || "Enter value"}
        style={{
          ...(smplaceholder && { fontSize: "5.77px" }),
          ...(forminput && { height: "47px" }),
          ...(halfwidth && { display: 'inline-block' }),
          width: variant === 'big'? '380px': '',
          ...(auth && { width: "375px" }),
        }}
      />

      {/* Error Message */}
      {/* Error Message */}
      {(fieldState.error?.message || (error && errorMessage)) && (
        <span
          className={clsx("text-sm mt-[6px]", {
            "text-[#DA1E28]": error || fieldState.invalid,
          })}
        >
          {fieldState.error?.message || errorMessage}
        </span>
      )}
    </span>
  );
};
