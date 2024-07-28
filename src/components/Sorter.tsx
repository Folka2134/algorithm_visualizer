import { SortingAlgorithmProvider } from "../context/SortingContext";
import Chart from "./Chart";
import SortOptions from "./SortOptions";

const Sorter = () => {
  return (
    <SortingAlgorithmProvider>
      <div className="flex h-screen w-screen flex-col bg-black">
        {/* <SortOptions /> */}
        <Chart />
      </div>
    </SortingAlgorithmProvider>
  );
};

export default Sorter;
