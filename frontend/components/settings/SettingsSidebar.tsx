"use client";

import {
  Building2,
  GraduationCap,
  Palette,
  Shield,
} from "lucide-react";

const settingsItems = [
  {
    label: "School Profile",
    icon: Building2,
  },

  {
    label: "Academic Settings",
    icon: GraduationCap,
  },

  {
    label: "Appearance",
    icon: Palette,
  },

  {
    label: "Security",
    icon: Shield,
  },
];

export default function SettingsSidebar() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="space-y-2">
        {settingsItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                index === 0
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}