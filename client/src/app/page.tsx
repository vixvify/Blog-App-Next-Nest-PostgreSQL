"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { blog } from "../../types/blog.type";

export default function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/data/getData`
      );
      setData(res.data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
  } else {
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl text-center text-white font-bold">
          Blog App - By Next.js And Nest.js
        </h1>
        <div className="flex flex-col  justify-center items-center gap-10 mt-20">
          {data.map((e: blog) => {
            return (
              <div className="flex flex-col w-[50%] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
                <h1 className="text-2xl font-bold text-white">{e.title}</h1>
                <p className="text-white">{e.content}</p>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <h2 className="font-bold text-white">Author</h2>
                  <p className="text-white">vixvify</p>
                  <h2 className="font-bold ml-5 text-white">Date</h2>
                  <p className="text-white">11/19/2025</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
