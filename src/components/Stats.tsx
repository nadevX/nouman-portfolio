"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "AI / ML Projects",
  },
  {
    number: "5+",
    label: "Computer Vision Systems",
  },
  {
    number: "3",
    label: "Research Areas",
  },
  {
    number: "MS AI",
    label: "Currently Pursuing",
  },
];

export default function Stats() {
  return (
    <section className="px-6 py-16">

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
        "
      >

        {stats.map((item,index)=>(
          <motion.div
            key={item.label}
            initial={{
              opacity:0,
              y:40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:false
            }}
            transition={{
              delay:index*0.1
            }}
            className="
              glass
              rounded-3xl
              p-6
              text-center
              border
              border-white/10
            "
          >

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                gradient-text
              "
            >
              {item.number}
            </h3>


            <p
              className="
                mt-3
                text-gray-400
                text-sm
              "
            >
              {item.label}
            </p>


          </motion.div>
        ))}

      </div>

    </section>
  );
}