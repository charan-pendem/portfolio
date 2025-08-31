"use client";

import React from "react";
import { projectsData } from "../../../../utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/charan-pendem"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
