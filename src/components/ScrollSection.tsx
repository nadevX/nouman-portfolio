"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
}


export default function ScrollSection({
  children,
  id,
}: ScrollSectionProps) {

  return (

    <motion.section

      id={id}


      initial={{
        opacity: 0,
        y: 70,
        scale: 0.97,
        filter: "blur(6px)",
      }}


      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}


      viewport={{
        once: false,
        amount: 0.18,
      }}


      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}


      className="
        relative
        py-16
        md:py-20
        px-6
        scroll-mt-32
      "

    >


      <div
        className="
          w-full
          max-w-7xl
          mx-auto
        "
      >

        {children}

      </div>


    </motion.section>

  );
}