import { bfs } from "../lib/algorithms/pathFinding/bfs";
import { AlgorithmType, GridType, TileType } from "./types";

export const runPathFindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};