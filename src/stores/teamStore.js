import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import projectStore from "./projectStore";
import semesterStore from "./semesterStore";

class TeamStore {
  team = null;

  constructor() {
    makeAutoObservable(this);
  }
  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/team/");
      this.team = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  //? CREATE:
  createTeam = async (data) => {
    try {
      const res = await instance.post("api/team/", data);
      this.team.push(res.data);
      await projectStore.fetchAll(); //? to make sure the project to get null
      await semesterStore.fetchAll(); //? make the team updated with the semester & project
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const teamStore = new TeamStore();
teamStore.fetchAll();

export default teamStore;
