"use client";
import React, { useState } from "react";
import { AdddressInput } from "./AddressInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bookingSchema } from "@/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CarSelector } from "./carSelector";
import { PaymentSelector } from "./paymentSelector";
import { toast } from "sonner";
import { addInHistory } from "@/actions/add-in-history";
import { useRecoilValue } from "recoil";
import { expectedDistanceState } from "@/store/atom/expectedDistance";
import { expectedTimeState } from "@/store/atom/expectedTime";
import { amountState } from "@/store/atom/totalAmount";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

type BookSidebarProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BookSidebar = ({ setSidebar }: BookSidebarProps) => {
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickingLocation: "",
      destination: "",
      carTypes: null!,
      paymentType: null!,
    },
  });

  const distance = useRecoilValue(expectedDistanceState);
  const time = useRecoilValue(expectedTimeState);
  const amount = useRecoilValue(amountState);

  const [loading, setLoading] = useState(false);

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    setLoading(true);

    addInHistory({ values, distance, time, amount }).then((data) => {
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      }
      if (data?.success) {
        toast.success(data.success);
        setLoading(false);
        setSidebar(false);
      }
    });
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full bg-black  rounded-lg flex flex-col text-white px-4   gap-4 pt-1 scroller overflow-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-semibold">
            Booking
          </h1>{" "}
          <Button
            className="text-black bg-white"
            variant={"link"}
            onClick={() => {
              setSidebar(false);
            }}
          >
            <MdKeyboardDoubleArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>

        {/* Address */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <AdddressInput form={form} />
            <CarSelector form={form} />
            <PaymentSelector form={form} />
            <hr className="opacity-50" />
            <div className="flex gap-4">
              <Button
                asChild
                disabled={loading}
                type="button"
                variant={"outline"}
                className=" bg-white text-black w-full"
              >
                <Link href={"/"}>Home</Link>
              </Button>
              <Button type="submit" className="w-full ">
                {loading ? <MoonLoader size={14} color="black" /> : "Book"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
