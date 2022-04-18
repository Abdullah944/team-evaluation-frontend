import React from "react";
import semesterStore from "../../stores/semesterStore";
import SemesterItem from "./SemesterItem";

//? MAPPING THROUGH THE ITEMS & SHOW THEM:
function SemesterList() {
  const semesterList = () => {
    semesterStore.semester.map((semester) => (
      <SemesterItem key={semester.id} semester={semester} />
    ));
  };

  return <div>{semesterList}</div>;
}

export default SemesterList;
