"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {};

export const Hero = ({}: HeroProps) => {
  return (
    <div className="w-full h-full flex items-center text-white">
      <div className="flex-1 w-full h-full flex items-center justify-center flex-col gap-8">
        <h1 className="text-4xl font-semibold w-[80%] text-center">
          Effortless Cab Booking at Your Fingertips
        </h1>
        <p className="text-lg font-medium w-[80%] text-center">
          Discover a seamless way to travel with our user-friendly cab booking
          platform. Quick, reliable, and designed for your convenience.
        </p>
        <div className="w-[80%] flex items-center justify-between">
          <Button
            asChild
            variant={"link"}
            className="w-[45%] bg-white text-black"
          >
            <Link href={"#contact"}>Contact developer</Link>
          </Button>
          <Button variant={"default"} className="w-[45%]">
            <Link href={"/book"}>Book</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden flex items-center justify-center">
        <Image
          src={"/main.jpg"}
          alt="main image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
