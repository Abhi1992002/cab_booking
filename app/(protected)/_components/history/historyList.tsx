"use client";
import { getHistory } from "@/actions/getHistory";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import type { History } from "@prisma/client";
import { HistoryCard } from "./historyCard";
import { MoonLoader } from "react-spinners";

type HistoryListProps = {};

export const HistoryList = ({}: HistoryListProps) => {
  const [historyList, setHistoryList] = useState<History[]>(null!);
  useEffect(() => {
    getHistory().then((data) => {
      if (data.error) {
        toast(data.error);
      }
      if (data.success) {
        setHistoryList(data.success);
      }
    });
  });
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[80%] py-4 h-full">
        {historyList ? (
          <>
            <h1 className="text-white text-3xl font-medium text-center my-8">
              History
            </h1>
            {historyList?.map((history) => (
              <div className={history.id}>
                {<HistoryCard history={history} />}
              </div>
            ))}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MoonLoader color="#ffffff" size={50} />
          </div>
        )}
      </div>
    </div>
  );
};
