import { observer } from "mobx-react";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
// ? STORES:
import projectStore from "../stores/projectStore";
import teamStore from "../stores/teamStore";

// ? show team Detail:
const TeamDetailPage = () => {
  const { projectId } = useParams(); //? {} to destructs the obj / take from the params

  //? grab a project:
  const project = projectStore.project
    ? projectStore.project.find((p) => +projectId === p.id)
    : ""; //? match the params id with project in the store id.

  //   //? grab a team:
  //   const team = project.team ? project.team.find((t) => +teamId === t.id) : ""; //? match the params id with team in the store id.
  //   console.log(team);

  //? TEAM ID:
  const team = teamStore.teams
    ? teamStore.teams.find((team) => String(team.id) === String(team))
    : null;
  console.log(team);
  //?   Show teams:
  //   const teamList = project.team
  //     ? project.team.map((team) => (
  //         <NavLink key={team.id} to={`/teamDetail/${team.id}`}>
  //           {team.name}
  //         </NavLink>
  //       ))
  //     : "";

  //? show criteria:
  const criteriaList = project.criteria
    ? project.criteria.map((criteria) => (
        <tr key={criteria.id}>
          <td>{criteria.name}</td>
          <td>0</td>
          <td>{criteria.weight}</td>
          <td>0</td>
        </tr>
      ))
    : "";

  return (
    <div>
      <h1>{project.name}</h1>
      <h3>
        <u style={{ display: "flex", justifyContent: "space-evenly" }}>
          teamList
        </u>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Avg. Score</th>
            <th>Weight</th>
            <th>Weighted Avg.</th>
          </tr>
        </thead>
        <tbody>{criteriaList}</tbody>
      </Table>
      <u>
        <p>
          <b style={{ color: "red" }}> Total :</b> Total Number %
        </p>
      </u>
      <div>
        <h2>Note:</h2>
        <hr />
        <p>this is good team</p>
        <hr />
      </div>
    </div>
  );
};

export default observer(TeamDetailPage);
