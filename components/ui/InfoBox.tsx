import { ReactNode } from "react";

type InfoBoxType = "tip" | "warning" | "info" | "highlight";

const STYLES: Record<InfoBoxType, { bg: string; border: string; icon: string; label: string; labelColor: string }> = {
  tip: {
    bg: "bg-jade-50",
    border: "border-l-[3px] border-jade",
    icon: "💡",
    label: "Local Tip",
    labelColor: "text-jade",
  },
  warning: {
    bg: "bg-red-50",
    border: "border-l-[3px] border-cinnabar",
    icon: "⚠️",
    label: "Important",
    labelColor: "text-cinnabar",
  },
  info: {
    bg: "bg-sand-100",
    border: "border-l-[3px] border-sand-300",
    icon: "ℹ️",
    label: "Info",
    labelColor: "text-sand-500",
  },
  highlight: {
    bg: "bg-amber-50",
    border: "border-l-[3px] border-amber-400",
    icon: "✨",
    label: "Highlight",
    labelColor: "text-amber-600",
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
    <div className={`my-6 p-4 sm:p-5 rounded-r-lg ${style.bg} ${style.border}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0 mt-0.5">{style.icon}</span>
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${style.labelColor}`}>
            {title || style.label}
          </p>
          <div className="text-sm text-stone-700 leading-relaxed [&>p]:mb-0 [&>p]:text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
