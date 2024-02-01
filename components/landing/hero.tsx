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
        <h1 className="text-4xl font-semibold w-[98%] md:w-[80%] text-center">
          Effortless Cab Booking at Your Fingertips
        </h1>
        <p className="text-lg font-medium w-[98%] md:w-[80%] text-center">
          Discover a seamless way to travel with our user-friendly cab booking
          platform. Quick, reliable, and designed for your convenience.
        </p>
        <div className="w-[98%] md:w-[80%] flex items-center justify-between flex-col md:flex-row gap-2 md:gap-0">
          <Button
            asChild
            variant={"link"}
            className="w-[90%] md:w-[45%] bg-white text-black"
          >
            <Link href={"https://twitter.com/abhiY2045"}>
              Contact developer
            </Link>
          </Button>
          <Button variant={"default"} className="w-[90%] md:w-[45%]">
            <Link href={"/book"}>Book</Link>
          </Button>
        </div>
      </div>
      <div className=" lg:flex-1 w-full h-full overflow-hidden lg:flex hidden items-center justify-center">
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
