import React from "react";
import { Image } from "react-bootstrap";

const ThankyouPage = () => {
  return (
    <div>
      <h1> project name </h1>
      <Image
        alt="DONE Icon"
        source={{
          uri: "https://www.clipartmax.com/png/middle/301-3011314_pe-success-icon-task-done.png",
        }}
      />

      <h1>
        <u> Thank you </u>
      </h1>
    </div>
  );
};

export default ThankyouPage;
