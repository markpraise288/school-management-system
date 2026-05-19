"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WeeklyAttendanceChartType } from "@/types/dashboard";
import { CustomTooltipType } from "@/types/dashboard";

type WeeklyAttendanceChartProps = {
  data: WeeklyAttendanceChartType[];
};

function CustomTooltip({ active, payload, label }: CustomTooltipType) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </p>

        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            present : {payload[0]?.value}
          </p>

          <p className="text-sm font-medium text-red-400 dark:text-red-300">
            absent : {payload[1]?.value}
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default function WeeklyAttendanceChart({ data }: WeeklyAttendanceChartProps) {
  return (
    <div className="h-full w-full rounded-2xl border border-gray-100 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Weekly Attendance
        </h2>
      </div>

      <div className="h-87.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={6}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94A3B8", fontSize: 14 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94A3B8", fontSize: 14 }}
            />

            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.1)" }}
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="present"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="absent"
              fill="#F87171"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}