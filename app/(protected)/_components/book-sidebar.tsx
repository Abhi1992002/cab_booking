"use client";
import React from "react";
import { AdddressInput } from "./AddressInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bookingSchema } from "@/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CarSelector } from "./carSelector";
import { carType, cardType } from "@/types";
import { PaymentSelector } from "./paymentSelector";

type BookSidebarProps = {};

export const BookSidebar = ({}: BookSidebarProps) => {
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickingLocation: "",
      destination: "",
      carTypes: null!,
      paymentType: null!,
    },
  });

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full bg-black  rounded-lg flex flex-col text-white px-4 gap-4 pt-1 ">
        <h1 className="text-white text-2xl font-semibold">Booking</h1>
        {/* Address */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <AdddressInput form={form} />
            <CarSelector form={form} />
            <PaymentSelector form={form} />
            <hr className="opacity-50" />
            <div className="flex gap-4">
              <Button
                type="button"
                variant={"outline"}
                className=" bg-white text-black w-full"
              >
                Reset
              </Button>
              <Button type="submit" className="w-full ">
                Book
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
