import React from "react";
import ProjectCard from "./ProjectCard";
import MarkdownProjectImage from "../assets/markdown-notes-project.png";
import MemeProjectImage from "../assets/meme-generator-project.png";
import ReactLogo from "../assets/technology/react.svg";
import CSSLogo from "../assets/technology/css3.svg";
import ViteLogo from "../assets/technology/vite.svg";
import FirebaseLogo from "../assets/technology/firebase.svg";
import TailwindCSS from "../assets/technology/tailwindcss.svg";

const Projects = () => {
  const projectData = [
    {
      title: "Markdown Notes",
      image: MarkdownProjectImage,
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
    {
      title: "Meme Generator",
      image: MemeProjectImage,
      links: {
        repo: "https://github.com/architkakkar/MemeGenerator-App",
        website: "https://architkakkar-memegenerator-app.netlify.app/",
      },
      summary:
        "This project is a fun and interactive meme generator, built using ReactJS and TailwindCSS. It was crafted as part of a React course from Scrimba, aiming to demonstrate the capabilities of these technologies in creating dynamic and visually appealing web applications.",
      technology: [
        { name: "ReactJS", image: ReactLogo },
        { name: "TailwindCSS", image: TailwindCSS },
        { name: "Vite", image: ViteLogo },
      ],
    },
  ];

  return (
    <main className="flex flex-wrap gap-6 my-10">
      {projectData.map((project, index) => (
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
