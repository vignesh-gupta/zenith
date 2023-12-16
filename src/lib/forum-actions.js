"use server";

import prisma from "@/lib/prisma";

export async function createForum(forum) {
  try {
    let res = await prisma.forum.create({
      data: forum,
    });

    console.log("[FORUM_CREATION_SUCCESS]", res);
    return res;
  } catch (error) {
    console.log("[FORUM_CREATION_ERROR]", error);
    return false;
  }
}

export async function getForumById(id) {
  try {
    let res = await prisma.forum.findUnique({
      where: {
        id: id,
      },
    });

    console.log("[FORUM_GET_SUCCESS]", res);
    return res;
  } catch (error) {
    console.log("[FORUM_GET_ERROR]", error);
    return false;
  }
}

export async function getAllForums() {
  try {
    let res = await prisma.forum.findMany();

    console.log("[FORUM_GET_ALL_SUCCESS]", res);
    return res;
  } catch (error) {
    console.log("[FORUM_GET_ALL_ERROR]", error);
    return false;
  }
}
