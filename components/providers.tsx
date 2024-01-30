"use client";
import React from "react";
import { RecoilRoot } from "recoil";

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};
