import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
interface sliderprops {
  check: () => void;
  data: any;
}
export default function Slider(props: sliderprops) {
  const { check, data } = props;

  return (
    <>
      <div className=" sm:fixed  sm:w-4/5 md:w-96 lg:*:w-96 shadow-[-10px_0px_14px_black] z-10  bg-black inset-0  ml-auto text-white">
        <div className="h-5/6 flex flex-col justify-center py-2 gap-3">
          <h1 className=" sm:text-2xl text-2xl lg:text-3xl  capitalize font-medium px-1  ">
            {data.title}
          </h1>
          <div className=" flex flex-col  px-2 inset-0 flex-1 overflow-y-scroll custom-scrollbar">
            <p className="font-thin text-lg capitalize pb-1">{data.date}</p>
            <p className="font-light text-base lg:text-md ">
              {data.explanation}
            </p>
          </div>
        </div>
        <button onClick={check} className="w-full relative ">
          <FontAwesomeIcon
            className="absolute left-2 px-3 hover:opacity-45 fa-solid fa-arrow-right"
            icon={faArrowRight}
          />
        </button>
      </div>
    </>
  );
}
