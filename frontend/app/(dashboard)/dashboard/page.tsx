"use client";
import Card from "@/components/ui/Card";
import WeeklyAttendanceChart from "@/components/dashboard/AttendanceChart";
import RecentActivityCard from "@/components/dashboard/RecentActivity";
import RevenueOverviewChart from "@/components/dashboard/RevenueChart";
import SubjectPerformanceCard from "@/components/dashboard/SubjectPerformance";
import { WeeklyAttendanceChartType } from "@/types/dashboard";
import { RevenueChartType } from "@/types/dashboard";
import { SubjectPerformanceType } from "@/types/dashboard";

const weeklyAttendanceData: WeeklyAttendanceChartType[] = [
  {
    day: "Mon",
    present: 92,
    absent: 8,
  },
  {
    day: "Tue",
    present: 88,
    absent: 12,
  },
  {
    day: "Wed",
    present: 95,
    absent: 5,
  },
  {
    day: "Thu",
    present: 90,
    absent: 10,
  },
  {
    day: "Fri",
    present: 85,
    absent: 15,
  },
];

const revenueData: RevenueChartType[] = [
  {
    month: "Sep",
    revenue: 45000,
  },
  {
    month: "Oct",
    revenue: 52000,
  },
  {
    month: "Nov",
    revenue: 47000,
  },
  {
    month: "Dec",
    revenue: 38000,
  },
  {
    month: "Jan",
    revenue: 56000,
  },
  {
    month: "Feb",
    revenue: 60000,
  },
];

const subjectPerformanceData: SubjectPerformanceType[] = [
  {
    subject: "Math",
    percentage: 78,
  },
  {
    subject: "Physics",
    percentage: 72,
  },
  {
    subject: "English",
    percentage: 85,
  },
  {
    subject: "Chemistry",
    percentage: 68,
  },
  {
    subject: "Biology",
    percentage: 82,
  },
  {
    subject: "History",
    percentage: 76,
  },
];



export default function Dashboard() {
  return (
    <div className="p-2 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl">Dashboard</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Welcome back! Here’s an overview of your school’s performance and activities.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <Card
          title="Total Students"
          value="1,200"
          icon={"user"}
          time="+12% from last month"
          variant="rising"
          iconColor="bg-blue-200 rounded text-blue-600 p-1 text-2xl dark:bg-blue-700 dark:text-blue-300"
        />
        <Card
          title="Total Teachers"
          value="30"
          icon={"teacher"}
          time="+3 new this month"
          variant="rising"
          iconColor="bg-red-200 rounded text-red-600 p-1 text-2xl dark:bg-red-700 dark:text-red-300"
        />
        <Card
          title="Revenue"
          value="$12,000"
          icon={"dollar"}
          time="+12% from last month"
          variant="rising"
          iconColor="bg-yellow-200 rounded text-yellow-600 p-1 text-2xl dark:bg-yellow-700 dark:text-yellow-300"
        />
        <Card
          title="Attendance Rate"
          value="85%"
          icon={"attendance"}
          time="+12% from last month"
          variant="rising"
          iconColor="bg-green-200 rounded text-green-600 p-1 text-2xl dark:bg-green-700 dark:text-green-300"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <WeeklyAttendanceChart data={weeklyAttendanceData} />
        <RevenueOverviewChart data={revenueData}/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivityCard />
        <SubjectPerformanceCard data={subjectPerformanceData}/>
      </div>
    </div>
  );
}
