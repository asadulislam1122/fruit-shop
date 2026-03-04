"use client";
import React from "react";
import { Apple } from "lucide-react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center gap-3 cursor-pointer select-none py-2"
    >
      {/* Icon Section - Super Vibrant */}
      <motion.div
        variants={{
          rest: { scale: 1, rotate: 0 },
          hover: {
            scale: 1.15,
            rotate: [0, -15, 15, -15, 0],
            transition: { duration: 0.4 },
          },
        }}
        className="relative p-2.5 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.3)]"
      >
        {/* Neon Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-emerald-500 to-green-600 animate-pulse" />

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-50" />

        <Apple className="relative z-10 text-white w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
      </motion.div>

      {/* Text Section */}
      <div className="flex flex-col leading-none">
        <div className="flex overflow-hidden">
          {"Fruit".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                rest: { y: 0, color: "#22c55e" }, // Bright Spring Green
                hover: {
                  y: -28,
                  color: "#4ade80", // Neon Green on hover
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    delay: i * 0.04,
                  },
                },
              }}
              className="text-3xl font-black tracking-tighter drop-shadow-sm"
            >
              {letter}
            </motion.span>
          ))}

          <motion.span
            variants={{
              rest: { scale: 1, filter: "brightness(1)" },
              hover: {
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              },
            }}
            className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 ml-1.5"
          >
            Shop
          </motion.span>
        </div>

        {/* Dynamic Slogan */}
        <motion.div className="flex items-center gap-1 mt-1">
          <motion.span
            variants={{
              rest: { opacity: 0.8, x: 0 },
              hover: { opacity: 1, x: 3 },
            }}
            className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-600"
          >
            Organic
          </motion.span>
          <span className="h-1 w-1 bg-orange-400 rounded-full" />
          <motion.span
            variants={{
              rest: { opacity: 0.8 },
              hover: { color: "#f59e0b" },
            }}
            className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-600"
          >
            Fresh
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;
