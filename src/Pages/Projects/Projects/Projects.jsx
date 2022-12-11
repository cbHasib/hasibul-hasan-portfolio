import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "PhoneSwaps - Resale Marketplace",
      description:
        "Buy and sell used phones with ease and confidence on PhoneSwaps. We offer a safe and secure platform for you to buy and sell used phones.",
      image: "https://i.ibb.co/HhtthQV/phone-Swap.jpg",
      gallery: [
        "https://i.ibb.co/t399Hn2/phoneswap-full.png",
        "https://i.ibb.co/bzzhwj5/phoneswap-login.jpg",
        "https://i.ibb.co/wgtzbkV/admin-phoneswap.jpg",
      ],
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      live: "https://phone-swaps.web.app/",
      github_client: "https://github.com/cbHasib/phone-swap-clients",
      github_server: "https://github.com/cbHasib/phone-swap-server",
      category: "Full Stack",
      thumbnail: "https://i.ibb.co/y8Hzsnf/phoneswap-thumb.jpg",
    },

    {
      _id: 2,
      name: "Hasib's Photography",
      description:
        "Hasib's Photography is a photography service provider. It is a full-stack MERN project. It has a dashboard for the admin to manage the services and orders. ",
      image: "https://i.ibb.co/N9GbKH5/hasibs.jpg",
      gallery: [
        "https://i.ibb.co/VShs14m/hasibsfull.jpg",
        "https://i.ibb.co/WBC5Tsg/hasibsservice.jpg",
      ],
      technologies: ["React", "Node", "Express", "MongoDB", "Firebase"],
      live: "https://hasib-photography.web.app/",
      github_client: "https://github.com/cbHasib/hasibs-photography-client",
      github_server: "https://github.com/cbHasib/hasibs-photography-server",
      category: "Full Stack",
      thumbnail: "https://i.ibb.co/VgG323t/hasibs-thumb.jpg",
    },
    {
      _id: 3,
      name: "ShikkhaNir - Online Education",
      description:
        "Hasib's Photography is a photography service provider. It is a full-stack MERN project. It has a dashboard for the admin to manage the services and orders. ",
      image: "https://i.ibb.co/LCyYyX8/shikkhanir.jpg",
      gallery: [
        "https://i.ibb.co/YjJt4xw/shikkhanirhome.jpg",
        "https://i.ibb.co/xYNfYjn/shikkhanircourse.jpg",
      ],
      technologies: ["React", "Node", "Express", "MongoDB", "Firebase"],
      live: "https://shikkhanir-client.web.app/",
      github_client: "https://github.com/cbHasib/shikkhanir-client",
      github_server: "https://github.com/cbHasib/shikkhanir-server-mongodb",
      category: "Full Stack",
      thumbnail: "https://i.ibb.co/LCyYyX8/shikkhanir.jpg",
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
