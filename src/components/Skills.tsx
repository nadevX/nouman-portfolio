"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (

    <section>

      <motion.h2

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
        text-3xl
        sm:text-4xl
        font-bold
        text-center
        gradient-text
        "

      >
        Skills

      </motion.h2>



      <div className="
      mt-12
      md:mt-16
      space-y-10
      ">


        {
          skillCategories.map((category)=>(

            <div key={category.title}>


              <motion.h3

                initial={{
                  opacity:0,
                  x:-30
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                className="
                text-xl
                sm:text-2xl
                font-semibold
                mb-5
                text-cyan-400
                "

              >

                {category.title}

              </motion.h3>





              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-5
                md:gap-6
                "
              >


                {
                  category.skills.map((skill)=>{

                    const Icon = skill.icon;


                    return (

                      <motion.div

                        key={skill.name}


                        whileHover={{
                          y:-8,
                          scale:1.04
                        }}


                        transition={{
                          duration:0.2
                        }}


                        className="
                        glass
                        rounded-3xl
                        p-5
                        md:p-6
                        text-center
                        "

                      >


                        <Icon

                          size={40}

                          color={skill.color}

                          className="
                          mx-auto
                          "

                        />



                        <h4
                          className="
                          mt-4
                          font-semibold
                          text-sm
                          sm:text-base
                          "
                        >

                          {skill.name}

                        </h4>


                      </motion.div>

                    );

                  })
                }


              </div>


            </div>

          ))
        }


      </div>


    </section>

  );
}