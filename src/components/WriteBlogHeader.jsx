import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function WriteBlogHeader() {
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

  return (
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

                  <li class="nav-item dropdown">
                    <NavLink to="/categories">
                      <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Categories
                      </a>
                    </NavLink>
                  </li>

                  {loginState ? (
                    <li class="nav-item dropdown">
                    <NavLink to="/drafts">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Drafts
                      </a>
                    </NavLink>
                  </li>
                  ) : <></>}
                  
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
  );
}

export default WriteBlogHeader;
