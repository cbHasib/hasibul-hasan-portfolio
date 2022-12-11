import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, name, live, github_client, github_server, category, thumbnail } =
    project;
  return (
    <div className="w-80 text-center dark:text-gray-200">
      <div className="c-card block bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={thumbnail}
            alt={name}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-blue-200 text-blue-800 rounded-full uppercase tracking-wide text-xs">
            {category}
          </span>
          <h2 className="mt-2  font-bold">{name}</h2>
        </div>

        <div className="px-4 py-2 flex items-center text-sm text-gray-600 border-t dark:border-gray-700 justify-around">
          <a
            href={live}
            className="text-blue-600 underline flex justify-center items-center gap-1"
          >
            <HiOutlineExternalLink /> <span>Live</span>
          </a>
          <a
            href={github_client}
            className="text-blue-600 underline flex justify-center items-center gap-1"
          >
            <FaGithub />
            Client
          </a>
          <a
            href={github_server}
            className="text-blue-600 underline flex justify-center items-center gap-1"
          >
            <FaGithub />
            Server
          </a>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600 border-t dark:border-gray-700 justify-around">
          <Link
            to={`/projects/${_id}`}
            className="bg-blue-700 text-white px-5 py-1.5 rounded-md hover:bg-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
