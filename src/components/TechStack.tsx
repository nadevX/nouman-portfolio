"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "OpenCV",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Computer Vision",
  "Deep Learning",
  "Machine Learning",
  "Generative AI",
];


export default function TechStack(){

return (

<section className="py-12 overflow-hidden">

<div
className="
text-center
mb-8
"
>

<h2
className="
text-3xl
font-bold
gradient-text
"
>
Technology Stack
</h2>

</div>


<div
className="
relative
flex
overflow-hidden
"
>


<motion.div

animate={{
x:["0%","-50%"]
}}

transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}

className="
flex
gap-4
whitespace-nowrap
"
>

{[...technologies,...technologies].map((tech,index)=>(

<div

key={index}

className="
px-6
py-3
rounded-full
glass
border
border-white/10
text-gray-300
"

>

{tech}

</div>

))}


</motion.div>


</div>


</section>

);

}