"use client";
import React, { useRef, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlayIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type HowProps = {};

export const How = ({}: HowProps) => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <div className="w-full flex items-center justify-center pt-[100px]">
      <div className="w-[80%]">
        <h1 className="text-white text-5xl text-center">
          Get Started in Seconds: Watch our short tutorial to see how easy it is
          to book your next ride.
        </h1>
        <div className="w-full mt-[100px]">
          <AspectRatio
            ratio={16 / 9}
            className="border border-white/40 rounded-lg p-2 pb-0 relative"
          >
            <video
              ref={videoRef}
              onEnded={() => {
                setVideoPlaying(false);
              }}
              onClick={() => {
                setVideoPlaying(false);
                videoRef.current.pause();
              }}
              src="/video.mov"
              className={cn("w-[100%]", !videoPlaying && "opacity-30")}
            ></video>
            <Button
              className="absolute z-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              variant={"link"}
              onClick={() => {
                videoRef.current.play();
                setVideoPlaying(true);
              }}
            >
              {!videoPlaying && (
                <PlayIcon className="text-white w-20 h-20 hover:scale-125 transition-all duration-300 ease-in-out" />
              )}
            </Button>
            <div className="w-[100%] h-[5%] bg-white/40 rounded-e-lg"></div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};
