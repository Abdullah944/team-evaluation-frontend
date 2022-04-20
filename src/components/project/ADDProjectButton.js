import React from "react";
import { Button } from "react-bootstrap";

//? open and close the form:
const ADDProjectButton = ({ setVisible, visible }) => {
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}> ADD Project </Button>
    </div>
  );
};

export default ADDProjectButton;
