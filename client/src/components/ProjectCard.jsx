import React from "react";
import ProjectTechnologies from "./ProjectTechnologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <section className="rounded-2xl border-dark dark:border-light border-3">
      <img
        src={props.image}
        alt="project-image"
        className="object-fill w-full shadow-md h-44 sm:h-48 md:h-52 xl:h-48 3xl:h-52 rounded-xl"
      />
      <div className="px-4 pt-5 pb-6 sm:p-5 lg:p-6 lg:pb-8 xl:pt-4 xl:pb-6 xl:px-5">
        <div className="flex items-center justify-between gap-x-4 text-xl sm:text-[1.375rem] lg:text-2xl xl:text-[1.375rem] 3xl:text-2xl xl:gap-x-6">
          <h2 className="text-violet-700 dark:text-violet-600 title-shadow">
            {props.title}
          </h2>
          <div className="flex items-center gap-x-3 sm:gap-x-4">
            {!props.isPrivate && (
              <a href={props.repo} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="hover:opacity-80" />
              </a>
            )}
            <a href={props.website} target="_blank">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>
        <p className="pt-3 pb-5 text-sm font-semibold sm:pt-4 sm:pb-6 dark:font-normal font-abeezee sm:text-[15px] 3xl:text-[17px] sm:leading-6 3xl:leading-7 lg:pt-4 lg:pb-6">
          {props.summary}
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {props.techUsed.map((tech, index) => (
            <ProjectTechnologies
              key={index}
              SvgComponent={tech.SvgComponent}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
