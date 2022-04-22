import { observer } from "mobx-react";
import React, { useState } from "react";
// ? Project BTN:
import ADDProjectButton from "./ADDProjectButton";
// ? STORES:
import projectStore from "../../stores/projectStore";
import { Button, Dropdown } from "react-bootstrap";
import criteriaStore from "../../stores/citeriaStore";

//? SHAPE OF ADDING PROJECT:
const ADDProjectItem = ({ semester }) => {
  //? project info holder:
  const [newProject, setNewProject] = useState("");
  //? hide & show form (Project):
  const [visible, setVisible] = useState(false);

  // ----  criteria:
  const [visibleCriteria, setvisibleCriteria] = useState(false);
  const [criteria, setCriteria] = useState([]);
  const [holdCriteriaInfo, setHoldCriteriaInfo] = useState("");

  // ? Grab what the user type:
  const handleChange = (e) =>
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
      semester: semester.id,
    });

  // ? SAVE:
  const handleSubmitSave = (e) => {
    e.preventDefault(); //? prevent refresh page.
    const project = { ...newProject, criteria: criteria };
    projectStore.createProject(project); //? create project
    setCriteria([]);
    setNewProject({}); //?make me the project empty back.
    setVisible(!visible);
  };
  // ? Cancel:
  const handleSubmitCancel = (e) => {
    e.preventDefault();
    setVisible(!visible);
    setNewProject({});
  };
  // ----------------------------------------------- Criteria handling>
  // ? handleChange  criteria
  const handleChangeCriteria = (e) =>
    setHoldCriteriaInfo({
      ...holdCriteriaInfo,
      [e.target.name]: e.target.value,
    });
  // ? SAVE criteria:
  const handleSubmitSaveCriteria = (e) => {
    e.preventDefault(); //? prevent refresh page.
    criteriaStore.createCriteria(holdCriteriaInfo);
    setHoldCriteriaInfo({});
    setvisibleCriteria(!visibleCriteria);
  };
  // ? criteria cancel:
  const handleSubmitCancelCriteria = (e) => {
    e.preventDefault();
    setvisibleCriteria(!visibleCriteria);
    setHoldCriteriaInfo({});
  };

  //? make the adding criteria:
  const handleCriteriaId = (id) => {
    const foundCriteria = criteria.find((criteria) => criteria === id);
    if (foundCriteria) {
      const pop = [...criteria];

      setCriteria(pop.filter((criteria) => criteria !== id));
    } else {
      setCriteria([...criteria, id]);
    }
  };

  //? criteria list to show in the drop down taken from the store:
  const criteriaList = criteriaStore.criteria.map((criteria_) => (
    <Dropdown.Item
      key={criteria_.id}
      onClick={() => handleCriteriaId(criteria_.id)}
      style={
        criteria.includes(criteria_.id) ? { backgroundColor: "lightBlue" } : {}
      }
    >
      {criteria_.name}
    </Dropdown.Item>
  ));
  // ---------------------------------------
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
                {/* NAME */}
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
                />

                {/* weight */}
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
                />

                {/* criteria */}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Criteria
                  </Dropdown.Toggle>
                  <Dropdown.Menu>{criteriaList}</Dropdown.Menu>
                </Dropdown>

                {/* handleCriteriaButton */}
                <Button onClick={() => setvisibleCriteria(!visibleCriteria)}>
                  create Criteria
                </Button>
                {/*  Criteria FORM */}

                {/* SAVE  */}
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

                  {/* Cancel  */}
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
            {visibleCriteria && (
              <form onSubmit={handleSubmitSaveCriteria}>
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  onChange={handleChangeCriteria}
                  style={{
                    marginLeft: "10px",
                    width: "75%",
                    border: "0px",
                  }}
                />
                <input
                  name="weight"
                  className="form-control"
                  type="text"
                  placeholder="Enter Weight"
                  onChange={handleChangeCriteria}
                  style={{
                    marginLeft: "10px",
                    width: "75%",
                    border: "0px",
                  }}
                />
                {/* SAVE criteria */}
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "200px",
                  }}
                >
                  <button
                    className="btn btn-translucent-success"
                    style={{ marginRight: "10px", padding: "5px" }}
                    onClick={handleSubmitSaveCriteria}
                    type="submit"
                  >
                    SAVE Criteria
                  </button>

                  {/* Cancel criteria */}
                  <button
                    className="btn btn-translucent-danger"
                    style={{ padding: "5px" }}
                    onClick={handleSubmitCancelCriteria}
                  >
                    CANCEL Criteria
                  </button>
                </div>
              </form>
            )}
          </div>
        </h2>
        <div
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        />
      </div>
    </div>
  );
};

export default observer(ADDProjectItem);
