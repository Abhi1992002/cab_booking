import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { FaMailBulk } from "react-icons/fa";

type ContactProps = {};

export const Contact = ({}: ContactProps) => {
  return (
    <div className="w-full flex items-center justify-center mt-[150px] pb-[100px]">
      <div className="w-[98%] md:w-[80%] flex-col flex items-center">
        <div className="bg-white  p-4 w-fit rounded-full">
          <h1 className="text-black text-4xl md:text-5xl text-center">
            Stay Connected
          </h1>
        </div>

        <p className="text-white text-xl text-center mt-[60px]">
          Have questions or feedback? We'd love to hear from you. Get in touch
          with us for any queries or suggestions regarding our cab booking
          service
        </p>
        <div className="mt-[60px] w-full flex items-center justify-around text-white">
          <Link href={"https://github.com/Abhi1992002"}>
            <GitHubLogoIcon className="w-20 h-20 hover:text-green-400" />
          </Link>
          <Link href={"https://twitter.com/abhiY2045"}>
            <TwitterLogoIcon className="w-20 h-20 hover:text-green-400" />
          </Link>
          <Link href={"mailto:abhimanyu1992002@gmail.com"}>
            <FaMailBulk className="w-20 h-20 hover:text-green-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};
