"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projectsData } from "../../../../utils/data/project-data";
import Link from "next/link";

const SingleProject = () => {
  const params = useParams();
  const projectId = parseInt(params.id, 10);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center text-red-400">
        Project not found
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">{project.name}</h2>

      <p className="text-gray-300 mb-6">{project.description}</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tools.map((tool, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
          >
            {tool}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-400 italic mb-6">
        Role: {project.role}
      </p>

      {/* Links */}
      <div className="flex gap-6">
        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View Code →
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="text-green-400 hover:underline"
          >
            Live Demo →
          </Link>
        )}
      </div>
    </section>
  );
};

export default SingleProject;
