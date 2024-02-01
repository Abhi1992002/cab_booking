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

import { useRecoilValue, useSetRecoilState } from "recoil";
import { expectedDistanceState } from "@/store/atom/expectedDistance";
import { cars } from "@/data/cars";
import { amountState } from "@/store/atom/totalAmount";

type CarSelectorProps = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
};

export const CarSelector = ({ form }: CarSelectorProps) => {
  const distance = useRecoilValue(expectedDistanceState);
  const setAmount = useSetRecoilState(amountState);

  const getCost = (charges: number) => {
    return Number((distance * charges * 0.000621371192).toFixed(2));
  };

  return (
    <>
      <FormField
        control={form.control}
        name="carTypes"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base md:text-lg text-white/80">
              Choose Car
            </FormLabel>
            <FormControl>
              <ToggleGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                type="single"
                className="flex flex-wrap items-start justify-start gap-4"
              >
                {cars.map((car) => (
                  <FormItem className="flex flex-col space-y-3 items-center">
                    <FormControl>
                      <ToggleGroupItem
                        onClick={() => {
                          setAmount(getCost(car.charges));
                        }}
                        className={
                          "w-[100px] h-[100px] relative border border-white/40"
                        }
                        value={car.value}
                        aria-label={car["aria-label"]}
                      >
                        <Image
                          src={car.img}
                          width={90}
                          height={100}
                          alt="carImg"
                        />
                      </ToggleGroupItem>
                    </FormControl>
                    <FormLabel className="font-normal text-xs">
                      {car.name} {distance && ` - $ ${getCost(car.charges)}`}
                    </FormLabel>
                  </FormItem>
                ))}
              </ToggleGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
