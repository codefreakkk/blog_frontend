import { React, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    axios.post("http://localhost:8000/api/v1/login", {
        userEmail, userPassword
    })
    .then((res) => {
        const data = res.data;
        if (data.success === true) {
            // need to work on this feature
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.userEmail);
            localStorage.setItem("name", data.userName);
            navigate("/explore")
        }
        else {
          alert("Login failed")
        }
    })
    .catch((err) => alert("Some error occured"));
  }

  return (
    <>
      {/* <Header /> */}
      <section class="login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-8 m-auto">
              <div class="login-content">
                <h4>Login</h4>
                <p></p>
                <form action="#" class="sign-form widget-form " method="post">
                  <div class="form-group">
                    <input
                      type="text"
                      onChange={(e) => setUserEmail(e.target.value)}
                      class="form-control"
                      placeholder="Username*"
                      name="username"
                      value={userEmail}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password*"
                      name="password"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  </div>
                  <div class="sign-controls form-group">
                    <a href="#" class="btn-link ">
                      Forgot Password?
                    </a>
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn-custom"
                      onClick={handleSubmit}
                    >
                      Login 
                    </button>
                  </div>
                  <p class="form-group text-center">
                    Don't have an account?{" "}
                    <NavLink to="/signup">
                      <span class="btn-link">Create One</span>{" "}
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
