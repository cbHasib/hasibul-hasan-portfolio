import React from "react";

const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    image,
    live,
    github_client,
    github_server,
    category,
  } = project;
  return (
    <div className="w-80 text-center dark:text-gray-200">
      <div className="c-card block bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-blue-200 text-blue-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {category}
          </span>
          <h2 className="mt-2 mb-2  font-bold">{name}</h2>
          <p className="text-sm">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
        </div>

        <div className="p-4 flex items-center text-sm text-gray-600 border-t dark:border-gray-700 justify-around">
          <a
            href={live}
            className="bg-blue-700 text-white px-5 py-1.5 rounded-md hover:bg-blue-800"
          >
            Live
          </a>
          <a
            href={github_client}
            className="bg-blue-700 text-white px-5 py-1.5 rounded-md hover:bg-blue-800"
          >
            Client
          </a>
          <a
            href={github_server}
            className="bg-blue-700 text-white px-5 py-1.5 rounded-md hover:bg-blue-800"
          >
            Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
