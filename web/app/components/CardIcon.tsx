import type { LucideIcon } from "lucide-react";

type CardIconProps = {
  icon: LucideIcon;
  className?: string;
};

export default function CardIcon({ icon: Icon, className = "" }: CardIconProps) {
  return (
    <div
      className={`w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark mb-4 ${className}`}
    >
      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
