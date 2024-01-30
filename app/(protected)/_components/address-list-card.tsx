"use client";
import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { addressList } from "@/types";
import { MoonLoader } from "react-spinners";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { bookingSchema } from "@/schemas";
import { getCoordinates } from "@/actions/get-coordinates";
import { useSetRecoilState } from "recoil";
import { destinationCoordinatesState } from "@/store/atom/destinationCoordiates";
import { pickingCoordinatesState } from "@/store/atom/pickingCoordinates";

type AddressListCardProps = {
  type: "destination" | "pickingLocation";
  addressList?: addressList;
  spinner?: boolean;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
  setAddressList: React.Dispatch<React.SetStateAction<addressList | undefined>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddressListCard = ({
  addressList,
  setShow,
  spinner,
  type,
  setAddress,
  setAddressList,
  form,
}: AddressListCardProps) => {
  const setDestinatesCoordinates = useSetRecoilState(
    destinationCoordinatesState
  );
  const setPickingCoordinates = useSetRecoilState(pickingCoordinatesState);

  const onClickPickingAddress = (item: any) => {
    setAddress(item.full_address);
    setAddressList(undefined);
    setShow(false);
    form.setValue(type, item.full_address);
    getCoordinates(item.mapbox_id).then((value) => {
      if (value) {
        setPickingCoordinates(value);
      }
    });
  };

  const onClickDestinationAddress = (item: any) => {
    setAddress(item.full_address);
    setAddressList(undefined);
    setShow(false);
    form.setValue(type, item.full_address);

    getCoordinates(item.mapbox_id).then((value) => {
      if (value) {
        setDestinatesCoordinates(value);
      }
    });
  };

  if (type === "pickingLocation") {
    return (
      <>
        <div className="w-dull rounded-lg bg-white text-black">
          {spinner ? (
            <MoonLoader size={30} color="#000000" />
          ) : (
            <div className=" space-y-3 w-full relative">
              {addressList?.suggestions &&
                addressList.suggestions.map((item: any, i: number) => (
                  <h1
                    onClick={() => onClickPickingAddress(item)}
                    key={i}
                    className="truncate hover:cursor-pointer  text-sm font-medium text-black/50 hover:text-black "
                  >
                    {item.full_address}
                  </h1>
                ))}
            </div>
          )}
        </div>
      </>
    );
  }

  if (type === "destination") {
    return (
      <>
        <div className="w-dull rounded-lg bg-white text-black">
          {spinner ? (
            <MoonLoader size={30} color="#000000" />
          ) : (
            <div className=" space-y-3 w-full relative">
              {addressList?.suggestions &&
                addressList.suggestions.map((item: any, i: number) => (
                  <h1
                    onClick={() => onClickDestinationAddress(item)}
                    key={i}
                    className="truncate hover:cursor-pointer  text-sm font-medium text-black/50 hover:text-black "
                  >
                    {item.full_address}
                  </h1>
                ))}
            </div>
          )}
        </div>
      </>
    );
  }
};
