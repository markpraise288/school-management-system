"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import {
  Eye,
  Pencil,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

type TeacherActionsDropdownProps = {
  onViewProfile?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
};

export default function TeacherActionsDropdown({
  onViewProfile,
  onEdit,
  onRemove,
}: TeacherActionsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <MoreHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <DropdownMenuItem
          onClick={onViewProfile}
          className="cursor-pointer gap-3 rounded-xl py-3 focus:bg-gray-100 dark:focus:bg-gray-700"
        >
          <Eye className="h-4 w-4 text-blue-500" />
          View Profile
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onEdit}
          className="cursor-pointer gap-3 rounded-xl py-3 focus:bg-gray-100 dark:focus:bg-gray-700"
        >
          <Pencil className="h-4 w-4 text-yellow-500" />
          Edit Details
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onRemove}
          className="cursor-pointer gap-3 rounded-xl py-3 text-red-500 focus:bg-red-50 dark:focus:bg-red-900/20"
        >
          <Trash2 className="h-4 w-4" />
          Remove
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}