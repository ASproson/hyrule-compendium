import React from "react";
import { MdOutlinePlayArrow } from "react-icons/md";


const Carousel = ({handleClickBackward, handleClickForward}) => {
  return (
    <div>
      <div className="absolute md:w-[800px] flex justify-between">
        <div className="">
          <button onClick={handleClickBackward}>
            <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 rotate-180 transition hover:scale-125 ease-in-out animate-pulse" />
          </button>
        </div>

        <div className="">
          <button onClick={handleClickForward}>
            <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 transition hover:scale-125 ease-in-out animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
