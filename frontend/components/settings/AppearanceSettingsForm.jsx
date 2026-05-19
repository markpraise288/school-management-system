"use client";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import SettingsSection from "./SettingsSection";

export default function AppearanceSettingsForm() {
  return (
    <SettingsSection
      title="Appearance"
      description="Customize the dashboard appearance."
    >
      <div className="space-y-6">
        {/* Dark Mode */}
        <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 dark:border-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Dark Mode
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enable dark theme for the dashboard.
            </p>
          </div>

          <Switch />
        </div>

        {/* Compact Sidebar */}
        <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 dark:border-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Compact Sidebar
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Reduce sidebar width for more workspace.
            </p>
          </div>

          <Switch />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="h-11 rounded-xl px-6">
          Save Preferences
        </Button>
      </div>
    </SettingsSection>
  );
}