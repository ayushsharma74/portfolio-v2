import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <section className="pt-10 pl-3 pr-3 w-80 md:w-1/2 mb-3 flex flex-col gap-1">
      <div className="flex flex-col mb-6">
        <Image
          src={project.imgPath}
          width={370}
          height={370}
          className="rounded-sm"
          alt="HackToGSoC"
        />
        <div className="flex justify-between items-center">
          <h1 className="font-bold mb-3 text-xl">{project.title}</h1>
          {project.status === "online" && (
            <p className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-green-800">
              online{" "}
              <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            </p>
          )}
          {project.status === "building" && (
              
          <p className="bg-yellow-200 text-yellow-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-yellow-800">
            building{" "}
            <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse" />
          </p>
          )}
        </div>
        <div className="flex gap-2">
            {project.techs.map((tech, idx) => (

          <span className="text-xs rounded-md bg-white px-1 text-black flex" key={idx}>
            {tech}
          </span>
            ))}
          
        </div>
        <p className="text-sm mt-2">{project.description}</p>
      </div>

      <div className="flex gap-4 justify-start">
        {project.githubLink && (
          <Link href={project.githubLink}>
            <FaGithub size={20} className="hover:scale-125 transition-all" />
          </Link>
        )}
        {project.liveLink && (
          <Link href={project.liveLink}>
            <LuLink size={20} className="hover:scale-125 transition-all" />
          </Link>
        )}
      </div>
    </section>
  );
}
