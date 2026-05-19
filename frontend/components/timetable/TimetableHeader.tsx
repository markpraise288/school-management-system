"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TimetableHeaderProps = {
  selectedClass: string;
};

export default function TimetableHeader({
  selectedClass,
}: TimetableHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Timetable
        </h1>

        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Weekly class schedule.
        </p>
      </div>

      <Select defaultValue={selectedClass}>
        <SelectTrigger className="h-12 w-55 rounded-xl border-gray-200 bg-white text-base dark:border-gray-700 dark:bg-gray-800 dark:text-white">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="11-A">
            Class 11-A
          </SelectItem>

          <SelectItem value="10-A">
            Class 10-A
          </SelectItem>

          <SelectItem value="9-B">
            Class 9-B
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}