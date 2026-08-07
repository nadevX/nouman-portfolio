"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {

  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);


  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries)=>{

        entries.forEach((entry)=>{

          if(entry.isIntersecting){
            setActive(`#${entry.target.id}`);
          }

        });

      },
      {
        threshold:0.35,
      }
    );


    links.forEach((link)=>{

      const section = document.querySelector(link.href);

      if(section){
        observer.observe(section);
      }

    });


    return ()=>observer.disconnect();


  },[]);



  return (

    <motion.nav

      initial={{
        y:-100,
        opacity:0
      }}

      animate={{
        y:0,
        opacity:1
      }}

      transition={{
        duration:.6
      }}


      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      z-50
      w-[94%]
      md:w-[90%]
      max-w-6xl
      glass
      rounded-2xl
      px-5
      md:px-6
      py-3
      border
      border-white/10
      "

    >


      <div className="
      flex
      items-center
      justify-between
      ">


        {/* Logo */}

        <a
          href="#top"
          className="
          flex
          items-center
          gap-3
          "
        >

          <Image

            src="/logo.png"

            alt="Nouman Logo"

            width={42}

            height={42}

            className="
            w-[42px]
            h-[42px]
            object-contain
            rounded-xl
            drop-shadow-[0_0_20px_rgba(6,182,212,.5)]
            "

          />


          <span
            className="
            text-xl
            md:text-2xl
            font-bold
            gradient-text
            "
          >
            Nouman
          </span>


        </a>




        {/* Desktop Navigation */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-6
          "
        >

          {links.map((link)=>(

            <a

              key={link.name}

              href={link.href}

              className={`
              relative
              text-sm
              transition
              ${
                active === link.href
                ?
                "text-cyan-400"
                :
                "text-gray-300 hover:text-cyan-400"
              }
              `}

            >

              {link.name}


              {
                active === link.href && (

                  <motion.span

                    layoutId="active"

                    className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-[2px]
                    bg-cyan-400
                    rounded-full
                    "

                  />

                )
              }


            </a>

          ))}

        </div>





        {/* Mobile Button */}

        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-gray-300
          hover:text-cyan-400
          transition
          "

        >

          {
            open
            ?
            <FaTimes size={22}/>
            :
            <FaBars size={22}/>
          }


        </button>


      </div>





      {/* Mobile Menu */}

      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              y:-10
            }}

            animate={{
              opacity:1,
              y:0
            }}

            className="
            md:hidden
            mt-4
            border-t
            border-white/10
            pt-4
            "

          >

            <div className="
            flex
            flex-col
            gap-4
            ">


              {
                links.map((link)=>(

                  <a

                    key={link.name}

                    href={link.href}

                    onClick={()=>setOpen(false)}

                    className="
                    text-gray-300
                    hover:text-cyan-400
                    transition
                    "

                  >

                    {link.name}

                  </a>

                ))
              }


            </div>


          </motion.div>

        )
      }


    </motion.nav>

  );

}