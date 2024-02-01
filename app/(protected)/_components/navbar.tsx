"use client";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const user = useCurrentUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "flex  text-white justify-between items-center   w-full shadow-sm border-b border-white/30 mb-2 p-4 h-[70px] transition-all duration-400 ease-in-out",
          isMenuOpen && "h-screen z-[1001] sticky top-0 bg-black items-start"
        )}
      >
        <Link href={"/"} className={cn(isMenuOpen && "hidden")}>
          <h1 className=" font-semibold">CAB.</h1>
        </Link>

        <div className="md:flex gap-x-16 hidden">
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
        </div>

        <div className="md:block hidden">
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
        </div>

        <div className={cn("md:hidden", isMenuOpen && "hidden")}>
          <button onClick={toggleMenu}>
            <HamburgerMenuIcon className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Menu Items: Hidden on small screens, visible on medium and larger screens */}

        <div
          className={cn(
            "w-full flex flex-col justify-center items-center",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          {/* Icons */}
          <div className="w-[100%] flex items-center justify-between mb-10">
            <Link href={"/"}>
              <h1 className=" font-semibold">CAB.</h1>
            </Link>
            <div className={cn("md:hidden")}>
              <button onClick={toggleMenu}>
                <Cross1Icon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* small - links */}
          <div className="w-full flex items-center justify-center flex-col">
            <Button
              className="w-[98%]"
              asChild
              variant={pathname === "/" ? "default" : "link"}
            >
              <Link href={"/"}>Home</Link>
            </Button>
            <Button
              className="w-[98%]"
              asChild
              variant={pathname === "/book" ? "default" : "link"}
            >
              <Link href={"/book"}>Book</Link>
            </Button>
            <Button
              className="w-[98%]"
              asChild
              variant={pathname === "/history" ? "default" : "link"}
            >
              <Link href={"/history"}>History</Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
