import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class EvaluationStore {
  link = "";
  evaluation = null;

  constructor() {
    makeAutoObservable(this);
  }

  //? GET EVALUATION:
  getEvaluation = async () => {
    try {
      const res = await instance.get(`api/evaluation/`);
      this.evaluation = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //? AddEvaluation
  addEvaluation = async (projectId) => {
    try {
      const response = await instance.post("/api/evaluation/", {
        project: projectId,
      });
      this.evaluations.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //$ LOCK PROJECT:
  lockProject = async (evaluationInfo) => {
    try {
      await instance.put(`api/evaluation/${evaluationInfo.id}/`, {
        ...evaluationInfo,
        isLock: true,
      });
      await this.getEvaluation();
    } catch (error) {
      console.log(error.response);
    }
  };
}

const evaluationStore = new EvaluationStore();
evaluationStore.getEvaluation();
export default evaluationStore;
