import { observer } from "mobx-react";
import React, { useState } from "react";
// ? Project BTN:
import ADDProjectButton from "./ADDProjectButton";
// ? STORES:
import projectStore from "../../stores/projectStore";

//? SHAPE OF ADDING PROJECT:
const ADDProjectItem = ({ semester }) => {
  //? project info holder:
  const [newProject, setNewProject] = useState("");
  //? hide & show form:
  const [visible, setVisible] = useState(false);

  const handleChange = (e) =>
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
      semester: semester.id,
    });

  const handleSubmitSave = (e) => {
    e.preventDefault();
    projectStore.createProject(newProject);
    setNewProject({});
    setVisible(!visible);

    alert("PROJECT created");
  };

  const handleSubmitCancel = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setNewProject({});
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
            <ADDProjectButton visible={visible} setVisible={setVisible} />
            {visible && (
              <form onSubmit={handleSubmitSave}>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Project Name"
                  onChange={handleChange}
                  style={{
                    marginLeft: "10px",
                    width: "75%",
                    border: "0px",
                  }}
                ></input>
                <input
                  name="weight"
                  className="form-control"
                  type="text"
                  placeholder="Enter Weight"
                  onChange={handleChange}
                  style={{
                    marginLeft: "10px",
                    width: "75%",
                    border: "0px",
                  }}
                ></input>

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

export default observer(ADDProjectItem);
