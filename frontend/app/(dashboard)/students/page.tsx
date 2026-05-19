import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";
import StudentsTable from "@/components/students/StudentsTable";

export default function Students() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and organize your student records here.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          <UserPlus size={18} className="mr-2" />
          Add Student
        </Button>
      </div>

      {/* Filter and Search */}
      <div>
        <div className="flex flex-wrap items-center gap-4 dark:border-gray-700 pb-4">
          <div className="flex items-center gap-2 w-full md:w-auto border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:focus-within:border-blue-400">
            <button>
              <Search size={18} className="text-gray-500 dark:text-gray-400" />
            </button>
            <input
              type="text"
              placeholder="Search students..."
              className="flex-1 min-w-245 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 outline-0"
            />
          </div>
          <select className="rounded-md border border-gray-300 bg-white px-3 py-4 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400">
            <option value="">All Grades</option>
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
          </select>
        </div>
      </div>

        <StudentsTable />
    </div>
  );
}
