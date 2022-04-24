import React from "react";
import { Button } from "react-bootstrap";

//? open and close the form:
const ADDsemesterButton = ({ setVisible, visible }) => {
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>ADD Semester</Button>
    </div>
  );
};

export default ADDsemesterButton;
