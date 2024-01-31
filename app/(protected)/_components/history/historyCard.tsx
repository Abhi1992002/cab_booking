import { History } from "@prisma/client";
import React from "react";

type HistoryCardProps = {
  history: History;
};

export const HistoryCard = ({ history }: HistoryCardProps) => {
  return (
    <div className="w-full bg-[#18181B]  border border-white/40 rounded-lg p-4 mt-4 text-white pb-8">
      {/* address */}
      <div className="w-full flex items-center justify-between">
        <div className="w-[30%] text-center flex flex-col gap-4">
          <h1 className="text-center text-3xl text-white/80">From</h1>
          <div className="bg-white p-2 rounded-lg">
            <h1 className="text-black truncate font-medium">{history.from}</h1>
          </div>
        </div>
        <div>
          <h1 className=" text-green-400 text-xl">- - - - - - - - - - - </h1>
        </div>
        <div className="w-[30%] text-center flex flex-col gap-4">
          <h1 className="text-center text-3xl text-white/80">To</h1>
          <div className="bg-white p-2 rounded-lg">
            <h1 className="text-black  font-medium">{history.to}</h1>
          </div>
        </div>
      </div>

      {/* data */}
      <div className="w-full flex items-center justify-center gap-4 mt-4">
        {/* distnace */}
        <div className="text-black bg-white p-2 rounded-lg text-center w-[300px] h-[100px] flex items-center justify-center flex-col">
          <h1 className="text-xl font-semibold">
            {history.distance}{" "}
            <span className="text-sm text-black/60">miles</span>
          </h1>
          <h1 className="pt-2 font-medium">Distance</h1>
        </div>

        {/* time */}
        <div className="text-black bg-white p-2 rounded-lg text-center w-[300px] h-[100px] flex items-center justify-center flex-col">
          <h1 className="text-xl font-semibold">
            {history.time} <span className="text-sm text-black/60">min.</span>
          </h1>
          <h1 className="pt-2 font-medium">Time</h1>
        </div>

        {/* diatnace */}
        <div className="text-black bg-white p-2 rounded-lg text-center w-[300px] h-[100px] flex items-center justify-center flex-col">
          <h1 className="text-xl font-semibold">
            {history.amount}{" "}
            <span className="text-sm text-black/60">dollars</span>
          </h1>
          <h1 className="pt-2 font-medium">Amount</h1>
        </div>
      </div>
    </div>
  );
};
