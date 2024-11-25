import Link from "next/link";
import { useState } from "react";
import ImageWrapper from "../molecules/ImageWrapper";
import { projects } from "./constant";

const Projects = () => {
  const [showProject, setShowProject] = useState("all");

  return (
    <>
      <div className="mt-10 flex flex-wrap md:flex-row gap-2 bg-black text-white justify-evenly py-5 mb-20">
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("all")}
        >
          ALL
        </p>
        <p
          className="border-2 border-white w-[150px] py-3 px-1 cursor-pointer"
          onClick={() => setShowProject("html")}
        >
          HTML + CSS + JS
        </p>
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("react")}
        >
          React JS & React Native
        </p>
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("mern")}
        >
          MERN
        </p>
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("vue")}
        >
          VUE JS
        </p>
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("php")}
        >
          PHP
        </p>
        <p
          className="border-2 border-white w-[150px] p-3 cursor-pointer"
          onClick={() => setShowProject("flutter")}
        >
          Flutter
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
        {showProject != "all"
          ? projects.all.map((project, index) => (
              <div>
                {showProject == project.category && (
                  <Link href={`/projects/${project.id}`}>
                    <div
                      key={index}
                      className="bg-gray-700 mb-2 w-full md:w-[35vw] rounded-t-lg mr-4 text-white"
                    >
                      <ImageWrapper
                        src={project.photo}
                        alt="project picture"
                        className="relative w-full h-[400px] transition-all z-20 rounded-t-lg hover:scale-105 object-cover"
                      />

                      <p className="py-2">{project.name}</p>
                    </div>
                  </Link>
                )}
              </div>
            ))
          : projects.all.map((projects, index) => (
              <Link href={`/projects/${projects.id}`}>
                <div
                  key={index}
                  className=" bg-gray-700 mb-2 w-full md:w-[35vw] rounded-t-lg mr-4 text-white"
                >
                  <ImageWrapper
                    src={projects.photo}
                    alt="project picture"
                    className="relative w-full h-[400px] transition-all z-20 rounded-t-lg hover:scale-105 object-cover"
                  />
                  <p className="py-2">{projects.name}</p>
                </div>
              </Link>
            ))}
      </div>
    </>
  );
};

export default Projects;
