"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RevenueChartType } from "@/types/dashboard";

type RevenueOverviewChartProps = {
  data?: RevenueChartType[];
};

function RevenueTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          {label}
        </p>

        <p className="text-base font-semibold text-green-600 dark:text-green-400">
          Revenue: $
          {payload[0]?.value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
}

export default function RevenueOverviewChart({ data }: RevenueOverviewChartProps) {
  return (
    <div className="h-full w-full rounded-2xl border border-gray-100 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Revenue Overview
        </h2>
      </div>

      <div className="h-87.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#16A34A"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#16A34A"
                  stopOpacity={0.03}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94A3B8", fontSize: 14 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94A3B8", fontSize: 14 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip
              cursor={{ stroke: "#475569", strokeWidth: 1 }}
              content={<RevenueTooltip />}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#16A34A"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}