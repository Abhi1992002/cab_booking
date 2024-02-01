"use client";
import React, { useState } from "react";
import { DistanceTime } from "../../_components/map/distanceTime";
import { useRecoilValue } from "recoil";
import { expectedDistanceState } from "@/store/atom/expectedDistance";
import { expectedTimeState } from "@/store/atom/expectedTime";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

type BookingProps = {};

const BookSidebar = dynamic(() => import("../../_components/book-sidebar"));
const MapBox = dynamic(() => import("../../_components/map/mapbox"));

const Book = ({}: BookingProps) => {
  const distance = useRecoilValue(expectedDistanceState);
  const time = useRecoilValue(expectedTimeState);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full px-3 h-[87%] flex flex-col">
      <div className="w-full relative  flex h-full  flex-1 ">
        {/* sidebar */}
        <div
          className={cn(
            "absolute  z-[100] h-full translate-x-[-110%]  transition-all duration-300 ease-in-out flex items-center justify-center w-full sm:w-[400px] overflow-auto",
            showSidebar &&
              "z-[100] translate-x-0 transition-all duration-300 ease-in-out"
          )}
        >
          {showSidebar && <BookSidebar setSidebar={setShowSidebar} />}
        </div>

        {/* map */}
        <div className="flex-1 w-full h-full rounded-xl overflow-hidden relative">
          {distance && time && <DistanceTime distance={distance} time={time} />}
          {!showSidebar && (
            <Button
              onClick={() => {
                setShowSidebar(true);
              }}
              variant={"link"}
              className={cn(
                "bg-white text-black absolute bottom-4 z-[100] left-4",
                showSidebar && "hidden"
              )}
            >
              Book
            </Button>
          )}
          <MapBox />
        </div>
      </div>
    </div>
  );
};

export default Book;
