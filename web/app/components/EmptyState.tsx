import type { LucideIcon } from "lucide-react";
import Button from "./Button";

type EmptyStateProps = {
  icon: LucideIcon;
  message: string;
  action?: { label: string; href: string };
};

export default function EmptyState({ icon: Icon, message, action }: EmptyStateProps) {
  return (
    <div className="max-w-md mx-auto text-center py-4">
      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
        <Icon className="w-6 h-6 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <p className="font-body text-[16px] text-navy/70 leading-[1.65]">{message}</p>
      {action && (
        <div className="mt-6 flex justify-center">
          <Button href={action.href} variant="secondary">
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}
