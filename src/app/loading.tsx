"use client";

import { motion } from "framer-motion";


export default function Loading(){

return (

<main
className="
min-h-screen
flex
items-center
justify-center
bg-[#030712]
"
>

<motion.div

animate={{
scale:[1,1.2,1],
opacity:[0.6,1,0.6]
}}

transition={{
duration:1.5,
repeat:Infinity
}}

className="
w-20
h-20
rounded-full
bg-gradient-to-r
from-purple-600
via-cyan-400
to-pink-500
blur-xl
"

/>

</main>

);

}