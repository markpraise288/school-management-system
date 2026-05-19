export interface CustomTooltipType {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export interface WeeklyAttendanceChartType {
  day: string;
  present: number;
  absent: number;
}

export interface RevenueChartType {
    month: string;
    revenue: number;
}

export interface SubjectPerformanceType {
    subject: string;
    percentage: number;
}
