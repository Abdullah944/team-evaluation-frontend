import { observer } from "mobx-react";
import React, { useState } from "react";
// ? semester BTN :
import ADDsemesterButton from "./ADDsemesterButton";
//? STORES:
import semesterStore from "../../stores/semesterStore";

//? SHAPE OF ADDING ITEM:
const ADDSemesterItem = () => {
  //? semester info holder:
  const [newSemester, setNewSemester] = useState("");
  //? hide & show form:
  const [visible, setVisible] = useState(false);

  // ? Grab what the user type:
  const handleChange = (e) =>
    setNewSemester({
      ...newSemester,
      [e.target.name]: e.target.value,
    });
  // ? SAVE:
  const handleSubmitSave = (e) => {
    e.preventDefault(); //? prevent refresh page.
    semesterStore.createSemester(newSemester); //? create semester
    setNewSemester({}); //?make me the semester empty back.
    setVisible(!visible);
  };
  // ? Cancel:
  const handleSubmitCancel = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setNewSemester({});
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
            <ADDsemesterButton visible={visible} setVisible={setVisible} />
            {visible && (
              <form onSubmit={handleSubmitSave}>
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

export default observer(ADDSemesterItem);
