"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub
} from "react-icons/fa";

import {
 SiTailwindcss,
 SiNextdotjs
} from "react-icons/si";



const about = {
  title: 'About Me',
  description: '       I’m a junior web developer passionate about creating elegant digital experiences and learning through hands-on practice.',
  info: [
    { fieldName: 'Name', fieldValue: 'Kuol Buom' },
    { fieldName: 'phone', fieldValue: '(+254) 0768405456' },
    { fieldName: 'Experience', fieldValue: '4+ Years' },
    { fieldName: 'Skype', fieldValue: 'koulbuom' },
    { fieldName: 'Nationality', fieldValue: 'South Sudanese' },
    { fieldName: 'Email', fieldValue: 'kuolbuom111@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Language', fieldValue: 'English, Arabic, Nuer' }
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Crafting elegant and user-friendly digital experiences.',
  items: [
    { company: 'Opengates', position: 'Junior Web Developer', duration: '2023 - 2024' },
    { company: 'Opengates', position: 'Front-End Developer Intern', duration: '2024 - present' },
    { company: 'Opengates', position: 'Backend Development', duration: '2024 - present' },
    { company: 'Volunteer Developer', position: 'Full Stack Developer', duration: '2023' },
    { company: 'Tech Academy', position: 'Teaching Community', duration: '2022-2024' },
    { company: 'In Progress', position: 'Portfolio Website', duration: '2024-2025' },
    { company: 'Self-Initiated Projects', position: 'Web3Auth Demo', duration: '2024' }
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Self-Learning and Online Courses',
  items: [
    { institute: 'React for Beginners', degree: 'YouTube (by Dave Gray)', duration: '2023 - 2024' },
    { institute: 'Modern JavaScript', degree: 'Udemy by Simon Boa', duration: '2022 - 2023' },
    { institute: 'Online Course', degree: 'Programming Course', duration: '2023-2024' },
    { institute: 'High School', degree: 'Sudan Certificate', duration: '2019-2020' },
    { institute: 'Front-End Development Center', degree: 'Sir', duration: '2024' }
  ]
};

const skills = {
  title: 'My Skills',
  description: 'Proficient in building dynamic and responsive web applications using React.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' }
  ]
};

const resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: 'easeIn' } }} className="min-h-[80vh] flex items-center justify-center py-12 md:py-0">
      <div className="container max-auto">
        <Tabs defaultValue="experience" className="flex flex-col md:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto md:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[170vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] px-4">
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] px-4">
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      )
                    })}
                   </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
             <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{skills.description}</p>
                   <ul className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 md:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                   return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize bg-white text-black px-4 py-2">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                   </li>
                    })}
                   </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full text-center md:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-between md:justify-start gap-4">
                         <span className="text-white/60">{item.fieldName}</span>
                         <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
