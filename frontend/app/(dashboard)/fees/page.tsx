import { Button } from "@/components/ui/button";
import { PaymentRecord } from "@/components/payment/PaymentRecordsTable";
import PaymentRecordsTable from "@/components/payment/PaymentRecordsTable";
import AttendanceSummaryCard from "@/components/attendance/AttendanceSummaryCard";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const paymentRecords: PaymentRecord[] =
  [
    {
      id: 1,
      student: "Emma Johnson",
      className: "10-A",
      amount: 450,
      status: "Paid",
      date: "Feb 12, 2026",
    },

    {
      id: 2,
      student: "Liam Smith",
      className: "10-B",
      amount: 450,
      status: "Pending",
      date: "Feb 10, 2026",
    },

    {
      id: 3,
      student: "Sophia Williams",
      className: "11-A",
      amount: 600,
      status: "Paid",
      date: "Feb 09, 2026",
    },

    {
      id: 4,
      student: "Noah Brown",
      className: "9-C",
      amount: 400,
      status: "Overdue",
      date: "Feb 05, 2026",
    },

    {
      id: 5,
      student: "Olivia Davis",
      className: "12-A",
      amount: 700,
      status: "Paid",
      date: "Feb 01, 2026",
    },
  ];

export default function Fees() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Fees & Payments</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Track fee payments and outstanding balances.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          Record Payment
        </Button>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AttendanceSummaryCard
                title="Total Fees Collected"
                value="$3,500"
                icon={<CheckCircle size={24} className="text-green-500" />}
                iconBgColor="bg-green-100"
            />
            <AttendanceSummaryCard
                title="Pending Payments"
                value="$1,200"
                icon={<Clock size={24} className="text-yellow-500" />}
                iconBgColor="bg-yellow-100"
            />
            <AttendanceSummaryCard
                title="Overdue Payments"
                value="$400"
                icon={<AlertTriangle size={24} className="text-red-500" />}
                iconBgColor="bg-red-100"
            />
        </div>
        <div>
            <PaymentRecordsTable records={paymentRecords} />
        </div>
    </div>
  );
}