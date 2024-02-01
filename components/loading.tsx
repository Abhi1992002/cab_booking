import React from "react";
import { MoonLoader } from "react-spinners";

type LoadingProps = {};

export const Loading = ({}: LoadingProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MoonLoader size={30} color="#ffffff" />
    </div>
  );
};
