import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

const base =
  "inline-flex items-center justify-center w-full max-w-[400px] sm:w-auto text-center font-body font-medium px-8 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const variants = {
  primary: "bg-gold text-navy hover:bg-navy hover:text-gold",
  secondary: "border border-navy text-navy hover:bg-navy hover:text-white",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
