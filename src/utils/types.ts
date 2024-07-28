export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";
export interface AlgorithmSelectType {
  name: string;
  value: AlgorithmType;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";
export interface MazeSelectType {
  name: string;
  value: MazeType;
}

export type TileType = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}

export type SortingAlgorithmType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

export type AlgorithmInfo = {
  title: string;
  description: string;
  worstCase: string;
  averageCase: string;
  bestCase: string;
};

export type SortingAlgorithmsData = {
  [key in SortingAlgorithmType]: AlgorithmInfo;
};

export type AnimateSpeedType = "slow" | "medium" | "fast" | "lighning";

export type SelectOptionsType = {
  name: string;
  value: string;
};

export type AnimationArrayType = [number[], boolean][];
