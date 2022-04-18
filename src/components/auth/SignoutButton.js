import React from "react";
import { Button } from "react-bootstrap";
import authStore from "../../stores/authStore";

function SignoutButton() {
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signout();
  };
  return (
    <Button className="center sign-in-btn" onClick={handleSubmit}>
      Signout
    </Button>
  );
}

export default SignoutButton;
