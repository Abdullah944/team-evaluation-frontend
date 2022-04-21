import { observer } from "mobx-react";
import React, { useState } from "react";
// ? TEAM BTN:
import ADDTeamButton from "./ADDTeamButton";
// ? STORES:
import teamStore from "../../stores/teamStore";

//? SHAPE OF ADDING ITEM:
const ADDTeamItem = ({ project }) => {
  //? team info holder:
  const [newTeam, setNewTeam] = useState("");
  //? hide & show form:
  const [visible, setVisible] = useState(false);

  // ? Grab what the user type:
  const handleChange = (e) =>
    setNewTeam({
      ...newTeam,
      [e.target.name]: e.target.value,
      project: project.id,
    });

  // ? SAVE:
  const handleSubmitSave = (e) => {
    e.preventDefault(); //? prevent refresh page.
    teamStore.createTeam(newTeam); //? create team
    setNewTeam({}); //?make me the team empty back.
    setVisible(!visible);
  };
  // ? CANCEL:
  const handleSubmitCancel = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setNewTeam({});
  };

  return (
    <div>
      <div className="accordion-item" style={{ border: "2px solid" }}>
        <h2 className="accordion-header">
          <div
            style={{
              position: "relative",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            {/* SHOW AND HIDE THE FORM BUTTON */}
            <ADDTeamButton visible={visible} setVisible={setVisible} />
            {visible && (
              <form onSubmit={handleSubmitSave}>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Team Name"
                  onChange={handleChange}
                  style={{
                    marginLeft: "10px",
                    width: "75%",
                    border: "0px",
                  }}
                ></input>

                {/* SAVE */}
                <div
                  style={{ position: "absolute", right: "10px", top: "1px" }}
                >
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
              </form>
            )}
          </div>
        </h2>
        <div
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        ></div>
      </div>
    </div>
  );
};

export default observer(ADDTeamItem);
