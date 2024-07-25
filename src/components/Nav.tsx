import { useState } from "react";
import { usePathfinding } from "../hooks/usePathFinding";
import { useTileContext } from "../hooks/useTile";
import { MAZES } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { MazeType } from "../utils/types";
import Select from "./Select";
import { useSpeedContext } from "../hooks/useSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";

const Nav = () => {
  const [isDisabeled, setIsDisabled] = useState(false);
  const { maze, setMaze, grid, setGrid, setIsGraphVisualized } =
    usePathfinding();
  const { startTile, endTile } = useTileContext();
  const { speed } = useSpeedContext();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze == "NONE") {
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
