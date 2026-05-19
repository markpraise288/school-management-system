"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import StudentActionsDropdown from "./StudentActionsDropdown";

const students = [
  {
    id: 1,
    name: "John Banda",
    email: "john@example.com",
    class: "Grade 10A",
    parent: "Mr Banda",
    contact: "+265 999 123 456",
    grade: "A",
    status: "Active",
  },
  {
    id: 2,
    name: "Mary Phiri",
    email: "mary@example.com",
    class: "Grade 11B",
    parent: "Mrs Phiri",
    contact: "+265 888 456 123",
    grade: "B+",
    status: "Inactive",
  },
  {
    id: 3,
    name: "James Mwale",
    email: "james@example.com",
    class: "Grade 9C",
    parent: "Mr Mwale",
    contact: "+265 777 987 654",
    grade: "A-",
    status: "Active",
  },
];

export default function StudentsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="border-b border-gray-100 p-6 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Students
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage student records and academic information
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100 hover:bg-transparent dark:border-gray-700">
              <TableHead className="text-gray-600 dark:text-gray-300">
                Student
              </TableHead>

              <TableHead className="text-gray-600 dark:text-gray-300">
                Class
              </TableHead>

              <TableHead className="text-gray-600 dark:text-gray-300">
                Parent
              </TableHead>

              <TableHead className="text-gray-600 dark:text-gray-300">
                Contact
              </TableHead>

              <TableHead className="text-gray-600 dark:text-gray-300">
                Grade
              </TableHead>

              <TableHead className="text-gray-600 dark:text-gray-300">
                Status
              </TableHead>

              <TableHead className="text-right text-gray-600 dark:text-gray-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="border-gray-100 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/40"
              >
                {/* Student */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11">
                      <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {student.name}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {student.email}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Class */}
                <TableCell className="text-gray-700 dark:text-gray-300">
                  {student.class}
                </TableCell>

                {/* Parent */}
                <TableCell className="text-gray-700 dark:text-gray-300">
                  {student.parent}
                </TableCell>

                {/* Contact */}
                <TableCell className="text-gray-700 dark:text-gray-300">
                  {student.contact}
                </TableCell>

                {/* Grade */}
                <TableCell>
                  <Badge className="rounded-full bg-blue-100 px-3 py-1 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">
                    {student.grade}
                  </Badge>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge
                    className={`rounded-full px-3 py-1 hover:bg-transparent ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {student.status}
                  </Badge>
                </TableCell>

                {/* Actions */}
                <TableCell className="text-right">
                  <StudentActionsDropdown
                    onViewProfile={() =>
                      console.log("View Profile")
                    }
                    onEdit={() =>
                      console.log("Edit Student")
                    }
                    onViewGrades={() =>
                      console.log("View Grades")
                    }
                    onRemove={() =>
                      console.log("Remove Student")
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}