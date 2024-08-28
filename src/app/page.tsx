"use client";
import Slider from "./(componants)/Slider";
import Footer from "./(componants)/Footer";
import Main from "./(componants)/Main";
import { useEffect, useState } from "react";
import as from "../../hello";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  const [data, setdata] = useState();
  const [show, setShow] = useState(false);
  const check = () => {
    setShow(!show);
  };
  const check2 = () => {
    setShow(!show);
  };
  const check3 = () => {
    setShow(false);
  };

  useEffect(() => {
    async function fetchApi() {
      const API_KEY = as;

      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setdata(data);
      } catch (error: any) {
        console.error(error.message);
      }
    }
    fetchApi();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} check3={check3} />
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          <FontAwesomeIcon
            className="animate-spin text-9xl text-black"
            icon={faGear}
          />
        </div>
      )}
      {show && <Slider data={data} check2={check2} />}
      {data && <Footer check={check} data={data} />}
    </>
  );
}
