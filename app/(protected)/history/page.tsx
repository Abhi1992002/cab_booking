import React from "react";

import { HistoryList } from "../_components/history/historyList";

type HistoryProps = {};

const History = ({}: HistoryProps) => {
  return (
    <div className="overflow-auto h-[85%] w-full scroller">
      <HistoryList />
    </div>
  );
};

export default History;
