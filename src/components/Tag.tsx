import type { ReactNode } from "react";

export function Tag({ children }: {children: ReactNode;}) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80">
      {children}
    </span>);

}