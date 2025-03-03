import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <div key={project.title} className="w-full md:w-1/2">
            <ProjectCard project={project}  />
          </div>
        ))}
      </div>
    </main>
  );
}