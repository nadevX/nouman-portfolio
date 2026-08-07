"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (

    <section>


      {/* Section Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        className="
        text-center
        "

      >

        <p className="
        text-cyan-400
        mb-3
        font-medium
        ">
          What I've Built
        </p>


        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          gradient-text
          "
        >
          Featured Projects
        </h2>


        <p
          className="
          text-gray-400
          max-w-2xl
          mx-auto
          mt-5
          leading-7
          text-sm
          sm:text-base
          "
        >
          A selection of my work across Artificial Intelligence,
          Machine Learning, Deep Learning, Computer Vision, and
          Natural Language Processing.
        </p>


      </motion.div>





      {/* Projects Grid */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        md:gap-8
        mt-10
        max-w-6xl
        mx-auto
        "
      >


        {
          projects.map((project,index)=>(


            <motion.div

              key={project.title}


              initial={{
                opacity:0,
                y:50
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              viewport={{
                once:true
              }}


              transition={{
                duration:0.5,
                delay:index*0.08
              }}


              whileHover={{
                y:-8
              }}


              className="
              group
              relative
              overflow-hidden
              glass
              rounded-3xl
              p-5
              sm:p-8
              border
              border-white/10
              hover:border-cyan-400/40
              transition-all
              duration-300
              ">





              {/* Glow */}

              <div

                className="
                absolute
                -top-24
                -right-24
                w-40
                h-40
                bg-purple-600/20
                blur-3xl
                rounded-full
                group-hover:bg-cyan-400/20
                transition
                pointer-events-none
                "

              />





              {/* Number + Category */}

              <div
                className="
                relative
                flex
                items-center
                justify-between
                gap-3
                "
              >

                <span
                  className="
                  text-sm
                  text-cyan-400
                  font-mono
                  "
                >
                  {String(index+1).padStart(2,"0")}
                </span>



                <span
                  className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-white/5
                  text-gray-400
                  border
                  border-white/10
                  "
                >
                  {project.category}
                </span>


              </div>





              {/* Title */}

              <h3

                className="
                relative
                text-xl
                sm:text-2xl
                font-semibold
                mt-6
                group-hover:text-cyan-300
                transition
                "

              >

                {project.title}

              </h3>





              {/* Description */}

              <p

                className="
                relative
                text-gray-400
                mt-4
                leading-7
                text-sm
                sm:text-base
                "

              >

                {project.description}

              </p>





              {/* Technologies */}

              <div

                className="
                relative
                flex
                flex-wrap
                gap-2
                mt-6
                "

              >

                {
                  project.technologies.map((tech)=>(

                    <span

                      key={tech}

                      className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-xs
                      sm:text-sm
                      text-gray-300
                      "

                    >

                      {tech}

                    </span>

                  ))
                }


              </div>





              {/* Github */}

              <div className="relative mt-7">


                <a

                  href={project.github}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-white/10
                  text-gray-300
                  hover:text-white
                  hover:border-cyan-400/50
                  hover:bg-cyan-400/10
                  transition
                  text-sm
                  "

                >

                  <FaGithub size={18}/>

                  View on GitHub

                </a>


              </div>



            </motion.div>


          ))
        }


      </div>


    </section>

  );
}