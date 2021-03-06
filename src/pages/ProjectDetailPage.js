import { observer } from "mobx-react";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
// ? STORES:
import projectStore from "../stores/projectStore";
import evaluationStore from "../stores/evaluationStore";
import semesterStore from "../stores/semesterStore";

const ProjectDetailPage = () => {
  const { projectId } = useParams(); //? {} to destructs the obj / take from the params

  // ? grab match project:
  const project = projectStore.project
    ? projectStore.project.find((p) => +projectId === p.id)
    : ""; //? match the params id with project in the store id.

  //? semester:
  const semester =
    semesterStore.semester && project
      ? semesterStore.semester.find(
          (semester) => semester.id === project.semester
        )
      : "";

  //?   Show teams:
  const teamList = project.team
    ? project.team.map((team) => (
        <NavLink key={team.id} to={`/ProjectDetail/${projectId}/${team.id}`}>
          {team.name}
        </NavLink>
      ))
    : "";

  //? GET INFO FROM Evaluations:
  const evaluations =
    evaluationStore.evaluation && project
      ? evaluationStore.evaluation.find(
          (evaluation) => evaluation.id === project.linkId.id
        )
      : "";

  //? Criteria:  avg[0]= all
  const criteria = evaluations ? (
    evaluations.avg[0].criteria.map((criteria) => (
      <tr key={criteria.criteria_id}>
        <td>{criteria.criteria_name}</td>
        <td>{criteria.avg}%</td>
        <td>{criteria.criteria_weight}</td>
        <td>{criteria.avg_weight}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td>judge please first</td>
      <td>judge please first</td>
      <td>judge please first</td>
      <td>judge please first</td>
    </tr>
  );

  //? LOCK the Judging:
  const handleLock = (e) => {
    e.preventDefault();
    evaluations.isLocked = true;

    evaluationStore.lockProject(evaluations);
  };

  //? UNLOCK the Judging:
  const handleUnlock = (e) => {
    e.preventDefault();
    evaluations.isLocked = false;
    evaluationStore.lockProject(evaluations);
  };

  //? handleCopy
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(
      `http://localhost:3000/EvaluationPage/${evaluations.id}/${semester.id}/${projectId}`
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* SHARE BTN = on click give link */}
        <div style={{ fontSize: 70 }}>
          <AiOutlineShareAlt onClick={handleCopy} />
        </div>

        {/* LOCK BTN */}
        <Button onClick={handleLock}>lock</Button>
        {/* Unlock BTN */}
        <Button onClick={handleUnlock}>unlock</Button>
      </div>
      {/* PROJECT NAME */}
      <h1>{project.name}</h1>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {/* ALL */}
        <Link to={`/ProjectDetail/${projectId}`}>
          <h3>All</h3>
        </Link>
        <h3>
          <u
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "2rem",
            }}
          >
            {teamList}
          </u>
        </h3>
      </div>
      {/* TABLE */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Avg. Score</th>
            <th>Weight</th>
            <th>Weighted Avg.</th>
          </tr>
        </thead>
        <tbody>{criteria}</tbody>
      </Table>
      {/* TOTAL: */}
      <u>
        <p>
          <b> Total : {evaluations ? evaluations.avg[0].total : ""}%</b>
        </p>
      </u>
    </div>
  );
};

export default observer(ProjectDetailPage);
