import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class SemesterStore {
  semester = null;

  constructor() {
    makeAutoObservable(this);
  }
  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/semester/");
      this.semester = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  //? CREATE:
  createSemester = async (data) => {
    try {
      const res = await instance.post("api/semester/", data);
      this.semester.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const semesterStore = new SemesterStore();
semesterStore.fetchAll();

export default semesterStore;
