"use client";

import { ReactNode } from "react";

type AttendanceSummaryCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
};

export default function AttendanceSummaryCard({
  title,
  value,
  icon,
  iconBgColor,
}: AttendanceSummaryCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBgColor}`}
        >
          {icon}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {value}
          </h2>

          <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}