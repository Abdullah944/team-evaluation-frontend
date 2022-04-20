import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <div>
      <Link to={"/SignupPage"}>
        <Button className="btn">Signup</Button>
      </Link>
    </div>
  );
};

export default SignupButton;
