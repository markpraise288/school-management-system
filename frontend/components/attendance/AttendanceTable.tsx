"use client";

import AttendanceStudentRow from "./AttendanceStudentRow";

type AttendanceRecord = {
  id: number;
  name: string;
  className: string;
  status: "Present" | "Absent";
};

type AttendanceTableProps = {
  date: string;
  records: AttendanceRecord[];
};

export default function AttendanceTable({
  date,
  records,
}: AttendanceTableProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Today — {date}
        </h2>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {records.map((student) => (
          <AttendanceStudentRow
            key={student.id}
            name={student.name}
            className={student.className}
            status={student.status}
          />
        ))}
      </div>
    </div>
  );
}