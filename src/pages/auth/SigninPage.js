import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// ? STORES:
import authStore from "../../stores/authStore";

const SigninPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    // ? make sure
    authStore.signin(user, navigate);
  };
  return (
    <div>
      <h1>SIGN-IN PAGE</h1>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 ">
            <form onSubmit={handleSubmit}>
              {/* EMAIL */}
              <div className="form-group">
                <label>username</label>
                <input
                  onChange={handleChange}
                  placeholder="Enter username"
                  name="username"
                />
              </div>
              {/* PASSWORD */}
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <br />
              {/* SUBMIT BTN */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
