import { useEffect, useState } from "react";
type Props = {
  id: number;
};
const customStyles  = {
'box-shadow':
'0px 0px 20px 0px rgba(0, 0, 0, 0.05),0px 16px 30px 0px rgba(0, 0, 0, 0.05)'
}


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
    <div className="w-[36.313rem] h-[10.875rem] bg-white projects-card rounded-[1.25rem] p-5 flex flex-col gap-2 bg-white border border-gray-300 shadow-md p-4 transition-transform hover:shadow-lg hover:translate-y-[-3px] hover:border-main-purple hover:border-2 hover:cursor-pointer" >
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

