import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Contactpage = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${VITE_REACT_APP_BACKEND_URL}/api/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Check if the request was successful
      if (response.ok) {
        const data = await response.text();
        console.info(data);
        setSubmitted(true);
        setSuccess(true);
      } else {
        // Handle error response here
        console.error("Error submitting form:", response.statusText);
        setSubmitted(true);
        setSuccess(false);
      }
    } catch (error) {
      // Handle network errors here
      console.error("Network error:", error);
      setSubmitted(true);
      setSuccess(false);
    } finally {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <main className="my-10 text-center lg:my-12 3xl:my-16">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl 3xl:text-5xl text-violet-700 xs:text-4xl title-shadow">
          Get in Touch
        </h2>
        <p className="pt-4 lg:pt-2.5 3xl:pt-4 pb-6 lg:pb-8 font-abeezee text-center font-bold dark:font-normal text-sm sm:text-base 3xl:text-lg lg:w-4/5">
          Whether you're interested in a collaboration, have questions, or just
          want to say hello, I'm here to listen. Fill out the form below, or
          drop me an email at{" "}
          <a
            href="mailto:business.architkakkar@gmail.com"
            className="inline italic hover:underline hover:underline-offset-2"
          >
            business.architkakkar@gmail.com
          </a>
          . Let's start a conversation that leads to something extraordinary.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="px-4 py-2.5 w-full dark:bg-neutral-900 bg-yellow-50 border-3 border-dark dark:border-light rounded-xl placeholder:dark:text-neutral-700 3xl:text-lg outline-none"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email...."
          required
        />
        <textarea
          className="resize-none px-4 py-2.5 w-full dark:bg-neutral-900 bg-yellow-50 border-3 border-dark dark:border-light rounded-xl placeholder:dark:text-neutral-700 outline-none 3xl:text-lg my-4 lg:py-4 font-abeezee"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          cols="30"
          rows="7"
          placeholder="Type a message...."
          required
        ></textarea>
        <input
          className="px-8 py-2 rounded-lg dark:bg-light bg-dark text-light dark:text-dark hover:opacity-90 hover:dark:opacity-60 cursor-pointer lg:text-lg lg:py-1.5 3xl:py-2 3xl:px-10 3xl:text-xl"
          type="submit"
          value="Submit!"
        />
      </form>
      {submitted && (
        <div className="fixed transition-opacity -translate-x-1/2 text- top-4 md:top-6 left-1/2">
          {success ? (
            <p className="flex items-center px-4 py-1 text-green-900 bg-green-400 rounded-md gap-x-2">
              <FontAwesomeIcon icon={faCheckCircle} fontSize="20px" />
              Submitted Successfully!
            </p>
          ) : (
            <p className="flex items-center px-4 py-1 text-red-800 bg-red-400 rounded-md gap-x-2">
              <FontAwesomeIcon icon={faCircleExclamation} fontSize="20px" />
              Error! Try Again.
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default Contactpage;
