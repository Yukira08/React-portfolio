import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import "./ProjectDetailHeader.css";

const ProjectDetailHeader = (props) => {
  return (
    <div className="project__detail-header">
      <div className="detail__header">
        <div className="project__detail-header_heading">
          <h1>{props.project.title}</h1>
        </div>
        <div className="project__detail-header_img">
            <img src={props.project.cover} />
        </div>
      </div>

      <div className="detail__description">
        <div className="detail__description-title">
          <h1>Description</h1>
        </div>
        <div className="detail__description-info">
          <div className="detail__description-info_content">
            <div>
              <h3>My Role</h3>
              <p>{props.project.role}</p>
            </div>
            <div>
              <h3>Timeline</h3>
              <p>{props.project.timeline}</p>
            </div>
            <div>
              <h3>Technology</h3>
              <p>{props.project.tech}</p>
            </div>
          </div>
          <div className="detail__description-info_des">
            <p>{props.project.description}</p>
            {props.project.demo && (
              <p>
                <a
                  href={props.project.url}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    Visit the website
                    <span>
                      <BsArrowUpRight />
                    </span>
                  </p>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailHeader;
