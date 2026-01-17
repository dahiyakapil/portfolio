
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";

interface StatusBadgeProps {
  status?: ProjectStatus;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Completed:
    "bg-green-500/10 text-green-500 border border-green-500/20",
  "In Progress":
    "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
  Planned:
    "bg-blue-500/10 text-blue-500 border border-blue-500/20",
};

export function StatusBadge({ status = "Completed" }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
        STATUS_STYLES[status]
      )}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}
