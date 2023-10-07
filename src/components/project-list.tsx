import { useEffect, useState } from "react";
import { ProjectCard } from "./project-card.tsx";

const ITEMS_PER_PAGE = 4;

export function ProjectList() {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    fetch("https://techport.nasa.gov/api/projects?updatedSince=2023-09-01")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[3.563rem]  mb-[9.688rem]">
      <input id="project-search" type="search" />
      {projects.length > 0 &&
        Array.from({ length: ITEMS_PER_PAGE }).map((_: any, index: number) => (
          <ProjectCard id={projects[index].projectId} key={index} />
        ))}
    </div>
  );
}
