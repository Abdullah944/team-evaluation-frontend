import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ProjectStore {
  project = null;

  constructor() {
    makeAutoObservable(this);
  }
  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/project/");
      this.project = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  createProject = async (data) => {
    try {
      const res = await instance.post("api/project/", data);
      this.project.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const projectStore = new ProjectStore();
projectStore.fetchAll();

export default projectStore;