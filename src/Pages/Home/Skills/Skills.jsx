import React from "react";
import htmlIcon from "../../../assets/icons/html.svg";
import cssIcon from "../../../assets/icons/css.svg";
import jsIcon from "../../../assets/icons/javascript.svg";
import reactIcon from "../../../assets/icons/reactjs.svg";
import nodeIcon from "../../../assets/icons/nodeJS.svg";
import mongoIcon from "../../../assets/icons/MongoDB.svg";
import androidIcon from "../../../assets/icons/Android.svg";
import javaIcon from "../../../assets/icons/java.svg";
import firebaseIcon from "../../../assets/icons/firebase.svg";
import wordpressIcon from "../../../assets/icons/Wordpress.svg";
import figmaIcon from "../../../assets/icons/figma.svg";

const Skills = () => {
  const skills = [
    {
      _id: 1,
      name: "HTML",
      icon: htmlIcon,
    },
    {
      _id: 2,
      name: "CSS",
      icon: cssIcon,
    },
    {
      _id: 3,
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      _id: 4,
      name: "ReactJS",
      icon: reactIcon,
    },
    {
      _id: 5,
      name: "NodeJS",
      icon: nodeIcon,
    },
    {
      _id: 6,
      name: "MongoDB",
      icon: mongoIcon,
    },
    {
      _id: 7,
      name: "Android",
      icon: androidIcon,
    },
    {
      _id: 8,
      name: "Java",
      icon: javaIcon,
    },
    {
      _id: 9,
      name: "Firebase",
      icon: firebaseIcon,
    },
    {
      _id: 10,
      name: "Wordpress",
      icon: wordpressIcon,
    },
    {
      _id: 11,
      name: "Figma",
      icon: figmaIcon,
    },
  ];

  return (
    <div
      id="skills"
      className="py-16 dark:bg-gray-900 border-y dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-4 lg:flex-row justify-center items-center text">
          <h2 className="bg-gradient-to-r from-blue-700 dark:from-blue-500 to-purple-600 dark:to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl text-center py-5 px-10">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center items-center flex-1">
            {skills.map((skill) => (
              <div
                className="h-28 w-28 flex items-center justify-center flex-col gap-2 bg-gray-50 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg shadow-lg m-4 text-gray-800 dark:text-gray-100  dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl cursor-pointer"
                title={skill.name}
                key={skill._id}
              >
                <img src={skill.icon} className="w-12 h-12" alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
