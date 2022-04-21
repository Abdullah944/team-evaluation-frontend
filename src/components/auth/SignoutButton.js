import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

function SignoutButton() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signout();
    navigate("/");
  };
  return (
    <div>
      <Link to={"/"}>
        <Button className="btn" onClick={handleSubmit}>
          Signout
        </Button>
      </Link>
    </div>
  );
}

export default SignoutButton;
