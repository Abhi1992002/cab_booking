"use client";
import { amountState } from "@/store/atom/totalAmount";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DiatanceTimeProps = {
  distance: number;
  time: number;
};

export const DistanceTime = ({ distance, time }: DiatanceTimeProps) => {
  const amount = useRecoilValue(amountState);
  return (
    <div className="absolute z-10 top-2 right-[50%] translate-x-[50%] md:translate-x-0 md:right-4 w-[98%] md:w-[50%]">
      <div className=" bg-black border border-white/40 w-full rounded-lg p-4 shadow-xl shadow-black/60 text-white">
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger>
              <h1 className="text-xl font-semibold">Ride Informations</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                {/* distance */}
                <div className="flex gap-3 items-center  justify-between">
                  <h1 className="text-lg md:text-xl font-semibold w-[100px]">
                    Distance{" "}
                  </h1>
                  <h1 className="text-xl font-semibold text-green-400 hidden md:block">
                    - - - - - - - -
                  </h1>
                  <div className="flex gap-2 text-black bg-white p-2 rounded-lg font-medium w-[150px] justify-around">
                    <h1> {(distance * 0.000621371192).toFixed(2)} </h1>
                    <h1 className="text-black/50"> miles</h1>
                  </div>
                </div>

                {/* time */}
                <div className="flex gap-3 items-center  justify-between">
                  <h1 className="text-lg md:text-xl font-semibold w-[100px]">
                    Time{" "}
                  </h1>
                  <h1 className="text-xl font-semibold text-green-400 hidden md:block">
                    - - - - - - - -
                  </h1>
                  <div className="flex gap-2 text-black bg-white p-2 rounded-lg font-medium w-[150px] justify-around ">
                    <h1> {(time / 60).toFixed(2)} </h1>
                    <h1 className="text-black/50"> min</h1>
                  </div>
                </div>

                {/* Amount */}
                {amount && (
                  <div className="flex gap-3 items-center  justify-between">
                    <h1 className="text-lg md:text-xl font-semibold">
                      Total Amount{" "}
                    </h1>

                    <div className="flex gap-2 text-black bg-white p-2 rounded-lg font-medium w-[150px] justify-around ">
                      <h1> {amount} </h1>
                      <h1 className="text-black/50"> dollars</h1>
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
