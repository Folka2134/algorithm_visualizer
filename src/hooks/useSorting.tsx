import { useContext } from "react";
import {
  SortingContext,
  SortingContextInterface,
} from "../context/SortingContext";

export const useSortingContext = (): SortingContextInterface => {
  const context = useContext(SortingContext);

  if (!context) {
    throw new Error(
      "useSortingContext must be used within the SortingContextProvider",
    );
  }
  return context;
};
