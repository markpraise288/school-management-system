import { Button } from "@/components/ui/button";
import { UserPlus, Search } from "lucide-react";
import TeacherCard from "@/components/teachers/TeacherCard";

type Teacher = {
  id: number;
  name: string;
  email: string;
  contact: string;
  experience: string;
  subjects: string[];
  classes: string[];
  status: "Active" | "Inactive";
};

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Mr. Phiri",
    email: "phiri@example.com",
    contact: "+265 999 111 222",
    experience: "8 Years",
    subjects: ["Mathematics", "Physics"],
    classes: ["Grade 10A", "Grade 11B"],
    status: "Active",
  },
  {
    id: 2,
    name: "Mrs. Banda",
    email: "banda@example.com",
    contact: "+265 888 222 333",
    experience: "5 Years",
    subjects: ["English"],
    classes: ["Grade 9A", "Grade 10B"],
    status: "Inactive",
  },
  {
    id: 3,
    name: "Mr. Mwale",
    email: "mwale@example.com",
    contact: "+265 777 333 444",
    experience: "12 Years",
    subjects: ["Chemistry", "Biology"],
    classes: ["Grade 12A"],
    status: "Active",
  },
];

export default function Teachers() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Teachers</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and organize your teacher records.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          <UserPlus size={18} className="mr-2" />
          Add Teacher
        </Button>
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:focus-within:border-blue-400">
        <button>
          <Search size={18} className="text-gray-500 dark:text-gray-400" />
        </button>
        <input
          type="text"
          placeholder="Search teachers..."
          className="flex-1 min-w-245 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:focus:border-blue-400"
        />
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
                <TeacherCard
                    key={teacher.id}
                    name={teacher.name}
                    email={teacher.email}
                    contact={teacher.contact}
                    experience={teacher.experience}
                    subjects={teacher.subjects}
                    classes={teacher.classes}
                    status={teacher.status}
                />
            ))}
        </div>
    </div>
  );
}
