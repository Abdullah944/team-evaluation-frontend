import React, { useState } from "react";
import judgeStore from "../../stores/judgeStore";

const JudgeNamePage = () => {
  const [newJudge, setNewJudge] = useState("");

  // ? Grab what the user type:
  const handleChange = (e) =>
    setNewJudge({
      ...newJudge,
      [e.target.name]: e.target.value,
    });

  // ? SAVE:
  const handleSubmitSave = (e) => {
    e.preventDefault(); //? prevent refresh page.
    judgeStore.createJudge(newJudge); //? create judge
    setNewJudge({}); //?make me the Judge empty back.
  };

  // ? Cancel:
  const handleSubmitCancel = (e) => {
    e.preventDefault();
    setNewJudge({});
  };

  return (
    <div>
      <input
        name="name"
        className="form-control"
        type="text"
        placeholder="Enter Your name"
        onChange={handleChange}
        style={{
          marginLeft: "10px",
          width: "75%",
          border: "0px",
        }}
      />
      {/* SAVE */}
      <div style={{ position: "absolute", right: "10px", top: "1px" }}>
        <button
          className="btn btn-translucent-success"
          style={{ marginRight: "10px", padding: "5px" }}
          onClick={handleSubmitSave}
          type="submit"
        >
          SAVE
        </button>
        {/* Cancel */}
        <button
          className="btn btn-translucent-danger"
          style={{ padding: "5px" }}
          onClick={handleSubmitCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default JudgeNamePage;
