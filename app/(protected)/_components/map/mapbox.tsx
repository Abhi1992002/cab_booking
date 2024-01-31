"use client";
import { useCurrentLocation } from "@/hooks/use-current-location";
import React, { useEffect, useRef } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MoonLoader } from "react-spinners";
import { Markers } from "./markers";
import { useRecoilState, useRecoilValue } from "recoil";
import { pickingCoordinatesState } from "@/store/atom/pickingCoordinates";
import { destinationCoordinatesState } from "@/store/atom/destinationCoordiates";
import { drawRoute } from "@/actions/drawRoute";
import { drawRouteCoordinatesState } from "@/store/atom/drawRouteCoordinates";
import { RouteLayer } from "./route";
import { expectedDistanceState } from "@/store/atom/expectedDistance";
import { expectedTimeState } from "@/store/atom/expectedTime";
export function MapBox() {
  const currentLocation = useCurrentLocation();
  const mapRef = useRef<any>();
  const destinationCoordinates = useRecoilValue(destinationCoordinatesState);
  const pickingCoordinates = useRecoilValue(pickingCoordinatesState);
  const [drawRouteCoordinates, setDrawRouteCoordinates] = useRecoilState(
    drawRouteCoordinatesState
  );
  const [expectedDistance, setExpectedDistance] = useRecoilState(
    expectedDistanceState
  );
  const [expectedTime, setExpectedTime] = useRecoilState(expectedTimeState);

  useEffect(() => {
    if (pickingCoordinates) {
      mapRef.current?.flyTo({
        center: [pickingCoordinates.long, pickingCoordinates.lat],
        duration: 2500,
      });
    }
    if (pickingCoordinates && destinationCoordinates) {
      drawRoute({ pickingCoordinates, destinationCoordinates }).then(
        (value) => {
          setDrawRouteCoordinates(value?.result);
          setExpectedTime(value?.result.routes[0].duration);
          setExpectedDistance(value?.result.routes[0].distance);
        }
      );
    }
  }, [pickingCoordinates]);

  useEffect(() => {
    if (destinationCoordinates) {
      mapRef.current?.flyTo({
        center: [destinationCoordinates.long, destinationCoordinates.lat],
        duration: 2500,
      });
    }

    if (pickingCoordinates && destinationCoordinates) {
      drawRoute({ pickingCoordinates, destinationCoordinates }).then(
        (value) => {
          setDrawRouteCoordinates(value?.result);
          setExpectedTime(value?.result.routes[0].duration);
          setExpectedDistance(value?.result.routes[0].distance);
        }
      );
    }
  }, [destinationCoordinates]);

  return (
    <>
      {Object.keys(currentLocation).length !== 0 ? (
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: currentLocation.long,
            latitude: currentLocation.lat,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <Markers />
          {drawRouteCoordinates?.routes ? (
            <RouteLayer
              coordinates={
                drawRouteCoordinates?.routes[0]?.geometry?.coordinates
              }
            />
          ) : null}
        </Map>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <MoonLoader color="#ffffff" size={30} />
        </div>
      )}
    </>
  );
}
