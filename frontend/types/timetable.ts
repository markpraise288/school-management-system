export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

export type TimetableEntry = {
  id: number;
  day: Day;
  time: string;
  subject: string;
  teacher: string;
  room: string;
};

export type SubjectColorMap = {
  bg: string;
  text: string;
  border: string;
};