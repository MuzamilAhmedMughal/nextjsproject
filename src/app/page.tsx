"use client";
import Slider from "./(componants)/Slider";
import Footer from "./(componants)/Footer";
import Main from "./(componants)/Main";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  const [data, setdata] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const check = () => {
    setShow(!show);
  };
  const check3 = () => {
    setShow(false);
  };

  const fetchApi = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setdata(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} check3={check3} />
      ) : (
        <div className="flex justify-center items-center w-screen h-screen">
          {error ? (
            <div>Error: {error}</div>
          ) : (
            <FontAwesomeIcon
              className="animate-spin text-9xl text-black"
              icon={faGear}
            />
          )}
        </div>
      )}
      {show && <Slider data={data} check={check} />}
      {data && <Footer check={check} data={data} />}
    </>
  );
}
