import React from "react";
import { observer } from "mobx-react";
import { Accordion } from "react-bootstrap";
// ? Project ITEM:
import ProjectItem from "./ProjectItem";
// ? STORES:
import projectStore from "../../stores/projectStore";

//? MAPPING THROUGH THE ITEMS & SHOW THEM:
function ProjectList() {
  const projectList =
    projectStore.project && projectStore.project.length !== 0 ? (
      projectStore.project.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))
    ) : (
      <p> No project yet</p>
    );

  return (
    <div>
      <div>
        <Accordion defaultActiveKey="0">{projectList}</Accordion>
      </div>
    </div>
  );
}

export default observer(ProjectList);
