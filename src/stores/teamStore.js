import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

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
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const teamStore = new TeamStore();
teamStore.fetchAll();

export default teamStore;
