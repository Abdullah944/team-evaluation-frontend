import { observer } from "mobx-react";
import React from "react";
import semesterStore from "../../stores/semesterStore";
import SemesterItem from "./SemesterItem";

//? MAPPING THROUGH THE ITEMS & SHOW THEM:
function SemesterList() {
  const semesterList =
    semesterStore.semester && semesterStore.semester.length !== 0 ? (
      semesterStore.semester
        .map((semester) => (
          <SemesterItem semester={semester} key={semester.id} />
        ))
        .reverse()
    ) : (
      <p> No semesters yet</p>
    );

  return (
    <div>
      <h3>{semesterList}</h3>
    </div>
  );
}

export default observer(SemesterList);
