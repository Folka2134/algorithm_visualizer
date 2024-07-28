import { createContext, useState } from "react";
import { SortingAlgorithmType } from "../utils/types";

export interface SortingContextInterface {
  unsortedArray: number[];
  setUnsortedArray: (array: number[]) => void;
  algorithm: SortingAlgorithmType;
  setAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  isAnimationComplete: boolean;
  setAnimationComplete: (isAnimationComplete: boolean) => void;
  resetArray: () => void;
  runAnimation: () => void;
}

export const SortingContext = createContext<
  SortingContextInterface | undefined
>(undefined);

export const SortingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [unsortedArray, setUnsortedArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithmType>("BUBBLE");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [isAnimationComplete, setAnimationComplete] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);

  const resetArray = () => {};

  const runAnimation = () => {};

  const value = {
    unsortedArray,
    setUnsortedArray,
    algorithm,
    setAlgorithm,
    isSorting,
    setIsSorting,
    isAnimationComplete,
    setAnimationComplete,
    resetArray,
    runAnimation,
  };

  return (
    <SortingContext.Provider value={value}>{children}</SortingContext.Provider>
  );
};
