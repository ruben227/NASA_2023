import { useEffect, useState } from "react";
type Props = {
  id: number;
};
export function ProjectCard({ id }: Props) {
  const [project, setProject] = useState<any>({});

  useEffect(() => {
    fetch(`https://techport.nasa.gov/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data.project);
      });
  }, []);

  return (
    <div className="w-[36.313rem] h-[10.875rem] bg-white projects-card rounded-[1.25rem] p-5 flex flex-col gap-2">
      <div className="flex">
        <h3 className="font-bold text-[27px] text-ellipsis overflow-hidden whitespace-nowrap">
          {project.title}
        </h3>
        <div className="text-main-purple">
          <span> #NASA</span>
          <span> #PLANETS</span>
        </div>
      </div>
      <p>
        {project.principalInvestigators &&
          project.principalInvestigators[0].fullName}
      </p>
      <div
        className="line-clamp-2"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
    </div>
  );
}
