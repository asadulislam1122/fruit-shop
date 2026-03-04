"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const SLIDE_DATA = [
  {
    id: 1,
    title: "FRESH GARDEN FRUITS",
    subtitle:
      "Premium organic grapes and citrus hand-picked from the best gardens for your healthy lifestyle.",
    image:
      "https://i.ibb.co.com/tpbtYWmn/front-view-fresh-black-grapes-with-orange-light-background-mellow-photo-ripe-fruits-vitamine-tree.jpg",
    accent: "text-emerald-900",
    buttonBg: "bg-emerald-600",
    overlay: "from-white/90 via-white/40 to-transparent",
  },
  {
    id: 2,
    title: "VIBRANT HEALTHY LIFE",
    subtitle:
      "Fuel your body with antioxidant-rich berries and seasonal favorites delivered fresh to your door.",
    image:
      "https://i.ibb.co.com/yBYk7544/strawberries-cherries-mini-buckets-with-orange-lime-side-view-brick-stone-blue-background.jpg",
    accent: "text-rose-950",
    buttonBg: "bg-rose-600",
    overlay: "from-rose-50/90 via-white/20 to-transparent",
  },
  {
    id: 3,
    title: "NATURAL ENERGY BOOST",
    subtitle:
      "Keep your energy high with our sun-ripened tropical selection. A perfect blend of vitamins and natural sweetness.",
    image:
      "https://i.ibb.co.com/NgQrQ9T3/generative-ai-illustration-of-smoothies-and-juices-made-from-a-variety-of-fresh-fruits-from-the-trop.jpg",
    accent: "text-orange-900",
    buttonBg: "bg-orange-500",
    overlay: "from-orange-50/90 via-white/30 to-transparent",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? SLIDE_DATA.length - 1 : prev - 1));

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full w-full"
        >
          {/* Background Full Image */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDE_DATA[current].image})` }}
          />

          {/* Soft Overlay for text readability */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${SLIDE_DATA[current].overlay}`}
          />

          {/* Content */}
          <div className="container mx-auto h-full flex items-center px-8 md:px-16 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1
                  className={`text-5xl md:text-7xl font-serif font-black mb-6 leading-tight ${SLIDE_DATA[current].accent}`}
                >
                  {SLIDE_DATA[current].title}
                </h1>
                <p className="text-lg md:text-2xl text-slate-800 mb-10 font-medium leading-relaxed max-w-lg">
                  {SLIDE_DATA[current].subtitle}
                </p>

                <div className="flex gap-4">
                  <button
                    className={`${SLIDE_DATA[current].buttonBg} text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:brightness-110 transition-all flex items-center gap-2 active:scale-95`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    ORDER NOW
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Arrows */}
      <div className="absolute bottom-12 right-16 flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="p-4 bg-white/20 backdrop-blur-md border border-white/50 rounded-full hover:bg-white transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 bg-white/20 backdrop-blur-md border border-white/50 rounded-full hover:bg-white transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDE_DATA.map((_, index) => (
          <div
            key={index}
            className={`h-2 transition-all duration-500 rounded-full ${index === current ? "w-8 bg-black" : "w-2 bg-black/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
