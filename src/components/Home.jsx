import React from "react";

const Homepage = () => {
  return (
    <main className="my-10 md:my-14">
      <h1 className="text-6xl xxs:text-7xl xs:text-[5.5rem] uppercase leading-12 xxs:leading-[3.5rem] xs:leading-[4rem] sm:tracking-wide md:w-3/5">
        Archit Kakkar
      </h1>
      <h4 className="mt-2 mb-6 text-lg tracking-wide capitalize xxs:text-xl">
        I build things for the{" "}
        <span className="text-xl capitalize text-violet-700 dark:text-violet-600 xxs:text-2xl">
          Web
        </span>
      </h4>
      <p className="px-4 py-3 text-sm font-bold xs:text-base dark:font-normal border-3 border-dark dark:border-light sm:py-4 sm:px-5 rounded-3xl font-abeezee">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam
        veniam non facilis! Harum, animi. Nesciunt minus deserunt dolorum
        commodi. Illo pariatur delectus commodi officiis fuga perferendis fugit
        eum ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        exercitationem nulla, optio mollitia iure laboriosam doloremque vitae
        animi a sint quibusdam natus excepturi distinctio quas tenetur, porro
        cumque rem deleniti?
      </p>
      <button className="dark:bg-light bg-dark mt-6 py-2 px-5 sm:px-7 sm:py-2.5 rounded-lg tracking-wide hover:opacity-90 hover:dark:opacity-60">
        <a
          href="https://google.com"
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
