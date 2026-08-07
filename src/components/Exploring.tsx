"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const topics=[
"Vision Transformers",
"Explainable AI",
"Generative AI",
"Medical AI",
"Large Language Models",
"Remote Sensing"
];


export default function Exploring(){

return(

<section className="px-6 py-20">


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
once:false
}}

className="
max-w-5xl
mx-auto
text-center
"

>


<h2
className="
text-4xl
font-bold
gradient-text
"
>
Currently Exploring
</h2>


<p
className="
text-gray-400
mt-5
"
>
Areas I am actively learning and researching.
</p>



<div
className="
mt-10
grid
md:grid-cols-3
gap-5
"
>


{topics.map((topic,index)=>(

<motion.div

whileHover={{
y:-8
}}

key={topic}

className="
glass
rounded-2xl
p-5
border
border-white/10
flex
items-center
gap-3
text-gray-300
"

>

<FaArrowRight
className="text-cyan-400"
/>

{topic}


</motion.div>

))}


</div>


</motion.div>


</section>

);

}