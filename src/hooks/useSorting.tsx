import { useContext } from "react";
import {
  SortingAlgorithmContext,
  SortingAlgorithmContextInterface,
} from "../context/SortingContext";

export const useSortingAlgorithmContext =
  (): SortingAlgorithmContextInterface => {
    const context = useContext(SortingAlgorithmContext);
    if (context === undefined) {
      throw new Error(
        "useSortingAlgorithmContext must be used within a SortingAlgorithmProvider",
      );
    }
    return context;
  };
