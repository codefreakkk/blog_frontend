import axios from "axios";
import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setLoginState(true);
    } else {
      navigate("/");
    }
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  function handleWrite() {
    if (loginState) {
      axios
        .post("http://localhost:8000/api/v1/createpost")
        .then((res) => {
          if (res.data.status === true) {
            navigate(`/write/${res.data.data._id}`);
          } else {
            alert("Cannot write some error");
          }
        })
        .catch((err) => alert("Some error occured"));
    }
  }

  return (
    <>
      <header class="header navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <div class="header-area">
            <div class="logo">
              <h4>Codefreak</h4>
            </div>
            <div class="header-navbar">
              <nav class="navbar">
                <div class="collapse navbar-collapse" id="main_nav">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <NavLink to="/">
                        <a
                          class="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Home
                        </a>
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink to="/explore">
                        <a
                          class="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Explore
                        </a>
                      </NavLink>
                    </li>

                    {loginState ? (
                      <li class="nav-item dropdown">
                        <a
                          onClick={handleWrite}
                          class="nav-link dropdown-toggle"
                        >
                          Write
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}

                    <li class="nav-item dropdown">
                      <NavLink to="/drafts">
                        <a
                          class="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Drafts
                        </a>
                      </NavLink>
                    </li>

                    <li class="nav-item dropdown">
                      <NavLink to="/about">
                        <a
                          class="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          About
                        </a>
                      </NavLink>
                    </li>

                    {loginState ? (
                      <div></div>
                    ) : (
                      <li class="nav-item dropdown">
                        <NavLink to="/login">
                          <a
                            class="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            login
                          </a>
                        </NavLink>
                      </li>
                    )}

                    {loginState ? (
                      <div></div>
                    ) : (
                      <li class="nav-item dropdown">
                        <NavLink to="/signup">
                          <a
                            class="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Signup
                          </a>
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>

            <div class="header-right">
              <div class="botton-sub mr-4">
                <a
                  class="btn btn-dark"
                  onClick={handleLogout}
                  style={{ color: "white" }}
                >
                  {loginState ? "Logout" : "Subscribe"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
