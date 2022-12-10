import React from "react";
import hasibImage from "../../../assets/images/hasib.png";

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-100 pb-10 dark:bg-gray-900">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 px-10 dark:bg-gray-800 dark:lg:bg-darker md:p-10 rounded-[4rem] drop-shadow-sm border-gray-200 dark:border-gray-700 border shadow-md space-y-6 flex flex-col md:flex-row py-10 md:gap-6 justify-center md:space-y-0 items-center  max-w-6xl mx-auto">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={hasibImage}
              alt="Hasibul Hasan"
              loading="lazy"
              className="h-72 w-72 rounded-full object-cover ring-offset-0 ring-2 ring-blue-500  bg-blue-500 shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="bg-gradient-to-r from-blue-700 dark:from-blue-500 to-purple-600 dark:to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              About Me
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              I am a front-end developer. My main focus is to build a user
              friendly and responsive website. My goal is to provide pixel
              perfect design and clean code. I am a hard worker and always try
              to learn new things. I am a quick learner and always try to do my
              best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
