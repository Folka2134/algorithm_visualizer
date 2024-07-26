import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathFinding";
import { useTileContext } from "../hooks/useTile";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import Select from "./Select";
import { useSpeedContext } from "../hooks/useSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { runPathFindingAlgorithm } from "../utils/runPathFindingAlgorithm";
import { animatePath } from "../utils/animatePath";
import { PlayButton } from "./PlayButton ";

const Nav = ({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) => {
  const [isDisabeled, setIsDisabled] = useState(false);
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathfinding();
  const { startTile, endTile } = useTileContext();
  const { speed, setSpeed } = useSpeedContext();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "NONE") {
      setMaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handleRunVisualizer = () => {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }

    const { traversedTiles, path } = runPathFindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isVisualizationRunningRef.current = true;
    setTimeout(
      () => {
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(true);
        setIsDisabled(false);
        isVisualizationRunningRef.current = false;
      },
      SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) +
        EXTENDED_SLEEP_TIME *
          (path.length + 60) *
          SPEEDS.find((s) => s.value === speed)!.value,
    );
  };

  return (
    <div className="flex min-h-[4.5rem] items-center justify-center border-b px-0 shadow-gray-600 sm:px-5">
      <div className="flex w-full items-center justify-center sm:w-[52rem] lg:justify-between">
        <h1 className="hidden w-[40%] pl-1 text-3xl text-white lg:flex">
          Pathfinder
        </h1>
        <div className="flex flex-col items-center justify-between space-y-3 py-4 sm:flex-row sm:items-end sm:justify-start sm:space-x-4 sm:space-y-0 sm:py-0">
          <Select
            label="maze"
            value={maze}
            options={MAZES}
            onChange={(e) => handleGenerateMaze(e.target.value as MazeType)}
            isDisabled={isDisabeled}
          />
          <Select
            label="graph"
            value={algorithm}
            options={PATHFINDING_ALGORITHMS}
            onChange={(e) => setAlgorithm(e.target.value as AlgorithmType)}
          />
          <Select
            label="speed"
            value={speed}
            options={SPEEDS}
            onChange={(e) => setSpeed(parseInt(e.target.value) as SpeedType)}
          />
          <PlayButton
            isDisabled={isDisabeled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handleRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
