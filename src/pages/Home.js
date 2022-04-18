import React from "react";
import { observer } from "mobx-react";
//? Auth:
import SigninButton from "../components/auth/SigninButton";
import SignupButton from "../components/auth/SignupButton";
//? semesters:
import semesterStore from "../stores/semesterStore";
import ADDSemesterItem from "../components/semester/ADDSemesterItem";
import SemesterDetail from "../components/semester/SemesterDetail";

const Home = () => {
  return (
    <div>
      <h1>Welcome To The Team Evaluation </h1>

      <SigninButton />
      <SignupButton />
      <ADDSemesterItem />
      <SemesterDetail semesters={semesterStore.semester} />
    </div>
  );
};

export default observer(Home);
