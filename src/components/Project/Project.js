import React from "react";

import { HiInformationCircle } from "react-icons/hi";
import { BsGithub, BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import "./Project.css";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(158, 183, 229,0.8)",
    color: "#2B4570",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: 600,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(158, 183, 229,0.8)",
  },
}));

const Project = (props) => {
  const navigate = useNavigate();
  return (
    <div className="projects__container-project">
      <div className="projects__container-project_images">
        <div className="project__images-container">
          <img src={props.project.imgUrl} className="project__images-card" />
          <div
            className="overlay-top"
            onClick={() => {
              navigate(`/projects/${props.project.id}`);
              window.scroll(0, 0);
            }}
          >
            <div className="icon">
              <HiInformationCircle size={30} color="#9EB7E5" />
              <p>Detail Information</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects__container-project_content">
        <div>
          <h3>{props.project.title}</h3>
          <p>{props.project.sub_title}</p>
        </div>

        <div className="projects__container-project_icons">
          <LightTooltip
            title="Details"
            placement="top"
            arrow
            TransitionComponent={Zoom}
          >
            <Link
              to={`/projects/${props.project.id}`}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <HiInformationCircle size={27} color="#9EB7E5" />
            </Link>
          </LightTooltip>

          <LightTooltip
            title="Github"
            placement="top"
            arrow
            TransitionComponent={Zoom}
          >
            <a href={props.project.github} target="_blank">
              <BsGithub size={27} color="#9EB7E5" />
            </a>
          </LightTooltip>

          {props.project.demo && (
            <LightTooltip
              title="Demo"
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <a href={props.project.url} target="_blank">
                <BsEyeFill size={27} color="#9EB7E5" />
              </a>
            </LightTooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
