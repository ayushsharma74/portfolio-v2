// "use client";

import Image from "next/image";
import ayush from "@/public/ayush.jpg";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinks } from "@/lib/constants";
import { Experience, experience } from "@/data/experience";

export default function Home() {
  return (
    <main className="">
      {/* About me Section */}
      <div className="pt-10 flex gap-10 sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <Image
            src={ayush}
            width={350}
            height={350}
            className="rounded-2xl"
            alt="Ayush"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            Hi, i&apos;m ayush 👋
          </h1>

          <p className="">
            I am a third year CS student who loves building apps and websites
            that are useful.{" "}
          </p>
          <p className="">
            I am very active on{" "}
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              x/twitter
            </Link>{" "}
            where i share my learning journey and make new friends.{" "}
          </p>
          <div className="flex gap-3 ">
            <Link
              href={SocialLinks.github}
              target="_blank"
              className="flex items-center"
            >
              <FaGithub size={27} className="hover:scale-125 transition-all" />
            </Link>
            <Link
              href={SocialLinks.linkedin}
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.instagram}
              target="_blank"
              className="flex items-center"
            >
              <FaInstagram
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="flex items-center"
            >
              <FaXTwitter
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.discord}
              target="_blank"
              className="flex items-center"
            >
              <FaDiscord size={27} className="hover:scale-125 transition-all" />
            </Link>
          </div>
          <div className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-2 font-bold border w-fit border-green-800">
            open for work
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold pt-10 ">Work experience</h1>
      <div>
        {/* Experience section */}
        {experience.map((exp: Experience) => (
        <Link href={exp.link} key={exp.company} className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all">
          <div className="flex gap-3 items-center">

          <Image src={exp.logo} width={45} height={45} alt="EdSlash" className="rounded-full" />
          <h2 className="font-bold underline hover:no-underline text-lg">{exp.company}</h2>
          </div>
          <h3>{exp.info}</h3>
        </Link>
          
        ))}
      </div>
      <h1 className="text-3xl font-bold pt-10 ">Projects</h1>
      {/* Projects section */}
      <div className="flex flex-wrap">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            project={project}
            className=" md:w-1/2 sm:w-1/2 w-full"
            key={project.title}
          />
        ))}
        <div className="w-full flex justify-center p-4">
          <Link
            href={"/projects"}
            className="font-bold underline hover:no-underline text-lg"
          >
            Show more
          </Link>
        </div>
      </div>
        
    </main>
  );
}
