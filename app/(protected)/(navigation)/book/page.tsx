"use client";
import React from "react";
import { BookSidebar } from "../../_components/book-sidebar";
import { MapBox } from "../../_components/map/mapbox";
import { useCurrentLocation } from "@/hooks/use-current-location";
import { DistanceTime } from "../../_components/map/distanceTime";
import { useRecoilValue } from "recoil";
import { expectedDistanceState } from "@/store/atom/expectedDistance";
import { expectedTimeState } from "@/store/atom/expectedTime";

type BookingProps = {};

const Book = ({}: BookingProps) => {
  const distance = useRecoilValue(expectedDistanceState);
  const time = useRecoilValue(expectedTimeState);
  return (
    <div className="w-full px-3 h-[87%] flex flex-col">
      <div className="w-full relative flex-1 flex h-full">
        {/* sidebar */}
        <div className="h-full flex items-center justify-center w-[400px] overflow-auto">
          <BookSidebar />
        </div>

        {/* map */}
        <div className="flex-1 h-full rounded-xl overflow-hidden relative">
          {distance && time && <DistanceTime distance={distance} time={time} />}

          <MapBox />
        </div>
      </div>
    </div>
  );
};

export default Book;
