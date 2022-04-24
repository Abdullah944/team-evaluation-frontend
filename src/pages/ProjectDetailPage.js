import { observer } from "mobx-react";
import React from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
// ? STORES:
import projectStore from "../stores/projectStore";

const ProjectDetailPage = () => {
  const { projectId } = useParams(); //? {} to destructs the obj / take from the params

  const project = projectStore.project
    ? projectStore.project.find((p) => +projectId === p.id)
    : ""; //? match the params id with project in the store id.

  //?   Show teams:
  const teamList = project.team
    ? project.team.map((team) => <p key={team.id}>{team.name} </p>)
    : "";

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
          {teamList}
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
    </div>
  );
};

export default observer(ProjectDetailPage);
