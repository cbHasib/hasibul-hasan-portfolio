import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-20 border-t dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="max-w-7xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-12 mx-auto text-gray-900 dark:text-gray-200">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight ">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8 dark:text-gray-200">
              Hate forms? Send me an <span className="underline">email</span>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <div>
          <div>
            <span className="uppercase text-sm text-gray-800 dark:text-gray-200 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-200 border border-gray-300 text-gray-900  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:border-gray-700 dark:bg-gray-800"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600  dark:text-gray-200 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-200 border border-gray-300  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:border-gray-700 dark:bg-gray-800"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-200 border border-gray-300  dark:border-gray-700 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
