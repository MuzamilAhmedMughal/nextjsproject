import React from "react";
import Image from "next/image";
interface mainprops {
  data: any;
  check3: () => void;
}
export default function Main(props: mainprops) {
  const { data, check3 } = props;
  let a = data.hdurl;
  console.log(a);
  return (
    <div onClick={check3} className="h-screen w-screen flex flex-col">
      <Image
        src={data.hdurl || "/01'jpg"}
        alt="img"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  );
}
