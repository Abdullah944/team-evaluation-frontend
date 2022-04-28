import React from "react";
import { Accordion } from "react-bootstrap";

//? HOW THE ITEM LOOKS: <semester> passed from SemesterList:
import ADDProjectItem from "../project/ADDProjectItem";
import ProjectList from "../project/ProjectList";

//? how to projects shows in a semester:
function SemesterItem({ semester }) {
  return (
    <Accordion.Item eventKey={semester.id}>
      <Accordion.Header>{semester.name}</Accordion.Header>
      <Accordion.Body>
        {/* {projectList} */}
        <ProjectList semester={semester} />
        {/*  SHAPE OF ADDING */}
        <ADDProjectItem semester={semester} />
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default SemesterItem;
