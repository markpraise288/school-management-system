import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ClassCard from "@/components/classes/ClassCard";

export const classes = [
  {
    id: 1,
    grade: "Grade 9",
    section: "9-A",
    classTeacher: "Mr. Phiri",
    totalStudents: 42,
  },
  {
    id: 2,
    grade: "Grade 9",
    section: "9-C",
    classTeacher: "Mrs. Banda",
    totalStudents: 38,
  },
  {
    id: 3,
    grade: "Grade 10",
    section: "10-B",
    classTeacher: "Mr. Mwale",
    totalStudents: 45,
  },
];

export default function Classes() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Classes</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage classes and schedules.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          <Plus size={18} className="mr-2" />
          Add Class
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            grade={cls.grade}
            section={cls.section}
            classTeacher={cls.classTeacher}
            totalStudents={cls.totalStudents}
          />
        ))}
      </div>
    </div>
  );
}
