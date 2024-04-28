import React from "react";

const Homepage = () => {
  return (
    <main className="my-10 md:my-14 3xl:my-16">
      <h1 className="text-6xl xxs:text-7xl xs:text-[5rem] sm:text-[5.5rem] md:text-8xl lg:text-[6.5rem] 3xl:text-[7.5rem] uppercase leading-12 xxs:leading-[3.5rem] xs:leading-[4rem] md:leading-[4.25rem] lg:leading-[4.5rem] 3xl:leading-[5.25rem] sm:tracking-wide xl:tracking-[0.015em] md:w-3/5">
        Archit Kakkar
      </h1>
      <h4 className="mt-2 md:mt-2.5 mb-6 md:mb-8 text-lg tracking-wide capitalize xs:text-xl lg:text-[1.375rem] 3xl:text-2xl">
        I build things for the{" "}
        <span className="text-xl capitalize text-violet-700 dark:text-violet-600 xs:text-2xl lg:text-[1.7rem] 3xl:text-3xl">
          Web
        </span>
      </h4>
      <div className="px-4 py-4 text-sm font-bold sm:text-base 3xl:text-lg dark:font-normal border-3 border-dark dark:border-light sm:p-5 rounded-3xl font-abeezee md:w-10/12 2xl:w-3/4">
        <p>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered SAAS applications. I strive to
          create solutions that are not only functional but also intuitive and
          user-friendly.
        </p>
        <p className="pt-3">
          If you're interested in learning more about my background, projects,
          or how I can contribute to your team, feel free to check out my
          resume.
        </p>
      </div>
      <button className="dark:bg-light bg-dark mt-6 md:mt-8 py-2 px-5 sm:px-7 sm:py-2.5 rounded-lg tracking-wide hover:opacity-90 hover:dark:opacity-60 lg:text-lg 3xl:text-xl lg:py-2 3xl:py-3 lg:px-6 3xl:px-8">
        <a
          href="https://drive.google.com/file/d/1Oo7g3iWFiLirqHAW1kEpk2D_XP125Tzg/view"
          target="_blank"
          className="capitalize dark:text-dark text-light"
        >
          Check out my resume!
        </a>
      </button>
    </main>
  );
};

export default Homepage;
