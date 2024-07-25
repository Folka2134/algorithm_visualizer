import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import { recursiveDivision } from "../lib/algorithms/maze/recursiveDivision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import { constructBoarder } from "./constructBoarder";
import { GridType, MazeType, SpeedType, TileType } from "./types";

// type runMazeALgorithmProps = {
//   maze: MazeType;
//   grid: GridType;
//   startTile: TileType;
//   endTile: TileType;
//   setIsDisabled: (issDisabled: boolean) => void;
//   speed: SpeedType;
// };

export const runMazeALgorithm = async (
  maze: MazeType,
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (issDisabled: boolean) => void,
  speed: SpeedType,
) => {
  if (maze == "BINARY_TREE") {
    await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
  } else if (maze == "RECURSIVE_DIVISION") {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;
    await constructBoarder(grid, startTile, endTile);
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      row: 1,
      col: 1,
      height: Math.floor(MAX_ROWS - 1) / 2,
      width: Math.floor(MAX_COLS - 1) / 2,
      setIsDisabled,
      speed,
    });
    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
};
