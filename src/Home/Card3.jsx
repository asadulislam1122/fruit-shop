"use client";
import React from "react";
import { motion } from "framer-motion";

const CARDS_DATA = [
  {
    id: 1,
    title: "DISCOUNT 20%",
    subtitle: "LOW SUGAR RASPBERRY JAM",
    description: "D'Arbo from Austria made with Sorbitol.",
    image:
      "https://i.ibb.co.com/yBYk7544/strawberries-cherries-mini-buckets-with-orange-lime-side-view-brick-stone-blue-background.jpg",
    bgColor: "bg-[#E38276]",
  },
  {
    id: 2,
    title: "FRESH PEACH",
    subtitle: "100% ORGANIC JUICE",
    description:
      "When it comes to Peach, our mind remembers nature automatically.",
    image: "https://i.ibb.co.com/B57WbGT7/42295579d4fbf33376042a45ccd82c2f.jpg",
    bgColor: "bg-[#E9B04D]",
  },
  {
    id: 3,
    title: "APPLE JUICES",
    subtitle: "VITAMIN RICH DRINK",
    description: "Pure apple extract from the finest Washington orchards.",
    image:
      "https://i.ibb.co.com/cKGbPfPY/pngtree-basket-with-a-group-of-different-fruits-on-a-wooden-table-image-15738189.png",
    bgColor: "bg-[#8DBE82]",
  },
];

const FruitCards = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CARDS_DATA.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -10 }}
            className="relative h-[350px] rounded-[30px] overflow-hidden group cursor-pointer shadow-xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.image})` }}
            />

            {/* Gradient Overlay (টেক্সট স্পষ্ট করার জন্য) */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90`}
            />

            {/* কালার টিন্ট (আপনার দেওয়া bgColor অনুযায়ী হালকা আভা) */}
            <div
              className={`absolute inset-0 ${card.bgColor} opacity-20 group-hover:opacity-10 transition-opacity`}
            />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-white/90 text-xs font-bold tracking-[0.2em] mb-2 uppercase">
                  {card.subtitle}
                </h4>
                <h2 className="text-white text-3xl font-serif font-black mb-3 leading-tight">
                  {card.title}
                </h2>
                <p className="text-white/70 text-sm italic leading-relaxed max-w-[250px]">
                  {card.description}
                </p>

                {/* হোভার করলে ছোট একটি লাইন আসবে */}
                <div className="w-0 group-hover:w-16 h-1 bg-white mt-4 transition-all duration-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FruitCards;
