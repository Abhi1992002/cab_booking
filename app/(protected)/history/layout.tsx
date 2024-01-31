import React from "react";
import { Navbar } from "../_components/navbar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <>
      <div className="h-full w-full bg-black">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;
