import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// ? BTN:
import SignoutButton from "../components/auth/SignoutButton";
// ? semester item & semester list:
import ADDSemesterItem from "../components/semester/ADDSemesterItem";
import SemesterList from "../components/semester/SemesterList";
// ? STORES:
import authStore from "../stores/authStore";

const AdminPage = () => {
  const navigate = useNavigate();
  // ? if the user not authorize go home :
  useEffect(() => {
    !authStore.user && navigate("/");
  });

  return (
    <div className="col-lg-8">
      <ADDSemesterItem />
      <div>
        <SemesterList />
      </div>
      <div className="m-4">
        <SignoutButton />
      </div>
    </div>
  );
};

export default observer(AdminPage);
