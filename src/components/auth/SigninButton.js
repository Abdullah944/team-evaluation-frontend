import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SigninButton = () => {
  return (
    <div>
      <Link to={"/SigninPage"}>
        <Button>Signin</Button>
      </Link>
    </div>
  );
};

export default SigninButton;
