import { carType, cardType } from "@/types";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const resetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 character required",
  }),
  name: z.string().min(1, {
    message: "Name is Required",
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const bookingSchema = z.object({
  pickingLocation: z
    .string()
    .min(1, {
      message: "Picking location can't be empty",
    })
    .max(500),
  destination: z
    .string()
    .min(1, {
      message: "Destination can't be empty",
    })
    .max(500),
  carTypes: z.enum([
    carType.ECONOMY,
    carType.COMFORT,
    carType.ELECTRIC,
    carType.LUXURY,
    carType.MINIVAN,
  ]),
  paymentType: z.enum([
    cardType.MASTERCARD,
    cardType.APPLEPAY,
    cardType.GOOGLEPAY,
    cardType.CASH,
    cardType.VISA,
  ]),
});
