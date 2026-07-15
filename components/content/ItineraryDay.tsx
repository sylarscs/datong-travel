import { ReactNode } from "react";

export function ItineraryDay({
  day,
  title,
  children,
}: {
  day: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 p-5 sm:p-6 rounded-xl border border-stone-200 bg-white">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-display font-bold text-lg">
          {day}
        </span>
        <h3 className="text-lg font-display font-bold text-stone-900 m-0 p-0 border-0">
          Day {day}: {title}
        </h3>
      </div>
      <div className="text-sm text-stone-700 leading-relaxed ml-[52px]">
        {children}
      </div>
    </div>
  );
}
