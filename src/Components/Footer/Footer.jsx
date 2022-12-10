import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiPhone } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 py-8">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
          <ul className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8">
            <li>
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-blue-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/#" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
          </ul>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <a href="tel:+8801780568256" aria-label="call" title="Call">
              <HiPhone className="m-auto w-5 h-5" />
            </a>
            <a
              href="mailto:hasibul.hasan2905@gmail.com"
              aria-label="send mail"
              title="Send Mail"
            >
              <HiMail className="m-auto w-5 h-5" />
            </a>
            <a
              href="https://github.com/cbHasib"
              title="GitHub"
              target="_blank"
              aria-label="github"
              rel="noreferrer"
            >
              <AiFillGithub className="m-auto w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/cbhasib/"
              title="LinkedIn"
              target="_blank"
              aria-label="linkedin"
              rel="noreferrer"
            >
              <AiFillLinkedin className="m-auto w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright © Hasibul Hasan{" "}
              <span id="year">{new Date().getFullYear()}</span> | All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
