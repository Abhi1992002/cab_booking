"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { bookingSchema } from "@/schemas";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cardType } from "@prisma/client";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";

type PaymentSelectorProps = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
};

export const PaymentSelector = ({ form }: PaymentSelectorProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="paymentType"
        render={({ field }) => (
          <FormItem className="space-y-3 w-full">
            <FormLabel className="text-base md:text-lg text-white/80">
              Payment Method
            </FormLabel>
            <FormControl className="w-full">
              <ToggleGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                type="single"
                className="flex w-full flex-wrap items-start justify-start gap-2"
              >
                {/* MasterCard */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={"flex-1 relative border border-white/80 "}
                      value={cardType.MASTERCARD}
                      aria-label={cardType.MASTERCARD}
                    >
                      <RiMastercardFill className="w-[30px] h-[30px]" />
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>

                {/* VISA */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={"flex-1 relative border border-white/80"}
                      value={cardType.VISA}
                      aria-label={cardType.VISA}
                    >
                      <RiVisaLine className="w-[30px] h-[30px]" />
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>

                {/* Apple Pay */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={"flex-1 relative border border-white/80"}
                      value={cardType.APPLEPAY}
                      aria-label={cardType.APPLEPAY}
                    >
                      <FaApplePay className="w-[30px] h-[30px]" />
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>

                {/* Google Pay */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={"flex-1 relative border border-white/80 d"}
                      value={cardType.GOOGLEPAY}
                      aria-label={cardType.GOOGLEPAY}
                    >
                      <FaGooglePay className="w-[30px] h-[30px]" />
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>

                {/* Cash */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={"flex-1 relative border border-white/80 "}
                      value={cardType.CASH}
                      aria-label={cardType.CASH}
                    >
                      <IoCashOutline className="w-[30px] h-[30px]" />
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>
              </ToggleGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
