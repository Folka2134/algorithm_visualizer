import { binaryTree } from "../lib/algorithms/maze/binaryTree";
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
  }
};
