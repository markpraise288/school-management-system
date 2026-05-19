"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SettingsSection from "./SettingsSection";

export default function AcademicSettingsForm() {
  return (
    <SettingsSection
      title="Academic Settings"
      description="Configure academic year and grading preferences."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Academic Year */}
        <div className="space-y-2">
          <Label>Academic Year</Label>

          <Input
            defaultValue="2026"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Current Term */}
        <div className="space-y-2">
          <Label>Current Term</Label>

          <Select defaultValue="Term 1">
            <SelectTrigger className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Term 1">
                Term 1
              </SelectItem>

              <SelectItem value="Term 2">
                Term 2
              </SelectItem>

              <SelectItem value="Term 3">
                Term 3
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Passing Grade */}
        <div className="space-y-2">
          <Label>Passing Grade (%)</Label>

          <Input
            type="number"
            defaultValue="50"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Attendance Threshold */}
        <div className="space-y-2">
          <Label>Attendance Threshold (%)</Label>

          <Input
            type="number"
            defaultValue="75"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button className="h-11 rounded-xl px-6">
          Save Changes
        </Button>
      </div>
    </SettingsSection>
  );
}