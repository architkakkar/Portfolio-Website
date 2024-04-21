import React from "react";

const Contactpage = () => {
  return (
    <main className="my-10 text-center">
      <h2 className="text-3xl text-violet-600 xs:text-4xl">Get in Touch</h2>
      <p className="pt-4 pb-6 font-abeezee font-bold dark:font-normal text-sm xs:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellendus
        quidem, quos quibusdam, architecto mollitia expedita, dignissimos odio
        debitis repudiandae ut autem ullam!
      </p>
      <form>
        <input
          className="px-4 py-2 w-full dark:bg-neutral-900 bg-yellow-50 border-3 border-dark dark:border-light rounded-xl placeholder:dark:text-neutral-700 outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email...."
        />
        <textarea
          className="resize-none px-4 py-2 w-full dark:bg-neutral-900 bg-yellow-50 border-3 border-dark dark:border-light rounded-xl placeholder:dark:text-neutral-700 outline-none my-4"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Type a message...."
        ></textarea>
        <input
          className="px-8 py-2 rounded-lg dark:bg-light bg-dark text-light dark:text-dark hover:opacity-90 hover:dark:opacity-60 cursor-pointer"
          type="submit"
          value="Submit!"
        />
      </form>
    </main>
  );
};

export default Contactpage;
