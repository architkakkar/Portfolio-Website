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
    <main className="flex flex-col gap-12 px-8 py-10 my-10 border-2 md:my-14 rounded-2xl border-dark dark:border-light">
      <section className="text-sm font-semibold text-center xs:text-base font-abeezee dark:font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        voluptate, mollitia aliquam distinctio ut dolorum quam reprehenderit,
        cum odit soluta esse neque accusantium itaque praesentium aspernatur
        nobis similique aut libero autem recusandae! Maiores excepturi totam
        vitae? Excepturi aliquid eius debitis suscipit alias modi minima
        cupiditate error, soluta placeat earum odio minus recusandae quod illum
        tempore, nulla corrupti assumenda fuga sapiente culpa velit
        consequuntur.
      </section>
      <section className="flex flex-wrap items-center justify-center gap-5 xs:mx-14 sm:mx-20">
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
