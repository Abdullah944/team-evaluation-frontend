import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class EvaluationStore {
  evaluation = null;

  constructor() {
    makeAutoObservable(this);
  }

  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/evaluation/");
      this.evaluation = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  // ? Create evaluation:
  createEvaluation = async (data) => {
    try {
      const res = await instance.post("api/evaluation/", data);
      this.evaluation.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const evaluationStore = new EvaluationStore();
evaluationStore.fetchAll();

export default evaluationStore;
