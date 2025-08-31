"use client";

import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 p-6 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">{project.name}</h3>

        {/* Short description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Role */}
        <p className="text-sm text-gray-400 italic mb-4">
          Role: {project.role}
        </p>
      </div>

      {/* Links */}
      <div className="flex justify-between mt-4">
        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            className="text-sm font-medium text-blue-400 hover:underline"
          >
            Code →
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="text-sm font-medium text-green-400 hover:underline"
          >
            Live →
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default ProjectCard;
