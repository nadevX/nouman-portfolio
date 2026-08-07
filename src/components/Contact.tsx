"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Contact() {
return (

<section className="w-full overflow-hidden">


{/* Heading */}

<motion.div

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

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

Let's Connect

</h2>


<p className="
text-gray-400
mt-5
leading-7
px-2
">

Interested in AI, Machine Learning, Computer Vision,
or building something together? Feel free to reach out.

</p>


</motion.div>





{/* Contact Card */}

<motion.div

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{delay:.15}}

className="
w-full
max-w-4xl
mx-auto
mt-12
md:mt-16
glass
rounded-3xl
p-4
sm:p-6
md:p-10
border
border-white/10
overflow-hidden
"

>


<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
">





{/* Contact Items */}

{[

{
icon:<FaEnvelope className="text-cyan-400" size={20}/>,
title:"Email",
text:"n.amjadbse@gmail.com",
link:"mailto:n.amjadbse@gmail.com"
},

{
icon:<FaMapMarkerAlt className="text-purple-400" size={20}/>,
title:"Location",
text:"Pakistan"
},

{
icon:<FaGithub className="text-gray-300" size={22}/>,
title:"GitHub",
text:"View my repositories",
link:"https://github.com/Nadevx"
},

{
icon:<FaLinkedin className="text-blue-400" size={22}/>,
title:"LinkedIn",
text:"Connect with me",
link:"https://pk.linkedin.com/in/maliknoumanamjad"
}

].map((item,index)=>{


const Card = (

<div

className="
group
flex
items-center
gap-4
p-4
sm:p-5
rounded-2xl
bg-white/5
border
border-white/10
hover:border-cyan-400/40
hover:bg-cyan-400/5
transition
min-w-0
"

>


<div

className="
w-11
h-11
shrink-0
rounded-xl
bg-white/5
flex
items-center
justify-center
"

>

{item.icon}

</div>


<div className="min-w-0">

<p className="
text-sm
text-gray-500
">

{item.title}

</p>


<p className="
text-gray-200
truncate
group-hover:text-cyan-300
transition
">

{item.text}

</p>


</div>


</div>

);


return item.link ? (

<a

key={index}

href={item.link}

target={item.link.startsWith("http") ? "_blank" : undefined}

rel="noopener noreferrer"

>

{Card}

</a>

):(


<div key={index}>

{Card}

</div>


);


})}


</div>





{/* CTA */}

<div className="
text-center
mt-10
">

<p className="
text-gray-400
mb-5
">

Have an idea or opportunity?

</p>



<a

href="mailto:n.amjadbse@gmail.com"

className="
inline-flex
items-center
gap-2
px-7
py-3
rounded-full
bg-purple-600
hover:bg-purple-700
transition
glow
"

>

<FaEnvelope/>

Send Me a Message

</a>


</div>



</motion.div>


</section>


);

}