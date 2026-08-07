"use client";

import { motion } from "framer-motion";

export default function Background() {
return (

<div
className="
fixed
inset-0
z-0
overflow-hidden
pointer-events-none
"
>


{/* Purple Glow */}

<motion.div

animate={{
x:[0,80,0],
y:[0,-60,0],
scale:[1,1.15,1],
}}

transition={{
duration:12,
repeat:Infinity,
ease:"easeInOut",
}}

className="
absolute
top-[-220px]
left-[-220px]
w-[650px]
h-[650px]
rounded-full
bg-purple-600/30
blur-[160px]
"

/>





{/* Cyan Glow */}

<motion.div

animate={{
x:[0,-80,0],
y:[0,70,0],
scale:[1,1.1,1],
}}

transition={{
duration:14,
repeat:Infinity,
ease:"easeInOut",
}}

className="
absolute
bottom-[-250px]
right-[-250px]
w-[700px]
h-[700px]
rounded-full
bg-cyan-500/25
blur-[170px]
"

/>





{/* Pink Center Glow */}

<motion.div

animate={{
scale:[1,1.2,1],
opacity:[0.15,0.3,0.15],
}}

transition={{
duration:10,
repeat:Infinity,
ease:"easeInOut",
}}

className="
absolute
top-[45%]
left-[50%]
-translate-x-1/2
-translate-y-1/2
w-[450px]
h-[450px]
rounded-full
bg-pink-500/20
blur-[150px]
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-b
from-transparent
via-[#030712]/20
to-[#030712]/80
"

/>


</div>

);

}