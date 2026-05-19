"use client";

import {
  BookOpen,
  CreditCard,
  GraduationCap,
  UserPlus,
} from "lucide-react";

const recentActivities = [
  {
    id: 1,
    title: "New student registered",
    description: "John Banda joined Grade 10A",
    time: "5 mins ago",
    icon: UserPlus,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    title: "School fees payment received",
    description: "MWK 250,000 payment completed",
    time: "20 mins ago",
    icon: CreditCard,
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: 3,
    title: "Exam results published",
    description: "Midterm results are now available",
    time: "1 hour ago",
    icon: GraduationCap,
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 4,
    title: "New subject assigned",
    description: "Physics assigned to Mr. Phiri",
    time: "2 hours ago",
    icon: BookOpen,
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

type ActivityItemProps = {
  title: string;
  description: string;
  time: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  isLast?: boolean;
};

function ActivityItem({
  title,
  description,
  time,
  icon: Icon,
  iconBg,
  iconColor,
  isLast,
}: ActivityItemProps) {
  return (
    <div className="relative flex gap-4">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-14 h-full w-0.5 bg-gray-100 dark:bg-gray-700" />
      )}

      {/* Icon */}
      <div
        className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          <span className="whitespace-nowrap text-sm text-gray-400 dark:text-gray-500">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RecentActivityCard() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Latest actions and updates in the system
          </p>
        </div>

        <button className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
          View All
        </button>
      </div>

      {/* Activities */}
      <div>
        {recentActivities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            title={activity.title}
            description={activity.description}
            time={activity.time}
            icon={activity.icon}
            iconBg={activity.iconBg}
            iconColor={activity.iconColor}
            isLast={index === recentActivities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}