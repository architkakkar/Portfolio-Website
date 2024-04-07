import React from "react";
import ProjectCard from "./ProjectCard";
import ReactLogo from "../assets/technology/react.svg";
import CSSLogo from "../assets/technology/css3.svg";
import ViteLogo from "../assets/technology/vite.svg";
import FirebaseLogo from "../assets/technology/firebase.svg";

const Projects = () => {
  const projects = [
    {
      title: "Markdown Notes - App",
      image: "",
      links: {
        repo: "https://github.com/architkakkar/MarkdownNotes-App",
        website: "https://architkakkar-markdownnotes-app.netlify.app/",
      },
      summary:
        "The Markdown Notes App is a modern, user-friendly application designed for creating and managing markdown notes. Built with React, it leverages the power of Vite for a fast and efficient development experience, and Firebase for seamless database services.",
      technology: [
        { name: "ReactJS", image: ReactLogo },
        { name: "CSS3", image: CSSLogo },
        { name: "Vite", image: ViteLogo },
        { name: "Firebase", image: FirebaseLogo },
      ],
    },
  ];

  return (
    <main className="my-10 flex flex-wrap gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          repo={project.links.repo}
          website={project.links.website}
          summary={project.summary}
          techUsed={project.technology}
        />
      ))}
    </main>
  );
};

export default Projects;
