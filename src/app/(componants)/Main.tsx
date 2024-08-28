import React from "react";
interface mainprops {
  data: any;
  check3: () => void;
}
export default function Main(props: mainprops) {
  const { data, check3 } = props;
  return (
    <div onClick={check3} className="h-screen w-screen flex flex-col">
      <img
        className="w-full h-full object-cover text-black"
        src={data.hdurl || "01.jpg"}
        alt="img"
      />
    </div>
  );
}
