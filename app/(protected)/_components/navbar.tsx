"use client";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const user = useCurrentUser();
  return (
    <>
      <nav className="flex  text-white justify-between items-center p-1  w-full shadow-sm border-b border-white/30 mb-2">
        <Link href={"/"}>
          {" "}
          <Image src={"/logo.png"} width={70} height={90} alt="logo" />
        </Link>

        <div className="flex gap-x-16">
          <Button asChild variant={pathname === "/" ? "default" : "link"}>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button asChild variant={pathname === "/book" ? "default" : "link"}>
            <Link href={"/book"}>Book</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/history" ? "default" : "link"}
          >
            <Link href={"/history"}>History</Link>
          </Button>
          <Button asChild variant={pathname === "/help" ? "default" : "link"}>
            <Link href={"/help"}>Help</Link>
          </Button>
        </div>

        {user ? (
          <UserButton />
        ) : (
          <div className="flex gap-x-4">
            <Button asChild variant={"link"}>
              <Link href={"/auth/login"}>Login</Link>
            </Button>
            <Button asChild variant={"default"}>
              <Link href={"/auth/register"}>Sign in</Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};
