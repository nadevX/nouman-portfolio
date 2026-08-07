"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export default function Education() {
return (

<section className="w-full overflow-hidden">


{/* Heading */}

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
once:true
}}

className="
text-center
max-w-3xl
mx-auto
"

>

<h2 className="
text-4xl
md:text-5xl
font-bold
gradient-text
">

Education

</h2>


<p className="
text-gray-400
mt-4
">

Academic Background

</p>


</motion.div>






{/* Timeline */}

<div className="
relative
mt-12
md:mt-16
max-w-4xl
mx-auto
">



{/* Timeline Line */}

<div

className="
absolute
left-5
md:left-6
top-0
bottom-0
w-px
bg-white/10
"

/>







{/* BS */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
relative
pl-14
md:pl-16
mb-10
md:mb-12
"

>


<div

className="
absolute
left-0
top-1
w-10
h-10
md:w-12
md:h-12
rounded-full
glass
flex
items-center
justify-center
border
border-purple-400/30
"

>

<FaGraduationCap
className="text-purple-400"
size={20}
/>


</div>





<div

className="
glass
rounded-3xl
p-5
sm:p-7
border
border-white/10
"

>


<span className="
text-sm
text-cyan-400
">

Bachelor's Degree

</span>



<h3 className="
text-xl
md:text-2xl
font-semibold
mt-2
">

BS Software Engineering

</h3>



<p className="
text-gray-400
mt-3
">

Virtual University of Pakistan

</p>



<p className="
text-gray-500
mt-2
text-sm
">

Software Engineering

</p>


</div>



</motion.div>







{/* MS */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:.15
}}

className="
relative
pl-14
md:pl-16
"

>


<div

className="
absolute
left-0
top-1
w-10
h-10
md:w-12
md:h-12
rounded-full
glass
flex
items-center
justify-center
border
border-cyan-400/30
"

>


<FaUniversity
className="text-cyan-400"
size={20}
/>


</div>






<div

className="
glass
rounded-3xl
p-5
sm:p-7
border
border-white/10
"

>


<span className="
text-sm
text-cyan-400
">

Master's Degree

</span>




<h3 className="
text-xl
md:text-2xl
font-semibold
mt-2
">

MS Artificial Intelligence

</h3>




<p className="
text-gray-400
mt-3
">

Air University, Islamabad

</p>




<p className="
text-gray-500
mt-2
text-sm
leading-6
">

Currently Pursuing • Artificial Intelligence • Machine Learning • Deep Learning

</p>



</div>




</motion.div>





</div>



</section>


);

}