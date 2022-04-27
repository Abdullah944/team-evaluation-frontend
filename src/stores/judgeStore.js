import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class JudgeStore {
  judge = null;

  constructor() {
    makeAutoObservable(this);
  }

  // ? ADD JUDGE:
  addJudge = async (judgeData, navigate) => {
    try {
      const res = await instance.post("api/judge/", judgeData);
      this.judge.push(res.data);
      navigate(`./${res.data.id}`);
    } catch (error) {
      console.log(error.response);
    }
  };
  // ? GET JUDGE:
  getJudge = async () => {
    try {
      const res = await instance.get(`api/judge/`);
      this.judge = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // ? UPDATE JUDGE:
  updateJudge = async (judge) => {
    try {
      await instance.put(`api/judge/${judge.id}/`, judge);
    } catch (error) {
      console.log(error.response);
    }
  };
}

const judgeStore = new JudgeStore();
judgeStore.getJudge();

export default judgeStore;
