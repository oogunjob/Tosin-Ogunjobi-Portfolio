"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-32 w-full z-20">
      <div id="about-me" className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[12px] border border-[#7042f88b] opacity-90">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-semibold">
            Full-Stack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span className="leading-tight">
            Welcome To My {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 capitalize">
              Web Porfolio{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]">
          My name is <span className="font-bold">Tosin Ogunjobi</span>, and I am a full stack developer with a passion for creating beautiful and functional web applications and systems.
          I am a Purdue University Alumnus with a strong background in Python, C#, TypeScript, React, and C++.
          <br/><br/>

          I am also experienced in working with databases, such as MongoDB and PostgreSQL, and web services like AWS and Azure.
          I am also incorporating new ways to build projects with AI and GPT models.
          I am passionate about creating clean, efficient, and scalable code and
          always looking for new opportunities to learn and grow as a developer.

          <br/><br/>

          Current Employer: <span className="font-bold">Microsoft</span>
          <br/>
          Past Education: <span className="font-bold">Purdue University, B.S in Computer Engineering</span>
          <br/>
          Contact: <span className="font-bold"><a href="mailto:oogunjob@gmail.com">oogunjob@gmail.com</a></span>
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.linkedin.com/in/oluwatosin-ogunjobi/"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] transition-all">
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
        <Image
          src={"/mainIconsdark.svg"}
          alt="mainIcons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
