import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiOpencv,
  SiPytorch,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiAnaconda,
  SiKaggle,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  {
    title: "Programming",
    skills: [
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396",
      },
      {
        name: "C++",
        icon: FaPython,
        color: "#00599C",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
    ],
  },

  {
    title: "Artificial Intelligence",
    skills: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "#FF6F00",
      },
      {
        name: "Keras",
        icon: SiKeras,
        color: "#D00000",
      },
      {
        name: "PyTorch",
        icon: SiPytorch,
        color: "#EE4C2C",
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
        color: "#F7931E",
      },
      {
        name: "OpenCV",
        icon: SiOpencv,
        color: "#5C3EE8",
      },
    ],
  },

  {
    title: "Data Science",
    skills: [
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "#4D77CF",
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "#150458",
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "Jupyter Notebook",
        icon: SiJupyter,
        color: "#F37626",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Google Colab",
        icon: SiGooglecolab,
        color: "#F9AB00",
      },
      {
        name: "Anaconda",
        icon: SiAnaconda,
        color: "#44A833",
      },
      {
        name: "Kaggle",
        icon: SiKaggle,
        color: "#20BEFF",
      },
    ],
  },
];