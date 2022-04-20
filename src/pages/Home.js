import React from "react";
import { observer } from "mobx-react";
//? Auth:
import SigninButton from "../components/auth/SigninButton";
import SignupButton from "../components/auth/SignupButton";

const Home = () => {
  return (
    <div>
      <h1>Welcome To The Team Evaluation </h1>
      {/* Auth BTN: */}
      <SigninButton />
      <SignupButton />
    </div>
  );
};

export default observer(Home);
