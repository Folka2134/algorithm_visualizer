import { getUntraversedNeighbours } from "../../../utils/getUntraversedNeighbours";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dijkstra = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
) => {
  const traversedTiles = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversedTiles = [base];

  while (unTraversedTiles.length > 0) {
    unTraversedTiles.sort((a, b) => a.distance - b.distance);
    const currentTile = unTraversedTiles.shift();
    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance == Infinity) break;
      currentTile.isTraversed = true;
      traversedTiles.push(currentTile);
      if (isEqual(currentTile, endTile)) break;
      const neightbours = getUntraversedNeighbours(grid, currentTile);
      for (let i = 0; i < neightbours.length; i++) {
        if (currentTile.distance + 1 < neightbours[i].distance) {
          dropFromQueue(neightbours[i], unTraversedTiles);
          neightbours[i].distance = currentTile.distance + 1;
          neightbours[i].parent = currentTile;
          unTraversedTiles.push(neightbours[i]);
        }
      }
    }
  }
  const path = [];
  let current = grid[endTile.row][endTile.col];

  while (current != null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }
  return { traversedTiles, path };
};
