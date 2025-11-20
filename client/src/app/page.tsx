"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/data`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-5xl text-center">Blog App By Next.js And Nest.js</h1>
      <div className="flex flex-col  justify-center items-center gap-10 mt-20">
        <div className="flex flex-col w-[50%]">
          <h1 className="text-2xl font-bold">What is Next.js</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex justify-start items-center mt-5 gap-3">
            <h2 className="font-bold">Author</h2>
            <p>vixvify</p>
            <h2 className="font-bold ml-5">Date</h2>
            <p>11/19/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
