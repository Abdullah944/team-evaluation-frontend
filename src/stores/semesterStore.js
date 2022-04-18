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
      const res = await instance.get("api/semester");
      this.semester = res.data;
      console.log(this.semester[0].name);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  createSemester = async (data) => {
    try {
      const res = await instance.post("api/semester/", data);
      // console.log("data", res.data);
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
