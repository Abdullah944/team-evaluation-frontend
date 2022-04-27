import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const EvaluationPage = () => {
  const [judgeMarks, setJudgeMarks] = useState("");

  // ? Grab what the user type:
  const handleChange = (e) =>
    setJudgeMarks({
      ...judgeMarks,
      [e.target.name]: e.target.value,
    });

  return (
    <div>
      <h1>Project name</h1>
      <h2>Hello Judge name</h2>
      <p>
        please watch the presentations of the following teams carefully, and
        judge them according to the criteria below
      </p>

      {/* Map Criteria & TEAM NAME */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>TEAM #1 MAP</Accordion.Header>
          <Accordion.Body>
            {/* Criteria MAP NAME */}
            CRITERIA MAP
            {/* evaluation number */}
            <input
              name="number"
              className="form-control"
              type="text"
              placeholder="Enter Your evaluation from 1 to 10"
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                width: "75%",
                border: "0px",
              }}
            />
            {/* NOTES */}
            <input
              name="notes"
              className="form-control"
              type="text"
              placeholder="Notes:"
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                width: "75%",
                border: "0px",
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Navigate to thank you page + create evaluation to save in the backend and it's should be press able at the end only */}
      <h2>Done</h2>
    </div>
  );
};

export default EvaluationPage;
