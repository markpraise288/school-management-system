"use client";

import { Badge } from "@/components/ui/badge";

export type ExamStatus =
  | "completed"
  | "grading"
  | "upcoming";

type ExamCardProps = {
  title: string;
  date: string;
  classes: string;
  subjectsCount: number;
  status: ExamStatus;
};

const statusStyles = {
  completed:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

  grading:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",

  upcoming:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function ExamCard({
  title,
  date,
  classes,
  subjectsCount,
  status,
}: ExamCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        <Badge
          className={`rounded-full px-4 py-1 capitalize hover:bg-transparent ${statusStyles[status]}`}
        >
          {status}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Date: {date}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          Classes: {classes}
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          {subjectsCount} subjects
        </p>
      </div>
    </div>
  );
}