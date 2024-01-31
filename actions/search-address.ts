"use server";

import { addressList } from "@/types";

export const searchAddress = async (searchParam: string) => {
  const base_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

  const session_Token = "cf97da81-13ab-42a1-99e0-6e1becb9dce4";

  if (searchParam === "") {
    return null;
  }

  const encodedSearchParam = encodeURIComponent(searchParam);

  console.log(encodedSearchParam);

  const res = await fetch(
    `${base_URL}?q=${encodedSearchParam}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&session_token=${session_Token}&language=en&types=region%2Cdistrict%2Cpostcode%2Clocality%2Cplace%2Cneighborhood%2Caddress%2Cpoi%2Cstreet%2Ccategory%2Ccountry&proximity=-80.810072%2C35.58486`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const searchResult = (await res.json()) as addressList;

  return { address: searchResult };
};
