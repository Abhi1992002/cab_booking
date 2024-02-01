import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-black">
      {children}
    </div>
  );
};

export default AuthLayout;
