"use client";

import Image from "next/image";
import ayush from "@/public/ayush.jpg";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";



export default function Home() {
  return (
    <main className="">
      {/* About me Section */}
      <div className="pt-10 flex gap-10">
        <div>
          <Image
            src={ayush}
            width={280}
            height={280}
            className="rounded-2xl"
            alt="Ayush"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-5xl font-bold">Hi, i&apos;m ayush👋</h1>
          <p className="">
            I am a third year CS student, i love building apps and websites{" "}
          </p>
          <p className="">
            I am very active on{" "}
            <Link
              href={"https://x.com/ayushon_twt"}
              target="_blank"
              className="font-bold"
            >
              x/twitter
            </Link>{" "}
            where i share my learning journey have fun.{" "}
          </p>
        </div>
      </div>
      <h1 className="text-3xl font-bold pt-10 ">Projects</h1>
      {/* Project Card */}
      <div className="flex flex-wrap">
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[3]} />
        {/* Removed min-w-full  */}
        
      </div>
    </main>
  );
}
