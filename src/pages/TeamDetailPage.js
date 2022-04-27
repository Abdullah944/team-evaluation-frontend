import { observer } from "mobx-react";
import React from "react";
import { Table } from "react-bootstrap";
import { useParams, NavLink, Link } from "react-router-dom";
import { AiOutlineShareAlt, AiFillLock } from "react-icons/ai";
// ? STORES:
import evaluationStore from "../stores/evaluationStore";
import projectStore from "../stores/projectStore";

// ? show team Detail:
const TeamDetailPage = () => {
  const { projectId, teamId } = useParams(); //? {} to destructs the obj / take from the params

  // ? grab match project:
  const project = projectStore.project
    ? projectStore.project.find((p) => +projectId === p.id)
    : ""; //? match the params id with project in the store id.

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
      ? evaluationStore.evaluation.find((evaluation) =>
          evaluation.id === project.linkId.id ? evaluation : ""
        )
      : "";
  //? Criteria:  avg[0]= all
  const criteria = evaluations ? (
    evaluations.avg[teamId].criteria.map((criteria) => (
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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {/* SHARE BTN = on click give link */}
        <div style={{ fontSize: 70, marginLeft: 100 }}>
          <AiOutlineShareAlt />
        </div>
        {/* LOCK BTN */}
        <div style={{ fontSize: 70 }}>
          <AiFillLock />
        </div>
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
          <b> Total : {evaluations ? evaluations.avg[teamId].total : ""}%</b>
        </p>
      </u>
    </div>
  );
};

export default observer(TeamDetailPage);
