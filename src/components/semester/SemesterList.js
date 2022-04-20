import { observer } from "mobx-react";
import React from "react";
import { Accordion } from "react-bootstrap";
// ? STORES:
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
        .reverse() //? To make it top of the list.
    ) : (
      <p> No semesters yet</p>
    );

  return (
    <div>
      <div>
        {/* father of the accordion here , the rest in the semester item: */}
        <Accordion defaultActiveKey="0">{semesterList}</Accordion>
      </div>
    </div>
  );
}

export default observer(SemesterList);
