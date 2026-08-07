"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBrain } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      pt-28
      "
    >


      <div
        className="
        relative
        z-10
        max-w-5xl
        text-center
        "
      >



        {/* Badge */}

        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
          inline-flex
          items-center
          justify-center
          flex-wrap
          gap-2
          px-4
          py-2
          rounded-full
          glass
          border
          border-white/10
          text-gray-300
          text-xs
          sm:text-sm
          mb-8
          "

        >

          <FaBrain className="text-cyan-400 shrink-0"/>

          <span>
            AI Engineer • Machine Learning • Computer Vision
          </span>

        </motion.div>





        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          className="
          text-cyan-400
          text-base
          sm:text-lg
          font-medium
          "

        >

          Hello, I am

        </motion.p>





        {/* Name */}

        <motion.h1

          initial={{
            opacity:0,
            y:60
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.8
          }}

          className="
          mt-5
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-bold
          leading-tight
          "

        >

          <span className="gradient-text">

            Malik Muhammad Nouman Amjad

          </span>


        </motion.h1>





        {/* Roles */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
          mt-7
          text-xl
          sm:text-2xl
          md:text-3xl
          text-gray-300
          "

        >

          <TypeAnimation

            sequence={[
              "Software Engineer",
              2000,
              "AI / Machine Learning Engineer",
              2000,
              "Deep Learning Engineer",
              2000,
              "Computer Vision Developer",
              2000,
              "Generative AI Explorer",
              2000,
            ]}

            speed={50}

            repeat={Infinity}

          />


        </motion.div>





        {/* Description */}

        <p

          className="
          mt-8
          max-w-3xl
          mx-auto
          text-gray-400
          text-sm
          sm:text-base
          md:text-lg
          leading-7
          md:leading-8
          "

        >

          I build intelligent systems using Artificial Intelligence,
          Deep Learning, Computer Vision, and Generative AI.
          Currently pursuing MS Artificial Intelligence and exploring
          AI solutions for healthcare, automation, and real-world
          applications.

        </p>





        {/* Buttons */}

        <div

          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          "

        >


          <a

            href="#projects"

            className="
            w-full
            sm:w-auto
            px-8
            py-3
            rounded-full
            bg-purple-600
            hover:bg-purple-700
            transition
            glow
            "

          >

            View Projects

          </a>



          <a

            href="/resume.pdf"

            download

            className="
            w-full
            sm:w-auto
            px-8
            py-3
            rounded-full
            border
            border-white/20
            hover:bg-white/10
            transition
            "

          >

            Download CV

          </a>


        </div>





        {/* Social */}

        <div

          className="
          flex
          justify-center
          gap-8
          mt-12
          text-gray-400
          "

        >

          <a

            href="https://github.com/Nadevx"

            target="_blank"

            rel="noopener noreferrer"

            className="
            hover:text-white
            transition
            "

          >

            <FaGithub size={30}/>

          </a>



          <a

            href="https://pk.linkedin.com/in/maliknoumanamjad"

            target="_blank"

            rel="noopener noreferrer"

            className="
            hover:text-cyan-400
            transition
            "

          >

            <FaLinkedin size={30}/>

          </a>


        </div>


      </div>


    </section>

  );

}