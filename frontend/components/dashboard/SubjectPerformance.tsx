"use client";

import { SubjectPerformanceType } from "@/types/dashboard";


function SubjectPerformanceItem({
  subject,
  percentage,
}: SubjectPerformanceType) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {subject}
        </h3>

        <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
          {percentage}%
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SubjectPerformanceCard({ data }: { data?: SubjectPerformanceType[] }) {
  return (
    <div className="h-full w-full rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Subject Performance
        </h2>
      </div>

      <div className="space-y-6">
        {data?.map((item) => (
          <SubjectPerformanceItem
            key={item.subject}
            subject={item.subject}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
}