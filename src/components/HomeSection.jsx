import React from "react";

const HomeSection = () => {
  return (
    <main className="my-10">
      <h1 className="text-6xl uppercase leading-12">Archit Kakkar</h1>
      <h4 className="text-lg mt-2 mb-6 capitalize tracking-wide">
        I build things for the{" "}
        <span className="text-violet-700 dark:text-violet-600 capitalize text-xl">
          Web
        </span>
      </h4>
      <div className="border-3 border-dark dark:border-light p-3 px-4 rounded-3xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam
          veniam non facilis! Harum, animi. Nesciunt minus deserunt dolorum
          commodi. Illo pariatur delectus commodi officiis fuga perferendis
          fugit eum ad.
        </p>
      </div>
      <button className="dark:bg-light bg-dark mt-6 py-2 px-6 rounded-lg tracking-wide">
        <a
          href="https://google.com"
          target="_blank"
          className="dark:text-dark text-light capitalize"
        >
          Check out my resume!
        </a>
      </button>
    </main>
  );
};

export default HomeSection;
