import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ExamResultsTable from "@/components/exams/ExamResultsTable";
import ExamCard from "@/components/exams/ExamCard";

const exams = [
  {
    id: 1,
    title: "Midterm Examination",
    date: "Jan 15, 2026",
    classes: "All",
    subjectsCount: 6,
    status: "completed",
  },
  {
    id: 2,
    title: "Unit Test 3",
    date: "Feb 10, 2026",
    classes: "9-A, 10-A",
    subjectsCount: 4,
    status: "grading",
  },
  {
    id: 3,
    title: "Final Examination",
    date: "Mar 20, 2026",
    classes: "All",
    subjectsCount: 6,
    status: "upcoming",
  },
];

export const examResults = [
  {
    id: 1,
    student: "Emma Johnson",
    math: 92,
    physics: 88,
    english: 95,
    chemistry: 78,
    biology: 85,
    average: 87.6,
  },
  {
    id: 2,
    student: "Liam Smith",
    math: 78,
    physics: 82,
    english: 70,
    chemistry: 75,
    biology: 80,
    average: 77,
  },
  {
    id: 3,
    student: "Sophia Williams",
    math: 95,
    physics: 90,
    english: 98,
    chemistry: 92,
    biology: 94,
    average: 93.8,
  },
  {
    id: 4,
    student: "Noah Brown",
    math: 65,
    physics: 70,
    english: 72,
    chemistry: 60,
    biology: 68,
    average: 67,
  },
];

export default function Exams() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Exams $ Grades</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage exams and view student grades.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          <Plus size={18} className="mr-2" />
          Create Exam
        </Button>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExamCard
                title="Midterm Examination"
                date="2024-10-15"
                classes="9-A, 9-B, 10-A"
                subjectsCount={5}
                status="grading"
            />
            <ExamCard
                title="Unit Test 3"
                date="2024-11-10"
                classes="9-A, 10-A"
                subjectsCount={4}
                status="grading"
            />
            <ExamCard
                title="Final Examination"
                date="2024-12-20"
                classes="9-A, 9-B, 10-A"
                subjectsCount={5}
                status="upcoming"
            />
        </div>
        <div>
            <ExamResultsTable title="Recent Exam Results" results={examResults} />
        </div>
    </div>
  );
}
