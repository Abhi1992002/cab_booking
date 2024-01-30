"use client";
import { useCurrentLocation } from "@/hooks/use-current-location";
import { destinationCoordinatesState } from "@/store/atom/destinationCoordiates";
import { pickingCoordinatesState } from "@/store/atom/pickingCoordinates";
import React from "react";
import { IoMdPin } from "react-icons/io";
import { Marker } from "react-map-gl";
import { useRecoilValue } from "recoil";

type MarkersProps = {};

export const Markers = ({}: MarkersProps) => {
  const currentLocation = useCurrentLocation();
  const destinationCoordinates = useRecoilValue(destinationCoordinatesState);
  const pickingCoordinates = useRecoilValue(pickingCoordinatesState);

  return (
    <>
      {/* Current Location */}
      {currentLocation && (
        <Marker
          longitude={currentLocation.long}
          latitude={currentLocation.lat}
          anchor="bottom"
        >
          <IoMdPin className="text-white bg-transparent w-10 h-10" />
        </Marker>
      )}

      {/* Picking Address */}
      {pickingCoordinates && (
        <Marker
          longitude={pickingCoordinates.long}
          latitude={pickingCoordinates.lat}
          anchor="bottom"
        >
          <IoMdPin className="text-white bg-transparent w-10 h-10" />
        </Marker>
      )}

      {/* Destination */}
      {destinationCoordinates && (
        <Marker
          longitude={destinationCoordinates.long}
          latitude={destinationCoordinates.lat}
          anchor="bottom"
        >
          <IoMdPin className="text-white bg-transparent w-10 h-10" />
        </Marker>
      )}
    </>
  );
};
