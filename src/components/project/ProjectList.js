import React from "react";
import { Accordion } from "react-bootstrap";
// ? Project ITEM:
import ProjectItem from "./ProjectItem";

//? MAPPING THROUGH THE ITEMS & SHOW THEM:
function ProjectList({ semester }) {
  const projectList =
    semester.project.length !== 0 ? (
      semester.project.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))
    ) : (
      <p> No project yet</p>
    );

  return (
    <div>
      <div>
        {/* main heading */}
        <Accordion defaultActiveKey="0">{projectList}</Accordion>
      </div>
    </div>
  );
}

export default ProjectList;
