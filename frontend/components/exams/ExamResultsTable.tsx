"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type StudentResult = {
  id: number;
  student: string;
  math: number;
  physics: number;
  english: number;
  chemistry: number;
  biology: number;
  average: number;
};

type ExamResultsTableProps = {
  title: string;
  results: StudentResult[];
};

function getScoreColor(score: number) {
  if (score >= 85) {
    return "text-green-600 dark:text-green-400";
  }

  if (score < 75) {
    return "text-red-500 dark:text-red-400";
  }

  return "text-gray-900 dark:text-white";
}

export default function ExamResultsTable({
  title,
  results,
}: ExamResultsTableProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100 dark:border-gray-700">
              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Student
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Math
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Physics
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                English
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Chemistry
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Biology
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Average
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {results.map((student) => (
              <TableRow
                key={student.id}
                className="border-gray-100 dark:border-gray-700"
              >
                <TableCell className="text-lg font-semibold text-gray-900 dark:text-white">
                  {student.student}
                </TableCell>

                <TableCell
                  className={`text-lg font-semibold ${getScoreColor(
                    student.math
                  )}`}
                >
                  {student.math}
                </TableCell>

                <TableCell
                  className={`text-lg font-semibold ${getScoreColor(
                    student.physics
                  )}`}
                >
                  {student.physics}
                </TableCell>

                <TableCell
                  className={`text-lg font-semibold ${getScoreColor(
                    student.english
                  )}`}
                >
                  {student.english}
                </TableCell>

                <TableCell
                  className={`text-lg font-semibold ${getScoreColor(
                    student.chemistry
                  )}`}
                >
                  {student.chemistry}
                </TableCell>

                <TableCell
                  className={`text-lg font-semibold ${getScoreColor(
                    student.biology
                  )}`}
                >
                  {student.biology}
                </TableCell>

                <TableCell
                  className={`text-lg font-bold ${getScoreColor(
                    student.average
                  )}`}
                >
                  {student.average}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}