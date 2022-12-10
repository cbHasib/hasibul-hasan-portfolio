import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "E-commerce",
      description: "E-commerce website with admin panel",
      image: "https://i.ibb.co/7bB4Z4y/ecommerce.png",
      live: "",
      github_client: "",
      github_server: "",
      category: "Full Stack",
    },
    {
      _id: 2,
      name: "Social Media",
      description: "Social media website with admin panel",
      image: "https://i.ibb.co/7bB4Z4y/ecommerce.png",
      live: "",
      github_client: "",
      github_server: "",
      category: "Front End",
    },
    {
      _id: 3,
      name: "Portfolio",
      description: "Portfolio website",
      image: "https://i.ibb.co/7bB4Z4y/ecommerce.png",
      live: "",
      github_client: "",
      github_server: "",
      category: "Front End",
    },
  ];
  return (
    <div
      id="projects"
      className="bg-gray-50 py-20 dark:bg-gray-900 flex flex-col justify-center items-center gap-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="bg-gradient-to-r from-blue-700 dark:from-blue-500 to-purple-600 dark:to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center items-center flex-1 gap-8">
          {projects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
