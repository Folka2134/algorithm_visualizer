import React from "react";
import {
  SortingContext,
  SortingContextProvider,
} from "../context/SortingContext";

const Sorter = () => {
  return (
    <SortingContextProvider>
      <div className="flex h-screen w-screen flex-col bg-black">
        {/* <SortOptions /> */}
      </div>
    </SortingContextProvider>
  );
};

export default Sorter;
