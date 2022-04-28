import React from "react";
import { useNavigate } from "react-router-dom";

//? HOW THE ITEM LOOKS: <project> passed from projectList:
import { Accordion, Button } from "react-bootstrap";
// ? PROJECt ITEM:
import ADDTeamItem from "../team/ADDTeamItem";

function ProjectItem({ project }) {
  const navigate = useNavigate();

  const teamList = project.team.map((team) => (
    <h4 key={team.id}> {team.name} </h4>
  ));

  return (
    <Accordion.Item eventKey={project.id}>
      {/* Header */}
      <Accordion.Header>
        {/* project name */}
        {project.name}

        {/* Detail BTN */}
        <div>
          <Button
            onClick={() => navigate(`/ProjectDetail/${project.id}`)}
            className="detail-btn"
          >
            Detail
          </Button>
        </div>
      </Accordion.Header>

      <Accordion.Body>
        {/* SHOW THE LIST */}
        {teamList}
        {/*  SHAPE OF ADDING */}
        <ADDTeamItem project={project} />
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default ProjectItem;
