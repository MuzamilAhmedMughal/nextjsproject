import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

interface footerprops {
  check: () => void;
  data: any;
}
export default function Footer(props: footerprops) {
  const { check, data } = props;

  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full flex  justify-between items-center px-2 bg-gradient-to-t from-black to-transparent text-white  ">
        <div className="flex flex-col w-2/3 ">
          <h1 className="text-lg font-base uppercase">project</h1>
          <h2 className=" lg:text-2xl xl:text-3xl text-md font-semibold uppercase">
            {data.title}
          </h2>
        </div>
        <div className=" flex flex-col items-center px-2 text-lg">
          <button className="hover:opacity-45">
            <i onClick={check}>
              <FontAwesomeIcon className="" icon={faInfoCircle} />
            </i>
          </button>
        </div>
      </footer>
    </>
  );
}
