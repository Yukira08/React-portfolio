import React from "react";

import Project from "../../components/Project/Project";
import data from "../../constants/data.js";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__heading">
        <h1>Projects</h1>
      </div>
      <div className="projects__container">
        <div className="projects__container-groupA">
          {data.projects.slice(0, 1).map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
        <div className="projects__container-groupB">
          {data.projects.slice(1).map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
