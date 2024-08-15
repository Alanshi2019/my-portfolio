"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaJira, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quasi.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Alan Shi"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 214-478-3212"
    },
    {
      fieldName: "Email",
      fieldValue: "alanshi.wt@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Mandarin"
    },
  ]
}

const experience = {
  icon: '/static/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nihil!",
  items: [
    {
      company: "Gro Intelligence",
      position: "Software Engineer",
      duration: "Jan. 2023 - Present"
    },
    {
      company: "Gro Intelligence",
      position: "Full Stack Engineer",
      duration: "Mar. 2020 - Jan. 2023"
    },
    {
      company: "VIP Teenagers",
      position: "Full Stack Engineer Intern",
      duration: "Nov. 2019 - Jan. 2020"
    },
    {
      company: "HUAXIN Telecommunication",
      position: "Front-end Developer",
      duration: "Apr. 2019 - Aug. 2019"
    },
  ]

}


const education = {
  icon: '/static/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nihil!",
  items: [
    {
      institution: "University of Texas at Arlington",
      degree: "Master of Science in Computer Science",
      duration: "Sep. 2018 - Dec. 2019"
    },
    {
      institution: "Southeast University",
      degree: "Bachelor of Information Technology",
      duration: "Sep. 2012 - July. 2016"
    },
  ]

}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nihil!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Taliwind"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaJira />,
      name: "Jira"
    },
    {
      icon: <FaDocker />,
      name: "Docker"
    },
  ]
}

const Resume = () => {
  return <motion.div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}>
    <div className='container mx-auto'><Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skils</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>

      <div className='min-h-[70vh] w-full'>
        <TabsContent value="experience" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h3 className='text-4xl font-bold'>{experience.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
            <ScrollArea className='h-[400px]'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {experience.items.map((item, index) => (
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                    <div className='flex items-center gap-3'>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{item.company}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>

          </div>
        </TabsContent>

        <TabsContent value="education" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
            <h3 className='text-4xl font-bold'>{education.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
            <ScrollArea className='h-[400px]'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                {education.items.map((item, index) => (
                  <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                    <div className='flex items-center gap-3'>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{item.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>

          </div>
        </TabsContent>

        <TabsContent value="skills" className="w-full h-full">
          <div className='flex flex-col gap-[30px]'>
            <div>
              <h3>{skills.title}</h3>
              <p>{skills.description}</p>
            </div>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
              {skills.skillList.map((skill, index) => (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'>{about.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
              {about.info.map((item, index) => (
                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className='text-white/60'>{item.fieldName}</span>
                  <span className='text-xl'>{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>

    </div>
  </motion.div>
}

export default Resume;