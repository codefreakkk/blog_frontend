import React from "react";

function Header() {
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
                      <a
                        class="nav-link dropdown-toggle"
                        href="index.html"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Explore
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Write
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        About
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div class="header-right">
              <div class="botton-sub mr-4">
                <a href="signup.html" class="btn-subscribe">
                  Subscribe
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
