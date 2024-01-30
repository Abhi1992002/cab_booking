"use server";

import { currentLocationType } from "@/types";

export const getCoordinates = async (id: string) => {
  const base_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve";

  const session_Token = "f3138b5a-43dc-4a1f-adf7-df6bc41f58a0";

  if (!id) {
    return null;
  }

  const res = await fetch(
    `${base_URL}/${id}?session_token=${session_Token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await res.json();

  const coordinates = response.features[0].geometry.coordinates;

  console.log(coordinates);

  return { long: coordinates[0], lat: coordinates[1] };
};
