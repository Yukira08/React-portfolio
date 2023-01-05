import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../constants/data";
import Navbar from "../components/Navbar/Navbar";
import ProjectDetailHeader from "../components/Project/ProjectDetailHeader";
import ProjectImages from "../components/Project/ProjectImages";

const ProjectDetail = () => {
  const params = useParams();
  const { projectId } = params;
  const project = data.projects.find(
    (thisProject) => thisProject.id === projectId
  );

  return (
    <div className="project__detail">
      <nav className="my__navbar">
        <div className="my__navbar-links">
          <Link
            to="/"
            className="my__navbar-links_logo"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            KHIN
          </Link>
        </div>
      </nav>
      <ProjectDetailHeader project={project} />
      <ProjectImages project={project} />
    </div>
  );
};

export default ProjectDetail;
