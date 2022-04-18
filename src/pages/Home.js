import React from "react";
import SigninModal from "../components/auth/SigninModal";
import SignupModal from "../components/auth/SignupModal";
import SignoutButton from "../components/auth/SignoutButton";
import authStore from "../stores/authStore";
import semesterStore from "../stores/semesterStore";
import { observer } from "mobx-react";
const SigninPage = () => {
  console.log(authStore.user); //? to show the user info signin
  return (
    <div>
      <h1>Welcome To The Team Evaluation </h1>
      <SigninModal />
      <SignupModal />
      <SignoutButton />
    </div>
  );
};

export default observer(SigninPage);
