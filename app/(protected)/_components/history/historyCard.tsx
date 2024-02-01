"use client";
import { deleteHistory } from "@/actions/delete-history";
import { Button } from "@/components/ui/button";
import { History } from "@prisma/client";
import { CircleIcon, TrashIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import { toast } from "sonner";

type HistoryCardProps = {
  history: History;
  getHistoryList: (id?: string) => void;
};

export const HistoryCard = ({ history, getHistoryList }: HistoryCardProps) => {
  const [deleting, setDeleting] = useState(false);

  const onDeleteHistory = () => {
    setDeleting(true);
    deleteHistory(history.id)
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.success) {
          toast.success(data.success);
          getHistoryList(history.id);
        }
      })
      .catch((error) => {
        console.error("Error deleting history:", error);
      })
      .finally(() => {
        setDeleting(false);
      });
  };
  return (
    <div className="w-full  border border-white/40 rounded-lg  mt-4 text-white pb-8">
      <div className="bg-white/20 w-full h-[30px] rounded-t-lg flex items-center gap-2 pl-2">
        <Button
          onClick={onDeleteHistory}
          variant={"link"}
          disabled={deleting}
          className="h-auto bg-red-500 rounded-full p-1 z-1"
        >
          {deleting ? (
            <MoonLoader size={12} color="#000000" />
          ) : (
            <TrashIcon className="w-3 h-3 text-black hover:cursor-pointer" />
          )}
        </Button>
      </div>
      <div className="p-4 w-full ">
        {/* address */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-[30%] w-full text-center flex flex-col gap-4">
            <h1 className="text-center text-xl md:text-3xl text-white/80">
              From
            </h1>
            <div className="bg-white p-2 rounded-lg">
              <h1 className="text-black text-sm md:text-base truncate font-medium">
                {history.from}
              </h1>
            </div>
          </div>
          <div className="md:block hidden">
            <h1 className=" text-green-400 text-xl">- - - - - - - - - - - </h1>
          </div>
          <div className="md:hidden block">
            <h1 className="flex flex-col gap-2 py-4">
              <CircleIcon className="bg-green-400 text-green-400 w-2 rounded-full h-2" />
              <CircleIcon className="bg-green-400 text-green-400 w-2 rounded-full h-2" />
              <CircleIcon className="bg-green-400 text-green-400 w-2 rounded-full h-2" />
              <CircleIcon className="bg-green-400 text-green-400 w-2 rounded-full h-2" />
            </h1>
          </div>

          <div className="md:w-[30%] w-full text-center flex flex-col gap-4">
            <h1 className="text-center text-xl md:text-3xl text-white/80">
              To
            </h1>
            <div className="bg-white p-2 rounded-lg">
              <h1 className="text-black truncate text-sm md:text-base font-medium">
                {history.to}
              </h1>
            </div>
          </div>
        </div>

        {/* data */}
        <div className="w-full flex items-center justify-center md:flex-row flex-col gap-4 mt-4">
          {/* distnace */}
          <div className="text-white  bg-[#18181B] p-2 rounded-lg text-center w-full md:w-[300px] h-[100px] flex items-center justify-center flex-col">
            <h1 className="text-xl font-semibold">
              {history.distance}{" "}
              <span className="text-sm text-white/40">miles</span>
            </h1>
            <h1 className="pt-2 font-medium">Distance</h1>
          </div>

          {/* time */}
          <div className=" text-white  bg-[#18181B] p-2 rounded-lg text-center  w-full md:w-[300px] h-[100px] flex items-center justify-center flex-col">
            <h1 className="text-xl  font-semibold">
              {history.time} <span className="text-sm text-white/40">min.</span>
            </h1>
            <h1 className="pt-2 font-medium">Time</h1>
          </div>

          {/* diatnace */}
          <div className=" text-white  bg-[#18181B] p-2 rounded-lg text-center  w-full md:w-[300px] h-[100px] flex items-center justify-center flex-col">
            <h1 className="text-xl font-semibold">
              {history.amount}{" "}
              <span className="text-sm text-white/40">dollars</span>
            </h1>
            <h1 className="pt-2 font-medium">Amount</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
