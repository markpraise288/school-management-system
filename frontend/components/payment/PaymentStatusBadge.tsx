"use client";

import { Badge } from "@/components/ui/badge";

type PaymentStatus =
  | "Paid"
  | "Pending"
  | "Overdue";

type PaymentStatusBadgeProps = {
  status: PaymentStatus;
};

const statusStyles = {
  Paid:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

  Pending:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

  Overdue:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function PaymentStatusBadge({
  status,
}: PaymentStatusBadgeProps) {
  return (
    <Badge
      className={`rounded-full px-4 py-1 hover:bg-transparent ${statusStyles[status]}`}
    >
      {status}
    </Badge>
  );
}