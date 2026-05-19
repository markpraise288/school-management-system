"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import SettingsSection from "./SettingsSection";

export default function SchoolProfileForm() {
  return (
    <SettingsSection
      title="School Profile"
      description="Manage your institution information."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* School Name */}
        <div className="space-y-2">
          <Label>School Name</Label>

          <Input
            defaultValue="Bright Future Academy"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>Email Address</Label>

          <Input
            type="email"
            defaultValue="admin@brightfuture.edu"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label>Phone Number</Label>

          <Input
            defaultValue="+265 999 123 456"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Label>Website</Label>

          <Input
            defaultValue="www.brightfuture.edu"
            className="h-11 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <Label>Address</Label>

          <Textarea
            defaultValue="Blantyre, Malawi"
            className="min-h-[120px] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-end">
        <Button className="h-11 rounded-xl px-6">
          Save Changes
        </Button>
      </div>
    </SettingsSection>
  );
}