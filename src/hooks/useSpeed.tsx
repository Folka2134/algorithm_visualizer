import { useContext } from "react";
import {
  SpeedContext,
  SpeedContextInterface,
  SpeedContextProvider,
} from "../context/SpeedContext";

export const useSpeedContext = (): SpeedContextInterface => {
  const context = useContext(SpeedContext);

  if (!context) {
    throw new Error(
      "useSpeedContext must be used within the SpeedContextProvider"
    );
  }

  return context;
};
