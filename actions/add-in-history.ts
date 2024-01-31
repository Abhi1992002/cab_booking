"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { bookingSchema } from "@/schemas";
import { z } from "zod";

type historyType = {
  values: z.infer<typeof bookingSchema>;
  distance: number;
  time: number;
  amount: number;
};

export const addInHistory = async ({
  values,
  distance,
  time,
  amount,
}: historyType) => {
  try {
    if (!values) return null;
    const user = await currentUser();

    if (!user) {
      return { error: "unAuthorised" };
    }

    if (!user.id) {
      return { error: "id not present" };
    }

    if (!distance || !time || !amount) {
      return { error: "amount not collected" };
    }

    const res = await db.history.create({
      data: {
        userId: user.id,
        from: values.pickingLocation,
        to: values.destination,
        carType: values.carTypes,
        payment: values.paymentType,
        distance: distance,
        time: time,
        amount: amount,
      },
    });

    return { success: "Cab booked" };
  } catch (error) {
    console.log(error);
    return { error: "Getting Error to save in history" };
  }
};
