"use client";

import AcademicSettingsForm from "@/components/settings/AcademicSettingsForm";

import AppearanceSettingsForm from "@/components/settings/AppearanceSettingsForm";

import SchoolProfileForm from "@/components/settings/SchoolProfileForm";

import SecuritySettingsForm from "@/components/settings/SecuritySettingsForm";

import SettingsSidebar from "@/components/settings/SettingsSidebar";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Manage your school system preferences.
        </p>
      </div>

      {/* Layout */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div className="h-fit">
          <SettingsSidebar />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <SchoolProfileForm />

          <AcademicSettingsForm />

          <AppearanceSettingsForm />

          <SecuritySettingsForm />
        </div>
      </div>
    </div>
  );
}