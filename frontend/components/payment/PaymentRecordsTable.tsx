"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PaymentStatusBadge from "./PaymentStatusBadge";

export type PaymentRecord = {
  id: number;
  student: string;
  className: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

type PaymentRecordsTableProps = {
  title?: string;
  records: PaymentRecord[];
};

export default function PaymentRecordsTable({
  title = "Payment Records",
  records,
}: PaymentRecordsTableProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-100 dark:border-gray-700">
              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Student
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Class
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Amount
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Status
              </TableHead>

              <TableHead className="text-base text-gray-600 dark:text-gray-300">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {records.map((record) => (
              <TableRow
                key={record.id}
                className="border-gray-100 dark:border-gray-700"
              >
                {/* Student */}
                <TableCell className="font-semibold text-gray-900 dark:text-white">
                  {record.student}
                </TableCell>

                {/* Class */}
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {record.className}
                </TableCell>

                {/* Amount */}
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  $
                  {record.amount.toLocaleString()}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <PaymentStatusBadge
                    status={record.status}
                  />
                </TableCell>

                {/* Date */}
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {record.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}