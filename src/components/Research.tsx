"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaMicroscope,
  FaSatellite,
} from "react-icons/fa";

const researchAreas = [
  {
    title: "Explainable AI",
    description:
      "Exploring explainable machine learning approaches for patient risk stratification, with a focus on understanding model predictions and improving interpretability.",
    technologies: [
      "Machine Learning",
      "SHAP",
      "LIME",
      "Explainable AI",
    ],
    icon: FaBrain,
  },

  {
    title: "Medical AI",
    description:
      "Exploring artificial intelligence and computer vision techniques for medical image analysis, classification, and intelligent healthcare applications.",
    technologies: [
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
    ],
    icon: FaMicroscope,
  },

  {
    title: "Vision Transformers",
    description:
      "Research interest in studying positional embeddings in Vision Transformers and their impact on remote sensing image classification.",
    technologies: [
      "Vision Transformers",
      "Deep Learning",
      "Remote Sensing",
    ],
    icon: FaSatellite,
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="max-w-6xl mx-auto px-6 py-28"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-cyan-400 font-medium mb-3">
          Research & Interests
        </p>

        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Research & Innovation
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
          My interests lie at the intersection of artificial
          intelligence, machine learning, computer vision, and
          explainable AI.
        </p>
      </motion.div>

      {/* Research Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {researchAreas.map((research, index) => {
          const Icon = research.icon;

          return (
            <motion.div
              key={research.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="
                group
                glass
                rounded-3xl
                p-7
                border
                border-white/10
                hover:border-purple-400/40
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                "
              >
                <Icon
                  size={25}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-7">
                {research.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {research.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {research.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-xs
                      text-gray-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}