import React from "react";
import { Link } from "react-router-dom";
import "./ProjectImages.css";
const ProjectImages = (props) => {
  return (
    <div className="project__images">
      {props.project.photos.map((img) => (
          <img src={img} />
      ))}
      <Link
        to="/"
        onClick={() => {
          window.scroll(0, 0);
        }}
        className="custom__button"
        style={{ textDecoration: "none" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ProjectImages;
