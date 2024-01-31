"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

type SmallNavbarProps = {};

export const SmallNavbar = ({}: SmallNavbarProps) => {
  const [viewId, setViewId] = useState("");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "") {
      setViewId("main");
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    setViewId(targetId);
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="flex text-white justify-center items-center p-1  w-full shadow-sm border-b border-white/30 mb-2 sticky top-0 bg-black ">
      <div className="flex gap-x-16">
        <Button
          asChild
          variant={"link"}
          className={cn("text-sm", viewId === "main" && "underline")}
        >
          <Link href={"#main"} onClick={handleScroll}>
            Main
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn("text-sm", viewId === "how" && "underline")}
        >
          <Link href={"#how"} onClick={handleScroll}>
            How to use?
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn("text-sm", viewId === "tech" && "underline")}
        >
          <Link href={"#tech"} onClick={handleScroll}>
            Tech stack
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn("text-sm", viewId === "contact" && "underline")}
        >
          <Link href={"#contact"} onClick={handleScroll}>
            Contact
          </Link>
        </Button>
      </div>
    </nav>
  );
};
