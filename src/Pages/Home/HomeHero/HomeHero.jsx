import React from "react";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="dark:bg-gray-900 bg-gray-100 text-gray-800 dark:text-white "
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-500 dark:from-green-300 via-blue-700 dark:via-blue-500 to-purple-600 dark:to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Hi, I'm Hasibul Hasan
            <span className="block mt-1q">A Front-End Developer</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            I'm a Front-End Developer from Bangladesh. I'm passionate about web
            development and I love to learn new things.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent 
             hover:text-gray-800 hover:dark:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://drive.google.com/file/d/1IdtrgMXgD_sGqlzxnw_827UPe3a7hfku/view"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium dark:text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#about"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
