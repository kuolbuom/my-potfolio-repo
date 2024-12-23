"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "A robust Full-Stack Web Application designed to streamline user interactions and provide seamless functionality across the platform. The project features a secure authentication system, dynamic data management, and an interactive user interface powered by React on the frontend and a scalable backend built with Node.js and Express.js, paired with the Neon serverless database and Drizzle ORM for efficient data handling.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "A feature-rich Full-Stack Web Application crafted using Next.js for its powerful server-side rendering (SSR) and API routes, Tailwind CSS for responsive and modern styling, and Node.js for backend scalability. This project seamlessly integrates the frontend and backend, delivering an efficient, secure, and aesthetically pleasing user experience.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/project2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A modern and dynamic frontend application built using React, designed to provide users with an intuitive and seamless experience. The interface is styled with ShadCN UI components, ensuring a responsive, visually appealing design across devices. The application implements route protection and authentication to create a secure and user-friendly environment.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/projectImage.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]); // Default to the first project

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex; // Get the active slide index
    setProject(projects[currentIndex]); // Update the project based on the index
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          {/* Project details */}
          <div className="w-full md:w-[500px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/28"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Swiper for slides */}
          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange} // Hook into slide change
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="icon-class"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
