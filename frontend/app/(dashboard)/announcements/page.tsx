import AnnouncementCard from "@/components/announcements/AnnouncementCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Announcements</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Broadcast messages to students, teachers and parents.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-blue-500 hover:bg-blue-600 hover:text-gray-100 text-white dark:bg-blue-950 dark:text-gray-50 dark:hover:bg-blue-800"
        >
          <Plus size={18} className="mr-2" />
          New Announcement
        </Button>
      </div>
      <AnnouncementCard
      title="Parent-Teacher Meeting"
      description="Scheduled for Friday, Feb 21 at 3:00 PM in the main hall. All parents and teachers are requested to attend."
      audience="All"
      date="Feb 14, 2026"
      priority="high"
    />
    </div>
  );
}
