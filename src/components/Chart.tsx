import { FaArrowLeft, FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { useSortingAlgorithmContext } from "../context/SortingContext";
import { SortingAlgorithmType } from "../utils/types";
import { Slider } from "./Slider";
import { algorithmOptions, sortingAlgorithmsData } from "../utils/constants";
import { SortingSelect } from "./SortingSelect";
import { Link } from "react-router-dom";
import { runSortingAlgorithm } from "../utils/runSortingAlgorithm";

export default function Chart() {
  const {
    arrayToSort,
    isSorting,
    setAnimationSpeed,
    animationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(e.target.value as SortingAlgorithmType);
  };

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    runSortingAlgorithm(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation,
    );
  };

  return (
    <main className="absolute top-0 h-screen w-screen text-white">
      <div className="flex h-full justify-center">
        <div
          id="content-container"
          className="flex w-full max-w-[1020px] flex-col px-4 lg:px-0"
        >
          <div className="relative flex h-[66px] w-full items-center justify-between">
            <button className="mr-8 text-white">
              <Link to="/">
                <FaArrowLeft size={24} />
              </Link>
            </button>
            <h1 className="hidden text-2xl font-light text-gray-300 md:flex">
              Sorting Visulizer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <SortingSelect
                options={algorithmOptions}
                defaultValue={selectedAlgorithm}
                onChange={handleSelectChange}
                isDisabled={isSorting}
              />
              <button
                className="flex items-center justify-center"
                onClick={handlePlay}
              >
                {requiresReset ? (
                  <RxReset className="h-8 w-8 text-gray-400" />
                ) : (
                  <FaPlayCircle className="h-8 w-8 text-system-green60" />
                )}
              </button>
            </div>

            <div className="absolute left-0 top-[120%] hidden w-full sm:flex">
              <div className="flex w-full gap-6 rounded border border-system-purple20 bg-system-purple80 bg-opacity-10 p-4 text-gray-400">
                <div className="flex w-3/4 flex-col items-start justify-start">
                  <h3 className="text-lg">
                    {sortingAlgorithmsData[selectedAlgorithm].title}
                  </h3>
                  <p className="text-grey-500 pt-2 text-sm">
                    {sortingAlgorithmsData[selectedAlgorithm].description}
                  </p>
                </div>

                <div className="flex w-1/4 flex-col items-start justify-start gap-2">
                  <h3 className="text-lg">Time Complexity</h3>
                  <div className="flex flex-col gap-2">
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Worst Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].worstCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Average Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].averageCase}
                      </span>
                    </p>
                    <p className="flex w-full text-sm text-gray-500">
                      <span className="w-28">Best Case:</span>
                      <span>
                        {sortingAlgorithmsData[selectedAlgorithm].bestCase}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] left-0 right-0 mx-auto flex w-full items-end justify-center">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line default-line-color relative mx-0.5 w-1 rounded-lg opacity-70 shadow-lg"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
