import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class JudgeStore {
  judge = null;

  constructor() {
    makeAutoObservable(this);
  }

  //? GET ALL:
  fetchAll = async () => {
    try {
      const res = await instance.get("api/judge/");
      this.judge = res.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  // ? Create judge:
  createJudge = async (data) => {
    try {
      const res = await instance.post("api/judge/", data);
      this.judge.push(res.data);
    } catch (error) {
      alert(error.response.data.name);
      console.log(error.response);
    }
  };
}

const judgeStore = new JudgeStore();
judgeStore.fetchAll();

export default judgeStore;
