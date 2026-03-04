"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// পপুলার এবং স্ট্যাবল আইকনগুলো ইম্পোর্ট করা হলো
import {
  SiGoogle,
  SiAmazon,
  SiNetflix,
  SiSlack,
  SiSpotify,
  SiAirbnb,
  SiUber,
  SiTesla,
  SiMicrosoft,
  SiApple,
  SiFramer,
  SiNike,
  SiAdidas,
  SiHonda,
  SiToyota,
} from "react-icons/si";

const MarqueeSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // ১৫টি আইকন লিস্ট
  const companies = [
    { icon: <SiGoogle />, name: "Google" },
    { icon: <SiNetflix />, name: "Netflix" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiSpotify />, name: "Spotify" },
    { icon: <SiAirbnb />, name: "Airbnb" },
    { icon: <SiUber />, name: "Uber" },
    { icon: <SiTesla />, name: "Tesla" },

    { icon: <SiApple />, name: "Apple" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <SiNike />, name: "Nike" },
    { icon: <SiAdidas />, name: "Adidas" },
    { icon: <SiHonda />, name: "Honda" },
    { icon: <SiToyota />, name: "Toyota" },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h2 className="text-[15px] font-bold tracking-[0.4em] text-slate-400 uppercase border-b border-slate-100 pb-4 inline-block">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex flex-nowrap gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-15%"] }}
          transition={{
            duration: 15, // গতি একটু কমিয়ে দেওয়া হয়েছে যেন দেখতে ভালো লাগে
            ease: "linear",
            repeat: Infinity,
            paused: isHovered,
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-5 group cursor-pointer"
            >
              <div className="text-5xl text-slate-300 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500 ease-out">
                {company.icon}
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4 py-1">
                <span className="text-lg font-black text-slate-900 uppercase leading-none tracking-tighter">
                  {company.name}
                </span>
                <span className="text-[14px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">
                  Global Partner
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* সাইড ফেড এফেক্ট */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10" />
      </div>
    </section>
  );
};

export default MarqueeSection;
