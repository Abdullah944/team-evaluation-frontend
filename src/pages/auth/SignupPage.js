import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
// ? STORES:
import authStore from "../../stores/authStore";

function SignupPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user, navigate);
  };
  return (
    <div>
      <h1>SIGNUP PAGE</h1>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 ">
            <form onSubmit={handleSubmit}>
              {/* EMAIL */}
              <div className="form-group">
                <label>Email address</label>
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
                  name="password"
                  placeholder="Password"
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
}

export default observer(SignupPage);
