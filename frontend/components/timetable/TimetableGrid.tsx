"use client";

import TimetableCell from "./TimetableCell";

import { TimetableEntry } from "@/types/timetable";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const timeSlots = [
  "8:00 - 8:45",
  "8:50 - 9:35",
  "9:40 - 10:25",
  "10:40 - 11:25",
  "11:30 - 12:15",
  "1:00 - 1:45",
  "1:50 - 2:35",
];

type TimetableGridProps = {
  entries: TimetableEntry[];
};

export default function TimetableGrid({
  entries,
}: TimetableGridProps) {
  const getEntry = (
    day: string,
    time: string
  ) => {
    return entries.find(
      (entry) =>
        entry.day === day && entry.time === time
    );
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-300 rounded-2xl border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 dark:shadow-none">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700 rounded-t-2xl">
              <th className="sticky left-0 z-10 bg-white p-6 text-left text-lg font-semibold text-gray-600 dark:bg-gray-900 dark:text-gray-300 rounded-t-2xl">
                Time
              </th>

              {days.map((day) => (
                <th
                  key={day}
                  className="bg-white p-6 text-center text-xl font-bold text-gray-900 dark:bg-gray-900 dark:text-white rounded-t-2xl"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {timeSlots.map((time) => (
              <tr
                key={time}
                className="border-b border-gray-100 dark:border-gray-700 rounded-b-2xl"
              >
                {/* Time */}
                <td className="sticky left-0 bg-white p-5 text-base font-medium text-gray-500 dark:bg-gray-900 dark:text-gray-400 rounded-b-2xl">
                  {time}
                </td>

                {/* Cells */}
                {days.map((day) => {
                  const entry = getEntry(day, time);

                  return (
                    <td
                      key={`${day}-${time}`}
                      className="p-3 rounded-b-2xl"
                    >
                      <TimetableCell
                        subject={entry?.subject}
                        teacher={entry?.teacher}
                        room={entry?.room}
                        onClick={() =>
                          console.log(
                            "Open timetable modal"
                          )
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}