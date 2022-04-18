import React from "react";
import ADDSemesterItem from "../components/semester/ADDSemesterItem";

const AdminPage = ({ semesters }) => {
  const semesterList =
    semesters && semesters.length !== 0 ? (
      semesters
        .map((semester) => (
          <ADDSemesterItem semester={semester} key={semester.id} />
        ))
        .reverse()
    ) : (
      <p> No semesters yet</p>
    );

  return <div className="col-lg-8"> {semesterList} </div>;
};

export default AdminPage;
