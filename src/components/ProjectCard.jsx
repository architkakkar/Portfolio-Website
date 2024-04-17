import React from "react";
import SkillTag from "./SkillTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <section className="rounded-2xl border-dark dark:border-light border-3">
      <img
        src={props.image}
        alt="project-image"
        className="object-fill w-full h-40 shadow-md rounded-xl"
      />
      <div className="p-4">
        <div className="flex items-center justify-between text-xl">
          <h2 className="text-violet-700 dark:text-violet-600">
            {props.title}
          </h2>
          <div className="flex items-center gap-x-3">
            <a href={props.repo} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={props.website} target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <p className="pt-3 pb-5 text-sm font-semibold dark:font-normal font-abeezee">
          {props.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {props.techUsed.map((tech, index) => (
            <SkillTag
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
