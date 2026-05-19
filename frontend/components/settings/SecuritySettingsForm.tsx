"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import SettingsSection from "./SettingsSection";

export default function SecuritySettingsForm() {
  return (
    <SettingsSection
      title="Security"
      description="Manage password and account security."
    >
      <div className="space-y-6">
        {/* Current Password */}
        <div className="space-y-2">
          <Label>Current Password</Label>

          <Input
            type="password"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <Label>New Password</Label>

          <Input
            type="password"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label>Confirm Password</Label>

          <Input
            type="password"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="h-11 rounded-xl px-6">
          Update Password
        </Button>
      </div>
    </SettingsSection>
  );
}