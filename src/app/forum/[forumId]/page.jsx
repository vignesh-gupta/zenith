import { Badge } from "@/components/ui/badge";
import { getForumById } from "@/lib/forum-actions";
import React from "react";

export default async function ForumDetailPage({ params: { forumId } }) {
  const forum = await getForumById(forumId);

  console.log(forum);

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
        {forum.title}
      </h2>
      <div className="w-full my-3 border-t border-muted-foreground" />

      <p>{forum.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {forum.keywords?.map((keyword) => (
          <Badge className="bg-blue-300" key={keyword}>
            {keyword}
          </Badge>
        ))}
      </div>
      <p className="w-full my-4 text-muted-foreground text-end">
        -{forum.userName}
      </p>
    </div>
  );
}
