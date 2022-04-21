import React from "react";
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

export default Home;
