import { useEffect, useState } from "react";
import { ProjectCard } from "./project-card";
import React from "react";

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

  function fetchSearch(e: any) {
    console.log(e.target.value);
    fetch(
      `https://techport.nasa.gov/api/projects/search?titleSearch=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.projects);
        setProjects(data.projects);
      });
  }

  return (
    <>
      <input
        onInput={fetchSearch}
        id="project-search"
        type="search"
        className="bg-purple border-b mb-8 text-sm focus:outline-none p-4"
        placeholder="Search.."
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-[3.563rem]  mb-[9.688rem]">
        {projects.length === 0 && (
          <div className="w-full col-end-3 col-start-1 py-4 flex items-center justify-center">
            <img src="spinner.svg" alt="Loading" />
          </div>
        )}
        {projects.length > 0 &&
          Array.from({ length: ITEMS_PER_PAGE }).map(
            (_: any, index: number) => (
              <ProjectCard id={projects[index].projectId} key={index} />
            )
          )}
      </div>
    </>
  );
}
