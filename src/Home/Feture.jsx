"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wallet, Truck, CircleDollarSign } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "CASH ON DELIVERY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus mauris",
      icon: <Wallet className="w-8 h-8 text-green-600" />,
    },
    {
      title: "FREE SHIPPING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus mauris",
      icon: <Truck className="w-8 h-8 text-green-600" />,
    },
    {
      title: "MONEY BACK GUARANTEE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tellus mauris",
      icon: <CircleDollarSign className="w-8 h-8 text-green-600" />,
    },
  ];

  // Animation Variants (The "AOS" settings)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% visible
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start space-x-5 group"
          >
            {/* Icon Container with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-dashed border-green-500 flex items-center justify-center p-2 relative"
            >
              <div className="w-full h-full rounded-full border border-green-100 flex items-center justify-center bg-green-50 group-hover:bg-white transition-colors">
                {feature.icon}
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col pt-2">
              <h3 className="font-bold text-gray-900 text-sm tracking-widest mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
