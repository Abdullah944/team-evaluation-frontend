import { observer } from "mobx-react";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//? STORE:
import authStore from "../../stores/authStore";

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

export default observer(SignoutButton);
