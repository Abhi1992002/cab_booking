"use client";
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
import Image from "next/image";
import { carType } from "@/types";

type CarSelectorProps = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
};

export const CarSelector = ({ form }: CarSelectorProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="carTypes"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-lg text-white/80">Choose Car</FormLabel>
            <FormControl>
              <ToggleGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                type="single"
                className="flex flex-wrap items-start justify-start gap-4"
              >
                {/* Economy */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={
                        "w-[100px] h-[100px] relative border border-white/80 data-[state=on]:bg-gradient-to-tr data-[state=on]:from-green-400 data-[state=on]:to-lime-400 data-[state=on]:border-black"
                      }
                      value={carType.ECONOMY}
                      aria-label={carType.ECONOMY}
                    >
                      <Image src={"/car.png"} fill alt="carImg" />
                    </ToggleGroupItem>
                  </FormControl>
                  <FormLabel className="font-normal">Economy</FormLabel>
                </FormItem>

                {/* Mini Van */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={
                        "w-[100px] h-[100px] relative border border-white/80 data-[state=on]:bg-gradient-to-tr data-[state=on]:from-green-400 data-[state=on]:to-lime-400 data-[state=on]:border-black"
                      }
                      value={carType.MINIVAN}
                      aria-label={carType.MINIVAN}
                    >
                      <Image src={"/car.png"} fill alt="carImg" />
                    </ToggleGroupItem>
                  </FormControl>
                  <FormLabel className="font-normal">Mini Van</FormLabel>
                </FormItem>

                {/* Comfort */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={
                        "w-[100px] h-[100px] relative border border-white/80 data-[state=on]:bg-gradient-to-tr data-[state=on]:from-green-400 data-[state=on]:to-lime-400 data-[state=on]:border-black"
                      }
                      value={carType.COMFORT}
                      aria-label={carType.COMFORT}
                    >
                      <Image src={"/car.png"} fill alt="carImg" />
                    </ToggleGroupItem>
                  </FormControl>
                  <FormLabel className="font-normal">Comfort</FormLabel>
                </FormItem>

                {/* Luxury */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={
                        "w-[100px] h-[100px] relative border border-white/80 data-[state=on]:bg-gradient-to-tr data-[state=on]:from-green-400 data-[state=on]:to-lime-400 data-[state=on]:border-black"
                      }
                      value={carType.LUXURY}
                      aria-label={carType.LUXURY}
                    >
                      <Image src={"/car.png"} fill alt="carImg" />
                    </ToggleGroupItem>
                  </FormControl>
                  <FormLabel className="font-normal">Luxury</FormLabel>
                </FormItem>

                {/* Electric */}
                <FormItem className="flex flex-col space-y-3 items-center">
                  <FormControl>
                    <ToggleGroupItem
                      className={
                        "w-[100px] h-[100px] relative border border-white/80 data-[state=on]:bg-gradient-to-tr data-[state=on]:from-green-400 data-[state=on]:to-lime-400 data-[state=on]:border-black"
                      }
                      value={carType.ELECTRIC}
                      aria-label={carType.ELECTRIC}
                    >
                      <Image src={"/car.png"} fill alt="carImg" />
                    </ToggleGroupItem>
                  </FormControl>
                  <FormLabel className="font-normal">Electric</FormLabel>
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
