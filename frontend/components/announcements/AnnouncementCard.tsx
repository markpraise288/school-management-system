"use client";

import { Megaphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Priority = "high" | "medium" | "low";

type AnnouncementCardProps = {
  title: string;
  description: string;
  audience: string;
  date: string;
  priority?: Priority;
};

const priorityStyles = {
  high: {
    badge:
      "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },

  medium: {
    badge:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
  },

  low: {
    badge:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
};

export default function AnnouncementCard({
  title,
  description,
  audience,
  date,
  priority = "medium",
}: AnnouncementCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        {/* Left Content */}
        <div className="flex gap-4">
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/20">
            <Megaphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Text */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                className={`rounded-full px-4 py-1 capitalize hover:bg-transparent ${priorityStyles[priority].badge}`}
              >
                {priority}
              </Badge>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Audience: {audience}
              </p>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="shrink-0">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}