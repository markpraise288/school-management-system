import { Button } from "@/components/ui/button";
import AttendanceStudentRow from "@/components/attendance/AttendanceStudentRow";
import AttendanceTable from "@/components/attendance/AttendanceTable";
import AttendanceSummaryCard from "@/components/attendance/AttendanceSummaryCard";
import { CheckCircle, Clock, XCircle } from "lucide-react";

export const attendanceRecords = [
  {
    id: 1,
    name: "Emma Johnson",
    className: "10-A",
    status: "Present" as const,
  },
  {
    id: 2,
    name: "Liam Smith",
    className: "10-A",
    status: "Present" as const,
  },
  {
    id: 3,
    name: "Sophia Williams",
    className: "10-B",
    status: "Present" as const,
  },
  {
    id: 4,
    name: "Noah Brown",
    className: "11-A",
    status: "Present" as const,
  },
  {
    id: 5,
    name: "Olivia Davis",
    className: "11-B",
    status: "Absent" as const,
  },
  {
    id: 6,
    name: "James Wilson",
    className: "9-A",
    status: "Present" as const,
  },
  {
    id: 7,
    name: "Ava Martinez",
    className: "9-B",
    status: "Present" as const,
  },
];

export default function Attendance() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Attendance</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Mark student attendance for the current date.
          </p>
        </div>

        <select name="class" id="class" className="ml-auto rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
          <option value="">Select a class</option>
          <option value="1">9-A</option>
          <option value="2">9-B</option>
          <option value="3">10-A</option>
          <option value="4">10-B</option>
          <option value="5">11-A</option>
          <option value="6">11-B</option>
        </select>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          Save Attendance
        </Button>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttendanceSummaryCard
              title="Present"
              value="6"
              icon={<CheckCircle className="w-5 h-5" />}
              iconBgColor="bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            />
            <AttendanceSummaryCard
              title="Absent"
              value="1"
              icon={<XCircle className="w-5 h-5" />}
              iconBgColor="bg-red-200 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            />
            <AttendanceSummaryCard
              title="Attendance Rate"
              value="85.7%"
              icon={<Clock className="w-5 h-5" />}
              iconBgColor="bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            />
        </div>
        <AttendanceTable date={new Date().toLocaleDateString()} records={attendanceRecords} />
    </div>
  );
}
