import { ReactNode } from "react";

type InfoBoxType = "tip" | "warning" | "info" | "highlight";

const STYLES: Record<InfoBoxType, { bg: string; border: string; icon: string; label: string }> = {
  tip: {
    bg: "bg-jade-50",
    border: "border-jade/30",
    icon: "💡",
    label: "Local Tip",
  },
  warning: {
    bg: "bg-red-50",
    border: "border-cinnabar/20",
    icon: "⚠️",
    label: "Important",
  },
  info: {
    bg: "bg-sand-100",
    border: "border-sand-200",
    icon: "ℹ️",
    label: "Info",
  },
  highlight: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "✨",
    label: "Highlight",
  },
};

export function InfoBox({
  type = "info",
  title,
  children,
}: {
  type?: InfoBoxType;
  title?: string;
  children: ReactNode;
}) {
  const style = STYLES[type];

  return (
    <div className={`my-6 p-4 sm:p-5 rounded-lg border ${style.bg} ${style.border}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0 mt-0.5">{style.icon}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sand-500 mb-1">
            {title || style.label}
          </p>
          <div className="text-sm text-stone-700 [&>p]:mb-0 [&>p]:text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
