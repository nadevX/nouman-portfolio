"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section>

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false}}
        className="text-center"
      >

        <p className="text-cyan-400">
          Professional Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Experience
        </h2>

      </motion.div>


      <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false}}
        className="
        glass
        rounded-3xl
        p-8
        mt-14
        max-w-4xl
        mx-auto
        border
        border-white/10
        "
      >

        <div className="flex gap-5">

          <FaBriefcase 
            className="text-cyan-400 mt-1"
            size={30}
          />

          <div>

            <h3 className="text-2xl font-semibold">
              AI / Machine Learning Intern
            </h3>

            <p className="text-gray-400 mt-2">
              DevelopersHub Corporation
            </p>


            <p className="text-gray-400 mt-5 leading-7">
              Worked on practical Artificial Intelligence
              projects involving machine learning,
              deep learning, computer vision and natural
              language processing applications.
            </p>


            <ul className="mt-5 text-gray-300 space-y-2">

              <li>
                • Disease Prediction System
              </li>

              <li>
                • Breast Cancer Classification
              </li>

              <li>
                • Skin Cancer Detection
              </li>

              <li>
                • Pneumonia Detection using X-Ray Images
              </li>

              <li>
                • Facial Emotion Recognition
              </li>

              <li>
                • Fake News Detection
              </li>

            </ul>

          </div>

        </div>

      </motion.div>

    </section>
  );
}