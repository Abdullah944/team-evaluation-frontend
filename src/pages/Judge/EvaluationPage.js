import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import judgeStore from "../../stores/judgeStore";

const EvaluationPage = ({ judge, project, semester }) => {
  const handleSubmit = (e) => {
    judgeStore.updateJudge(judge);
  };
  const teamList = judge.grade
    ? judge.grade.map((team) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={team.team_id}>
            <Accordion.Header>{team.team_name}</Accordion.Header>
            <Accordion.Body>
              {/* Criteria MAP NAME */}
              {team.grade.map((criteria) => {
                return (
                  <div>
                    <p>{criteria.criteria_name}</p>
                    <input
                      name="number"
                      className="form-control"
                      type="text"
                      placeholder="Enter Your evaluation from 1 to 10"
                      style={{
                        marginLeft: "10px",
                        width: "75%",
                        border: "0px",
                      }}
                      onChange={(e) => (criteria.grade = +e.target.value)}
                    />
                    <br />
                    {/* NOTES */}
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))
    : "";
  console.log(judge);
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>Hello {judge.name}</h2>
      <p>
        please watch the presentations of the following teams carefully, and
        judge them according to the criteria below
      </p>

      {/* Map Criteria & TEAM NAME */}
      {teamList}
      {/* Navigate to thank you page + create evaluation to save in the backend and it's should be press able at the end only */}
      <Link to={"/ThankyouPage"} onClick={handleSubmit}>
        <h2>Done</h2>
      </Link>
    </div>
  );
};

export default EvaluationPage;
