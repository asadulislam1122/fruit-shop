"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <section className="relative min-h-[600px] flex items-center bg-[#f8f8f8] px-8 py-20 rounded-[40px] m-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Product Image Composition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          className="relative flex justify-center items-end"
        >
          {/* Main Product Image from your upload */}
          <img
            src="https://i.ibb.co.com/RWtDJBV/pexels-alxs-3025236.jpg"
            alt="Celebrate Health Products"
            className="w-full h-auto z-10 rounded-3xl"
          />

          {/* Decorative Background Blob */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-start text-left space-y-6"
        >
          <motion.div variants={itemVariants} className="relative">
            <span className="bg-[#ff0080] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Now
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-emerald-600 leading-tight">
              AVAILABLE
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-md italic font-light"
          >
            Treat yourself to dishes made up of exotic vegetables and cherish
            the eccentric taste of these veggies
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-gradient-to-r from-purple-500 via-purple-500 to-purple-800  transition-colors duration-300 shadow-xl active:scale-95">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
