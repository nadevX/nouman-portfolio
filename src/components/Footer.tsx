"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";


export default function Footer() {

  const scrollToTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth",
    });

  };


  return (

    <footer
      className="
      relative
      py-10
      md:py-12
      px-4
      sm:px-6
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        "
      >



        <div
          className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
          "
        >




          {/* Brand */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            items-center
            gap-4
            text-center
            sm:text-left
            "
          >


            <Image

              src="/logo.png"

              alt="Nouman Logo"

              width={50}

              height={50}

              className="
              w-[50px]
              h-[50px]
              object-contain
              rounded-xl
              drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]
              "

            />



            <div>


              <h3
                className="
                text-2xl
                font-bold
                gradient-text
                "
              >

                Nouman

              </h3>



              <p
                className="
                text-gray-500
                mt-1
                text-xs
                sm:text-sm
                max-w-xs
                "
              >

                AI Engineer • Machine Learning • Computer Vision • AI Research

              </p>


            </div>


          </div>






          {/* Social Links */}

          <div
            className="
            flex
            items-center
            gap-4
            "
          >


            <motion.a

              href="https://github.com/Nadevx"

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{
                y:-4
              }}

              aria-label="Github"

              className="
              w-11
              h-11
              rounded-full
              glass
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-white
              hover:border-cyan-400/40
              transition
              "

            >

              <FaGithub size={18}/>

            </motion.a>





            <motion.a

              href="https://pk.linkedin.com/in/maliknoumanamjad"

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{
                y:-4
              }}

              aria-label="LinkedIn"

              className="
              w-11
              h-11
              rounded-full
              glass
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-cyan-400
              hover:border-cyan-400/40
              transition
              "

            >

              <FaLinkedin size={18}/>

            </motion.a>





            <motion.a

              href="mailto:n.amjadbse@gmail.com"

              whileHover={{
                y:-4
              }}

              aria-label="Email"

              className="
              w-11
              h-11
              rounded-full
              glass
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-cyan-400
              hover:border-cyan-400/40
              transition
              "

            >

              <FaEnvelope size={18}/>

            </motion.a>


          </div>







          {/* Back To Top */}

          <motion.button

            onClick={scrollToTop}

            whileHover={{
              y:-4
            }}

            aria-label="Back to top"

            className="
            w-11
            h-11
            rounded-full
            bg-purple-600
            hover:bg-purple-700
            flex
            items-center
            justify-center
            glow
            transition
            "

          >

            <FaArrowUp size={16}/>

          </motion.button>




        </div>







        {/* Bottom */}

        <div

          className="
          border-t
          border-white/10
          mt-10
          pt-6
          text-center
          "

        >

          <p

            className="
            text-gray-600
            text-xs
            sm:text-sm
            "

          >

            © {new Date().getFullYear()} Malik Muhammad Nouman Amjad.
            All rights reserved.

          </p>


        </div>




      </div>


    </footer>

  );

}