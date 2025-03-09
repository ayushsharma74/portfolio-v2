import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

import * as motion from "motion/react-client"
export default function Projects() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <motion.main initial={{ filter: "blur(15px)", y:20, opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1, y:0 }} transition={transition}>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <div key={project.title} className="w-full md:w-1/2">
            <ProjectCard project={project}  />
          </div>
        ))}
      </div>
    </motion.main>
  );
}