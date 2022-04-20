import React from "react";
import { Button } from "react-bootstrap";

//? open and close the form:
const ADDTeamButton = ({ setVisible, visible }) => {
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}> ADD Team </Button>
    </div>
  );
};

export default ADDTeamButton;
