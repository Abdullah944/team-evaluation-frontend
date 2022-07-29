import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  //? SET_USER:
  setUser = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  };

  //? SIGN_OUT:
  signout = () => {
    localStorage.removeItem("token");
    this.user = null;
  };

  //? SIGN_UP:
  signup = async (userData, navigate) => {
    try {
      await instance.post("/api/users/", userData);
      await this.signin(userData, navigate);
    } catch (error) {
      console.log(error.response);
    }
  };

  //? SIGN_IN:
  signin = async (userData, navigate) => {
    try {
      const res = await instance.post("/api/jwt/create/", userData);
      console.log(res.data);
      this.setUser(res.data.access);

      const res2 = await instance.get("/api/users/me/");
      console.log(res2.data);
      this.user = res2.data;
      navigate("/Admin");
    } catch (error) {
      console.log(error.response);
    }
  };

  //? CHECK_FOR_TOKEN:
  checkForToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        this.setUser(token);
        const res2 = await instance.get("/api/users/me/");
        this.user = res2.data;
      } catch (error) {
        this.signout();
      }
    } else this.signout();
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
