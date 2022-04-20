import React from "react";

//? HOW THE ITEM LOOKS: <project> passed from projectList:
import { Accordion } from "react-bootstrap";
// ? PROJECt ITEM:
import ADDTeamItem from "../team/ADDTeamItem";

function ProjectItem({ project }) {
  const teamList = project.team.map((team) => <h1>{team.name}</h1>);

  return (
    <Accordion.Item eventKey={project.id}>
      <Accordion.Header>{project.name}</Accordion.Header>
      <Accordion.Body>
        {/* SHOW THE LIST */}
        {teamList}
        {/*  SHAPE OF ADDING */}
        <ADDTeamItem key={project.id} project={project} />
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default ProjectItem;
