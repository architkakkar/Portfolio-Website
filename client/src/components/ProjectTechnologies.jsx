import React from "react";

const ProjectTechnologies = ({ name, SvgComponent }) => {
  return (
    <div className="font-abeezee italic text-xs 3xl:text-[13px] bg-dark dark:bg-light p-[2.5px] text-light dark:text-dark rounded-[0.250rem]">
      <div className="border-1.5 border-light dark:border-dark rounded-[0.150rem] flex items-center gap-x-1 p-1">
        <SvgComponent className="w-4 3xl:w-[18px]" />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default ProjectTechnologies;
