import React from "react";
import ProjectCard from "./ProjectCard";
import MarkdownProjectImage from "../assets/markdown-notes-project.png";
import MemeProjectImage from "../assets/meme-generator-project.png";
import MusicSchoolProjectImage from "../assets/music-school-project.png";
import {
  ReactSvg,
  CSS3Svg,
  ViteSvg,
  FirebaseSvg,
  TailwindCssSvg,
  NextSvg,
  AceternityUISvg,
  VercelSvg,
} from "./SvgLogos";

const Projects = () => {
  const projectData = [
    {
      title: "Markdown Notes",
      image: MarkdownProjectImage,
      isPrivate: false,
      links: {
        repo: "https://github.com/architkakkar/MarkdownNotes-App",
        website: "https://architkakkar-markdownnotes-app.netlify.app/",
      },
      summary:
        "The Markdown Notes App is a modern, user-friendly application designed for creating and managing markdown notes. Built with React, it leverages the power of Vite for a fast and efficient development experience, and Firebase for seamless database services.",
      technology: [
        { name: "ReactJS", SvgComponent: ReactSvg },
        { name: "CSS3", SvgComponent: CSS3Svg },
        { name: "Vite", SvgComponent: ViteSvg },
        { name: "Firebase", SvgComponent: FirebaseSvg },
      ],
    },
    {
      title: "Music School",
      image: MusicSchoolProjectImage,
      isPrivate: false,
      links: {
        repo: "https://github.com/architkakkar/Music-School-App",
        website: "https://architkakkar-music-school-app.vercel.app/",
      },
      summary:
        "This project is a comprehensive educational platform designed to facilitate music learning for individuals of all ages and skill levels. It aims to bridge the gap between students and educators. This project primarily focuses on enhancing the user interface, thereby improving my expertise in NextJS and Aceternity UI",
      technology: [
        { name: "NextJS", SvgComponent: NextSvg },
        { name: "TailwindCSS", SvgComponent: TailwindCssSvg },
        { name: "Aceternity UI", SvgComponent: AceternityUISvg },
        { name: "Vercel", SvgComponent: VercelSvg },
      ],
    },
    {
      title: "Meme Generator",
      image: MemeProjectImage,
      isPrivate: false,
      links: {
        repo: "https://github.com/architkakkar/MemeGenerator-App",
        website: "https://architkakkar-memegenerator-app.netlify.app/",
      },
      summary:
        "This project is a fun and interactive meme generator, built using ReactJS and TailwindCSS. It was crafted as part of a React course from Scrimba, aiming to demonstrate the capabilities of these technologies in creating dynamic and visually appealing web applications.",
      technology: [
        { name: "ReactJS", SvgComponent: ReactSvg },
        { name: "TailwindCSS", SvgComponent: TailwindCssSvg },
        { name: "Vite", SvgComponent: ViteSvg },
      ],
    },
    // TODO: Add more new projects.
  ];

  return (
    <main className="grid grid-cols-1 gap-6 my-10 xl:grid-cols-3 xs:grid-cols-2 sm:gap-8 md:gap-10 lg:gap-12 lg:my-14 3xl:my-[4.5rem] xl:gap-10">
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
