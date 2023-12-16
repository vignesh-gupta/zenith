import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ForumCard({ title, id, description, user, isCompact=false }) {
  return (
    <Link
      href={`/forum/${id}`}
      className="flex flex-col justify-between w-full p-3 border border-gray-300 rounded-lg"
    >
      <h4 className="text-lg font-semibold text-black">{title}</h4>
      <p className={cn("overflow-hidden text-sm text-gray-500 line-clamp-3", {
        "py-3": !isCompact,
      })}>{description}</p>
      <p className="text-sm text-gray-500 border-t border-muted-foreground">
        {user}
      </p>
    </Link>
  );
}
