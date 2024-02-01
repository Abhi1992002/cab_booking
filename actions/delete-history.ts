"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteHistory = async (id: string) => {
  try {
    const user = await currentUser();

    if (!user) {
      return { error: "UnAuthorised" };
    }

    await db.history.delete({
      where: {
        userId: user.id,
        id: id,
      },
    });

    return { success: "History deleted successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
