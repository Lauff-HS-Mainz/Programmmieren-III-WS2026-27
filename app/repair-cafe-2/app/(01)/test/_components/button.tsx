import type { ButtonHTMLAttributes } from "react";

export function Button({
  type = "button",
  style,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      style={{ backgroundColor: "lightblue", ...style }}
      {...props}
    />
  );
}

export default Button;