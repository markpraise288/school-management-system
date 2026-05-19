"use client";

import { Badge } from "@/components/ui/badge";

type AttendanceStudentRowProps = {
  name: string;
  className: string;
  status: "Present" | "Absent";
};

export default function AttendanceStudentRow({
  name,
  className,
  status,
}: AttendanceStudentRowProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/40">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-blue-500 dark:bg-gray-700 dark:text-blue-400">
          {initials}
        </div>

        {/* Student Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {className}
          </p>
        </div>
      </div>

      {/* Status */}
      <Badge
        className={`rounded-full px-4 py-1 text-sm hover:bg-transparent ${
          status === "Present"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        }`}
      >
        {status}
      </Badge>
    </div>
  );
}