"use client";

import { Badge } from "@/components/ui/badge";

import {
  GraduationCap,
  Users,
  UserSquare2,
} from "lucide-react";

export type ClassCardProps = {
  grade: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
};

export default function ClassCard({
  grade,
  section,
  classTeacher,
  totalStudents,
}: ClassCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {grade}
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Academic Class
          </p>
        </div>

        <Badge className="rounded-full bg-blue-100 px-4 py-1 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">
          {section}
        </Badge>
      </div>

      {/* Content */}
      <div className="space-y-5">
        {/* Class Teacher */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
            <UserSquare2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Class Teacher
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              {classTeacher}
            </h3>
          </div>
        </div>

        {/* Students */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
            <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Students
            </p>

            <h3 className="font-semibold text-gray-900 dark:text-white">
              {totalStudents} Students
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-gray-400" />

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {section} • {grade}
          </p>
        </div>
      </div>
    </div>
  );
}