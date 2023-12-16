'use server'

import prisma from "@/lib/prisma";

export async function createComment(comment) {
  try {
    let res = await prisma.answer.create({
      data: comment,
    });

    console.log("[COMMENT_CREATION_SUCCESS]", res);
    return res;
  } catch (error) {
    console.log("[COMMENT_CREATION_ERROR]", error);
    return false;
  }
}

export async function getCommentByForumId(id) {
  try {
    let res = await prisma.answer.findMany({
      where: {
        forumId: id,
      },
    });

    console.log("[COMMENT_GET_SUCCESS]", res);
    return res;
  } catch (error) {
    console.log("[COMMENT_GET_ERROR]", error);
    return false;
  }
}