"use client";
import { searchAddress } from "@/actions/search-address";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bookingSchema } from "@/schemas";
import { addressList } from "@/types";
import React, { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { AddressListCard } from "./address-list-card";

type AdddressInputProps = {
  form: UseFormReturn<z.infer<typeof bookingSchema>>;
};

export const AdddressInput = ({ form }: AdddressInputProps) => {
  const [pickingAddress, setPickingAddress] = useState<string>("");

  const [destinationAddress, setDestinationAddress] = useState<string>("");

  const [addressList, setAddressList] = useState<addressList>();
  const [addressSpinners, setAddressSpinner] = useState(false);

  const [showDestination, setShowDestination] = useState(false);
  const [showPicking, setShowPicking] = useState(false);

  useEffect(() => {
    setAddressSpinner(true);
    const delay = setTimeout(() => {
      getPickingAddress();
    }, 1000);

    return () => clearTimeout(delay);
  }, [pickingAddress]);

  useEffect(() => {
    setAddressSpinner(true);
    const delay = setTimeout(() => {
      getDestinationAddress();
    }, 1000);

    return () => clearTimeout(delay);
  }, [destinationAddress]);

  const getPickingAddress = () => {
    searchAddress(pickingAddress).then((data) => {
      if (data?.address) {
        setAddressList(data.address);
      }
    });

    setAddressSpinner(false);
  };

  const getDestinationAddress = () => {
    searchAddress(destinationAddress).then((data) => {
      if (data?.address) {
        setAddressList(data.address);
      }
    });
    setAddressSpinner(false);
  };

  return (
    <>
      <FormField
        control={form.control}
        name="pickingLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base md:text-lg text-white/80">
              Picking Location
            </FormLabel>
            <FormControl>
              <div className="relative w-full">
                <Input
                  {...field}
                  autoComplete="off"
                  value={pickingAddress}
                  className="border border-white/40"
                  onChange={(e) => {
                    if (!showPicking) {
                      setShowPicking(true);
                    }
                    setPickingAddress(e.target.value);
                    form.setValue("pickingLocation", e.target.value);
                  }}
                />

                {showPicking &&
                  pickingAddress &&
                  addressList &&
                  addressList.suggestions.length !== 0 && (
                    <AddressListCard
                      type="pickingLocation"
                      setShow={setShowPicking}
                      setAddressList={setAddressList}
                      spinner={addressSpinners}
                      addressList={addressList}
                      form={form}
                      setAddress={setPickingAddress}
                    />
                  )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="destination"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base md:text-lg text-white/80">
              Destination
            </FormLabel>
            <FormControl>
              <div className="relative w-full">
                <Input
                  {...field}
                  autoComplete="off"
                  value={destinationAddress}
                  className="border border-white/40"
                  onChange={(e) => {
                    if (!showDestination) {
                      setShowDestination(true);
                    }
                    setDestinationAddress(e.target.value);
                    form.setValue("destination", e.target.value);
                  }}
                />

                {showDestination &&
                  destinationAddress &&
                  addressList &&
                  addressList.suggestions.length !== 0 && (
                    <AddressListCard
                      type="destination"
                      setShow={setShowDestination}
                      setAddressList={setAddressList}
                      form={form}
                      addressList={addressList}
                      setAddress={setDestinationAddress}
                    />
                  )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
