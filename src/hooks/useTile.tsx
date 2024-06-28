import { useContext } from "react";
import { TileContext, TileContextInterface } from "../context/TilesContext";

export const useTileContext = (): TileContextInterface => {
  const context = useContext(TileContext);

  if (!context) {
    throw new Error(
      "useTileContext must be used within the TileContextProvider"
    );
  }

  return context;
};
