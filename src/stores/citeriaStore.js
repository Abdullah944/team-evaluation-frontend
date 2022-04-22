import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class CriteriaStore {
  criteria = null;

  constructor() {
    makeAutoObservable(this);
  }

  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/criteria/");
      this.criteria = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  // ? Create criteria:
  createCriteria = async (data) => {
    try {
      const res = await instance.post("api/criteria/", data);
      this.criteria.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const criteriaStore = new CriteriaStore();
criteriaStore.fetchAll();

export default criteriaStore;
