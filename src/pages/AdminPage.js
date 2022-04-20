import { observer } from "mobx-react";
import React from "react";
// ? semester item & semester list:
import ADDSemesterItem from "../components/semester/ADDSemesterItem";
import SemesterList from "../components/semester/SemesterList";

const AdminPage = () => {
  return (
    <div className="col-lg-8">
      <ADDSemesterItem />
      <div>
        <SemesterList />
      </div>
    </div>
  );
};

export default observer(AdminPage);
