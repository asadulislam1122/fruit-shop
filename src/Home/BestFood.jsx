"use client";
import React from "react";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, HeartPulse, Sprout } from "lucide-react";

const BestFood = () => {
  const leftFeatures = [
    {
      title: "ALWAYS FRESH",
      desc: "Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et.",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
    },
    {
      title: "SUPER HEALTHY",
      desc: "Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et.",
      icon: <HeartPulse className="w-8 h-8 text-green-500" />,
    },
  ];

  const rightFeatures = [
    {
      title: "PREMIUM QUALITY",
      desc: "Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et.",
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    },
    {
      title: "100% NATURAL",
      desc: "Maximus, purus quis tincidunt semper, felis tellus mole stie nulla, in finibus erat magna et.",
      icon: <Sprout className="w-8 h-8 text-green-500" />,
    },
  ];

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="md:text-5xl text-3xl font-bold text-emerald-600 mb-4 font-stretch-ultra-condensed">
          We Grow <span className="text-orange-400">Best Food</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Features */}
        <motion.div
          variants={slideIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 space-y-12 text-right"
        >
          {leftFeatures.map((f, i) => (
            <div key={i} className="flex flex-row-reverse items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full">{f.icon}</div>
              <div className="pr-2">
                <h4 className="font-bold text-green-600 text-sm mb-2">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Center Image with Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/7J53gVm5/fresh-vegetables-181303-634.avif" // Replace with your basket image
            alt="Fresh Vegetables"
            className="z-10 w-full max-w-md object-contain"
          />
          {/* Green Seal / Badge */}
          <div className="absolute -bottom-10 z-20 w-32 h-32 bg-green-600 rounded-full border-4 border-white flex items-center justify-center text-white text-center p-2 shadow-xl">
            <span className="text-[10px] font-bold leading-tight">
              100% ORGANIC PREMIUM QUALITY
            </span>
          </div>
        </motion.div>

        {/* Right Side Features */}
        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 space-y-12 text-left"
        >
          {rightFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-full">{f.icon}</div>
              <div className="pl-2">
                <h4 className="font-bold text-green-600 text-sm mb-2">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestFood;
