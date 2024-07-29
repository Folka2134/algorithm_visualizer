import { SortingAlgorithmProvider } from "../context/SortingContext";
import Chart from "./Chart";

const Sorter = () => {
  return (
    <SortingAlgorithmProvider>
      <div className="flex h-screen w-screen flex-col bg-[radial-gradient(#ffffff33_1px,#121212_1px)] bg-[size:40px_40px]">
        <Chart />
      </div>
    </SortingAlgorithmProvider>
  );
};

export default Sorter;
