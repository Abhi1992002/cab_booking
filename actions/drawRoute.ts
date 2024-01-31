"use server";

import { currentLocationType } from "@/types";

export const drawRoute = async ({
  pickingCoordinates,
  destinationCoordinates,
}: {
  pickingCoordinates: currentLocationType;
  destinationCoordinates: currentLocationType;
}) => {
  if (!pickingCoordinates || !destinationCoordinates) return null;

  const base_URL = "https://api.mapbox.com/directions/v5/mapbox/driving/";

  const res = await fetch(
    base_URL +
      pickingCoordinates.long +
      "," +
      pickingCoordinates.lat +
      ";" +
      destinationCoordinates.long +
      "," +
      destinationCoordinates.lat +
      "?overview=full&geometries=geojson&access_token=" +
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await res.json();

  console.log(result);

  return { result: result };
};
