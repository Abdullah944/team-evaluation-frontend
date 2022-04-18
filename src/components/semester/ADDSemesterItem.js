import React, { useState } from "react";
import semesterStore from "../../stores/semesterStore";

//? SHAPE OF ADDING ITEM:
const ADDSemesterItem = () => {
  const [newSemester, setNewSemester] = useState("");

  const handleChange = (e) =>
    setNewSemester({
      ...newSemester,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    semesterStore.createSemester(newSemester);
  };
  return (
    <div>
      {" "}
      <div className="accordion-item" style={{ border: "2px solid" }}>
        <h2 className="accordion-header">
          <div
            style={{
              position: "relative",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          >
            <form onSubmit={() => handleSubmit}>
              <input
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter semester name"
                onChange={handleChange}
                style={{
                  marginLeft: "10px",
                  width: "75%",
                  border: "0px",
                }}
              ></input>

              <div style={{ position: "absolute", right: "10px", top: "1px" }}>
                <button
                  className="btn btn-translucent-success"
                  style={{ marginRight: "10px", padding: "5px" }}
                  onClick={() => handleSubmit}
                  type="submit"
                >
                  SAVE
                </button>
                <button
                  className="btn btn-translucent-danger"
                  style={{ padding: "5px" }}
                  onClick={() => handleSubmit}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </h2>
        <div
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        ></div>
      </div>
      ;
    </div>
  );
};

export default ADDSemesterItem;
