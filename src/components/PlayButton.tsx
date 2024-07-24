import { MouseEventHandler } from "react";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

type PlayButtonProps = {
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  isGraphVisualized: boolean;
};

const PlayButton = ({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: PlayButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className="rounded-full border-none bg-green-500 p-2.5 shadow-md ease-in hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30 active:ring-green-300 disabled:pointer-events-none disabled:opacity-50"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="h-5 w-5" />
      ) : (
        <BsFillPlayBtnFill className="h-5 w-5" />
      )}
    </button>
  );
};

export default PlayButton;
