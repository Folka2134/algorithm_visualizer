import { generateBubbleSortAnimationArray } from "../lib/algorithms/sorting/bubbleSort";
import { generateInsertionSortAnimationArray } from "../lib/algorithms/sorting/insertionSort";
import { generateMergeSortAnimationArray } from "../lib/algorithms/sorting/mergeSort";
import { generateQuickSortAnimationArray } from "../lib/algorithms/sorting/quickSort";
import { generateSelectionSortAnimationArray } from "../lib/algorithms/sorting/selectionSort";
import { SortingAlgorithmType } from "./types";

export function runSortingAlgorithm(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void,
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}
