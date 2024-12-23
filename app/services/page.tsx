'use client'
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicess = [
  {
    num: '01',
    title: 'Frontend Development',
    description: 'Proficiency in HTML, CSS, JavaScript, React, and ShadCN UI. ',
    href: ''
  },
  {
    num: '02',
    title: 'Backend Basics ',
    description: 'Experience with databases (e.g., Neon Database) and ORMs like Drizzle. ',
    href: ''
  },
  {
    num: '03',
    title: 'Authentication',
    description: 'Implementation of secure routing, RequireAuth, and familiarity with Web3Auth.',
    href: ''
  },
  {
    num: '04',
    title: 'Web Developer (Team & Client Collaboration (like at Opengates))',
    description: 'Collaborated with cross-functional teams to develop and deliver web solutions tailored to client requirements. Communicated directly with clients to gather feedback and refine project outcomes. Ensured timely delivery of high-quality, responsive web applications. Worked on integrating modern tools and technologies to enhance user experiences. ',
    href: ''
  }
]

const services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 md:py-0 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay:2.4, duration:0.4, ease: 'easeIn'},
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {servicess.map((service,index) => {
            return(
              <div
                key={index}
                className='flex flex-col justify-center gap-6 group'
              >
                  {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline:hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-start items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2> 
                {/* subtitle */}
                <p className='text-white/60'>{service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default services
