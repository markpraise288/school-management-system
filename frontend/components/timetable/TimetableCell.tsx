"use client";

import { subjectColors } from "@/lib/subject-colors";

type TimetableCellProps = {
  subject?: string;
  teacher?: string;
  room?: string;
  onClick?: () => void;
};

export default function TimetableCell({
  subject,
  teacher,
  room,
  onClick,
}: TimetableCellProps) {
  if (!subject) {
    return (
      <button
        onClick={onClick}
        className="flex h-28 w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-sm font-medium text-gray-400 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500 dark:border-gray-600 dark:bg-gray-800/40 dark:text-gray-500 dark:hover:border-blue-500 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
      >
        + Add Subject
      </button>
    );
  }

  const colors =
    subjectColors[subject] ||
    subjectColors["Mathematics"];

  return (
    <button
      onClick={onClick}
      className={`group h-28 w-full rounded-2xl border p-4 text-left transition hover:scale-[1.02] hover:shadow-md ${colors.bg} ${colors.border}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3
            className={`text-base font-bold ${colors.text}`}
          >
            {subject}
          </h3>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {teacher}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {room}
          </p>

          <span className="text-xs text-gray-400 opacity-0 transition group-hover:opacity-100 dark:text-gray-500">
            Edit
          </span>
        </div>
      </div>
    </button>
  );
}