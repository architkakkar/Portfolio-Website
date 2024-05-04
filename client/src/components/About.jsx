import React from "react";
import SkillTag from "./SkillTag";
import {
  HTML5Svg,
  CSS3Svg,
  JavaScriptSvg,
  GitSvg,
  BootstrapSvg,
  TailwindCssSvg,
  ReactSvg,
  ViteSvg,
  TypeScriptSvg,
  NextSvg,
  FigmaSvg,
  NodeSvg,
  ExpressSvg,
  MongoDBSvg,
  AzureSvg,
  FirebaseSvg,
} from "./SvgLogos";

const Aboutpage = () => {
  const skills = [
    {
      name: "HTML5",
      SvgComponent: HTML5Svg,
    },
    {
      name: "CSS3",
      SvgComponent: CSS3Svg,
    },
    {
      name: "JavaScript",
      SvgComponent: JavaScriptSvg,
    },
    {
      name: "Git",
      SvgComponent: GitSvg,
    },
    {
      name: "Bootstrap",
      SvgComponent: BootstrapSvg,
    },
    {
      name: "TailwindCSS",
      SvgComponent: TailwindCssSvg,
    },
    {
      name: "ReactJS",
      SvgComponent: ReactSvg,
    },
    {
      name: "Vite",
      SvgComponent: ViteSvg,
    },
    {
      name: "TypeScript",
      SvgComponent: TypeScriptSvg,
    },
    {
      name: "NextJS",
      SvgComponent: NextSvg,
    },
    {
      name: "Figma",
      SvgComponent: FigmaSvg,
    },
    {
      name: "NodeJS",
      SvgComponent: NodeSvg,
    },
    {
      name: "ExpressJS",
      SvgComponent: ExpressSvg,
    },
    {
      name: "MongoDB",
      SvgComponent: MongoDBSvg,
    },
    {
      name: "Firebase",
      SvgComponent: FirebaseSvg,
    },
    {
      name: "Microsoft Azure",
      SvgComponent: AzureSvg,
    },
  ];

  return (
    <main className="flex flex-col gap-12 px-8 py-10 my-10 border-3 xl:py-12 2xl:py-14 3xl:py-14 xl:gap-20 xl:px-16 2xl:gap-24 3xl:gap-32 2xl:px-24 3xl:px-32 lg:flex-row md:my-14 3xl:my-[4.5rem] rounded-2xl border-dark dark:border-light lg:items-center">
      <section className="text-sm font-semibold text-center lg:text-left sm:text-base 3xl:text-lg font-abeezee dark:font-normal lg:w-[47.5%]">
        <p>
          Hello! My name is Archit and I enjoy creating things that live on the
          internet. I specialize in front-end development with a strong
          foundation in HTML, CSS, and JavaScript, complemented by my expertise
          in React and Next.js. My back-end skills include Java, Node.js,
          Express, and SQL/ No-SQL databases, allowing me to build full-stack
          applications.
        </p>
        <p className="pt-3">
          In the past year, my journey in web development has enabled me to
          deliver projects that surpass expectations. I'm enthusiastic about
          embarking on new ventures, both personal and professional, to refine
          my abilities and contribute meaningfully.
        </p>
        <p className="pt-3">
          Here are a few technologies I’ve been working with recently:
        </p>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-5 xs:mx-14 sm:mx-20 lg:mx-0 lg:flex-1">
        {skills.map((skill, index) => (
          <SkillTag
            key={index}
            name={skill.name}
            SvgComponent={skill.SvgComponent}
          />
        ))}
      </section>
    </main>
  );
};

export default Aboutpage;
