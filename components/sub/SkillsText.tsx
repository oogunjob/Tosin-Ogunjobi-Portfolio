"use client";

import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";

const SkillsText = ({ title }: { title: String}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[12px] border border-[#7042f88b] opacity-90">
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-4xl text-white font-bold mt-[10px] text-center mb-[15px]">
        {title}
      </motion.div>
    </div>
  );
};

export default SkillsText;
