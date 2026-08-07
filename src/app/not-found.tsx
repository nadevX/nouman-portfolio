"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#030712]
        text-white
        px-6
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.6,
        }}

        className="
          text-center
        "
      >

        <h1
          className="
            text-8xl
            md:text-9xl
            font-bold
            gradient-text
          "
        >
          404
        </h1>


        <h2
          className="
            mt-6
            text-3xl
            md:text-4xl
            font-semibold
          "
        >
          Page Not Found
        </h2>


        <p
          className="
            mt-4
            text-gray-400
            max-w-md
            mx-auto
          "
        >
          The page you are looking for does not exist or has been moved.
        </p>


        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            mt-8
            px-8
            py-3
            rounded-full
            bg-purple-600
            hover:bg-purple-700
            transition
            glow
          "
        >
          Return Home
        </Link>


      </motion.div>

    </main>
  );
}