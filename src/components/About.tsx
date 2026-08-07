"use client";

import { motion } from "framer-motion";

export default function About() {
return (

<section className="w-full overflow-hidden">


{/* Heading */}

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
text-4xl
md:text-5xl
font-bold
text-center
gradient-text
"

>

About Me

</motion.h2>





<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
md:gap-8
mt-12
md:mt-16
">



{/* Left Card */}

<motion.div

initial={{
opacity:0,
x:-60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
glass
rounded-3xl
p-5
sm:p-8
border
border-white/10
"

>


<h3 className="
text-2xl
font-semibold
mb-5
">

👋 Who I Am

</h3>



<p className="
text-gray-300
leading-7
md:leading-8
">

I'm <span className="font-semibold text-white">
Malik Muhammad Nouman Amjad
</span>, a Software Engineer with a Bachelor's degree in Software Engineering and currently pursuing a Master's in Artificial Intelligence.

I have a strong interest in developing intelligent systems using Machine Learning, Deep Learning, and Computer Vision to solve real-world problems.

</p>




<p className="
text-gray-400
mt-6
leading-7
md:leading-8
">

My experience includes building AI applications for medical image analysis, explainable machine learning, image classification, and natural language processing.

I enjoy transforming research ideas into practical software using Python and modern AI frameworks.

</p>




<p className="
text-gray-400
mt-6
leading-7
md:leading-8
">

My goal is to become an AI Engineer who designs reliable, scalable, and impactful intelligent systems across healthcare, automation, and data-driven applications.

</p>



</motion.div>







{/* Right Card */}

<motion.div

initial={{
opacity:0,
x:60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

className="
glass
rounded-3xl
p-5
sm:p-8
border
border-white/10
"

>


<h3 className="
text-2xl
font-semibold
mb-5
">

🚀 Quick Facts

</h3>




<div className="
space-y-4
text-gray-300
">


<div>
🎓 BS Software Engineering
</div>


<div>
🎓 MS Artificial Intelligence (In Progress)
</div>


<div>
🤖 Artificial Intelligence
</div>


<div>
🧠 Deep Learning
</div>


<div>
👁️ Computer Vision
</div>


<div>
🐍 Python Developer
</div>


<div>
💻 Machine Learning
</div>


<div>
📍 Pakistan
</div>



</div>



</motion.div>



</div>



</section>

);

}