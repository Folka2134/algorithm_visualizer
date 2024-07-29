import { useRef } from "react";
import { PathfindingProvider } from "../context/PathfindingContext";
import { TileContextProvider } from "../context/TilesContext";
import { SpeedContextProvider } from "../context/SpeedContext";
import { Grid } from "./Grid";
import PathOptions from "./PathOptions";

const PathFinder = () => {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <div className="flex h-screen w-screen flex-col bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
            <PathOptions
              isVisualizationRunningRef={isVisualizationRunningRef}
            />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedContextProvider>
      </TileContextProvider>
    </PathfindingProvider>
  );
};

export default PathFinder;
