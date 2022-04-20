import React from "react";

//? HOW THE ITEM LOOKS: <semester> passed from SemesterList:
import { Accordion } from "react-bootstrap";
import ADDProjectItem from "../project/ADDProjectItem";
import ProjectList from "../project/ProjectList";

function SemesterItem({ semester }) {
  // const projectList = semester.project.map((project) => <p>{project.name}</p>);

  return (
    <Accordion.Item eventKey={semester.id}>
      <Accordion.Header>{semester.name}</Accordion.Header>
      <Accordion.Body>
        {/* {projectList} */}
        <ProjectList />
        {/*  SHAPE OF ADDING */}
        <ADDProjectItem key={semester.id} semester={semester} />
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default SemesterItem;
