"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

type ClientPageProps = {};

const ClientPage = ({}: ClientPageProps) => {
  const user = useCurrentUser();
  return (
    <>
      <UserInfo label="Server component" user={user} />
    </>
  );
};

export default ClientPage;
