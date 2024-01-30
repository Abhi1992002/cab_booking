"use client";
import React from "react";
import { BookSidebar } from "../../_components/book-sidebar";
import { MapBox } from "../../_components/map/mapbox";
import { useCurrentLocation } from "@/hooks/use-current-location";

type BookingProps = {};

const Book = ({}: BookingProps) => {
  const currentLocation = useCurrentLocation();

  return (
    <div className="w-full px-3 h-[87%] flex flex-col">
      <div className="w-full relative flex-1 flex h-full">
        {/* sidebar */}
        <div className="h-full flex items-center justify-center w-[400px] overflow-auto">
          <BookSidebar />
        </div>

        {/* map */}
        <div className="flex-1 h-full rounded-xl overflow-hidden">
          <MapBox />
        </div>
      </div>
    </div>
  );
};

export default Book;
