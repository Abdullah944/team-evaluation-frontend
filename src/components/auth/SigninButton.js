import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SigninButton = () => {
  return (
    <div>
      <Link to={"/SigninPage"}>
        <Button className="center sign-in-btn" variant="outline-light mx-3">
          Signin
        </Button>
      </Link>
    </div>
  );
};

export default SigninButton;
