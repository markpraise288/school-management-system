"use client";

import TimetableGrid from "@/components/timetable/TimetableGrid";

import TimetableHeader from "@/components/timetable/TimetableHeader";

import { TimetableEntry } from "@/types/timetable";

const timetableEntries: TimetableEntry[] =
  [
    {
      id: 1,
      day: "Monday",
      time: "8:00 - 8:45",
      subject: "Mathematics",
      teacher: "Mr. Banda",
      room: "Room A1",
    },

    {
      id: 2,
      day: "Tuesday",
      time: "8:00 - 8:45",
      subject: "English",
      teacher: "Mrs. Phiri",
      room: "Room B2",
    },

    {
      id: 3,
      day: "Wednesday",
      time: "8:00 - 8:45",
      subject: "Physics",
      teacher: "Mr. Mwale",
      room: "Science Lab",
    },

    {
      id: 4,
      day: "Thursday",
      time: "8:00 - 8:45",
      subject: "Chemistry",
      teacher: "Mrs. Zulu",
      room: "Chem Lab",
    },

    {
      id: 5,
      day: "Friday",
      time: "8:00 - 8:45",
      subject: "Mathematics",
      teacher: "Mr. Banda",
      room: "Room A1",
    },
  ];

export default function TimetablePage() {
  return (
    <div className="space-y-8">
      <TimetableHeader selectedClass="11-A" />

      <TimetableGrid entries={timetableEntries} />
    </div>
  );
}