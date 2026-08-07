"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {

  const [pos, setPos] = useState({
    x: -100,
    y: -100,
  });


  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };


    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);



  return (
    <motion.div

      animate={{
        x: pos.x - 8,
        y: pos.y - 8,
      }}

      transition={{
        duration: 0.15,
        ease: "linear",
      }}

      className="
        hidden
        md:block
        fixed
        top-0
        left-0
        w-4
        h-4
        rounded-full
        bg-cyan-400/70
        shadow-[0_0_20px_rgba(34,211,238,0.8)]
        pointer-events-none
        z-[999]
      "

    />
  );
}