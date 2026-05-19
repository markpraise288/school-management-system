"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
  Phone,
  Briefcase,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import TeacherActionsDropdown from "./TeacherActionsDropdown";

export type TeacherCardProps = {
  name: string;
  email: string;
  contact: string;
  experience: string;
  subjects: string[];
  classes: string[];
  status: "Active" | "Inactive";
  onViewProfile?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
};

export default function TeacherCard({
  name,
  email,
  contact,
  experience,
  subjects,
  classes,
  status,
  onViewProfile,
  onEdit,
  onRemove,
}: TeacherCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-purple-100 text-lg font-semibold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {email}
            </p>
          </div>
        </div>

        <TeacherActionsDropdown
          onViewProfile={onViewProfile}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </div>

      {/* Content */}
      <div className="space-y-5">
        {/* Contact */}
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-gray-400" />

          <span className="text-sm text-gray-700 dark:text-gray-300">
            {contact}
          </span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-3">
          <Briefcase className="h-4 w-4 text-gray-400" />

          <span className="text-sm text-gray-700 dark:text-gray-300">
            {experience} Experience
          </span>
        </div>

        {/* Subjects */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-gray-400" />

            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Subjects
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Badge
                key={subject}
                className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        {/* Classes */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-gray-400" />

            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Classes
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {classes.map((className) => (
              <Badge
                key={className}
                className="rounded-full bg-purple-100 px-3 py-1 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400"
              >
                {className}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
        <Badge
          className={`rounded-full px-3 py-1 hover:bg-transparent ${
            status === "Active"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {status}
        </Badge>
      </div>
    </div>
  );
}