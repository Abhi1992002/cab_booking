"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getHistory = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return { error: "UnAuthorised" };
    }

    const data = await db.history.findMany({
      where: {
        userId: user.id,
      },
    });

    return { success: data };
  } catch (error) {
    return { error: "getting error " };
  }
};
