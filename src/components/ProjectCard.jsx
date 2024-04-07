import React from "react";
import SkillTag from "./SkillTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  return (
    <section className="rounded-2xl border-dark dark:border-light border-3">
      <img
        src=""
        alt="project-image"
        className="w-full h-32 rounded-2xl dark:bg-darkglass bg-[#cccccc95]"
      />
      <div className="p-4">
        <div className="flex justify-between items-center text-xl">
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
        <p className="font-abeezee text-sm pt-3 pb-5 ">{props.summary}</p>
        <div className="flex flex-wrap gap-2">
          {props.techUsed.map((tech, index) => (
            <SkillTag key={index} image={tech.image} name={tech.name} />
          ))}
          {/* <SkillTag key={1} image={ReactLogo} name="React.js" /> */}
          {/* <SkillTag key={1} image={ReactLogo} name="React.js" /> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
