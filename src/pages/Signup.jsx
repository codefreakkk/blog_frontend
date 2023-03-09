import { React, useState } from "react";
import ExploreNavbar from "../components/ExploreNavbar";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (
      userEmail.length == 0 ||
      userPassword.length == 0 ||
      userName.length == 0
    ) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post(
        "http://localhost:8000/api/v1/signup",
        {
          userName,
          userEmail,
          userPassword,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          navigate("/login");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }

  return (
    <>
      <ExploreNavbar />
      <section class="login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-8 m-auto">
              <div class="login-content">
                <h4>Sign up</h4>
                <p></p>
                <form action="#" class="sign-form widget-form " method="post">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User name*"
                      name="username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                      class="form-control"
                      placeholder="User email*"
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
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn-custom"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                  </div>
                  <p class="form-group text-center">
                    Already have a account ?{" "}
                    <NavLink to="/login">
                      <span class="btn-link">Sign In</span>{" "}
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;
