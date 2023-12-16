"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createComment } from "@/lib/comment-actions";
import { getForumById } from "@/lib/forum-actions";
import { getCommentByForumId } from "@/lib/comment-actions";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import AnswerCard from "@/components/forum/AnswerCard";

export default function ForumDetailPage({ params: { forumId } }) {
  const [forum, setForum] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    (async () => {
      const forum = await getForumById(forumId);
      setForum(forum);
      const comments = await getCommentByForumId(forumId);
      setComments(comments);
    })();
  }, [forumId]);

  const submitComment = async () => {
    const commentModel = { text: comment, forumId, userName: user.fullName };
    console.log(commentModel);
    const res = await createComment(commentModel);

    if(res) {
      setComments([...comments, commentModel]);
      setComment("");
    }
  };

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

      <div className="w-full my-3 border-t border-muted-foreground" />

      <div className="mt-5">
        <h3 className="my-3 text-lg font-semibold">
          You have some suggestions ?
        </h3>
        <Textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></Textarea>
        <Button onClick={submitComment} className="mt-2">
          Submit Comment
        </Button>
      </div>

      <div className="mt-4">
        <h3 className="my-3 text-lg font-semibold">Some other suggestions</h3>
        {comments?.map((comment) => (
          <AnswerCard answer={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
}
