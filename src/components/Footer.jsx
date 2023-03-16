import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="footer-area">
          <div class="footer-area-content">
            <div class="container">
              <div class="row ">
                <div class="col-md-3">
                  <div class="menu">
                    <h6>Menu</h6>
                    <ul>
                      <NavLink to="/" style={{ textDecoration: "none" }}>
                        <li>
                          <a>Homepage</a>
                        </li>
                      </NavLink>
                      <NavLink to="/about" style={{ textDecoration: "none" }}>
                        <li>
                          <a>about us</a>
                        </li>
                      </NavLink>
                      <NavLink to="/contact" style={{ textDecoration: "none" }}>
                        <li>
                          <a>contact us</a>
                        </li>
                      </NavLink>
                      <NavLink to="/" style={{ textDecoration: "none" }}>
                        <li>
                          <a>privacy</a>
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="newslettre">
                    <div class="newslettre-info">
                      <h3>Subscribe To OurNewsletter</h3>
                      <p>
                        Sign up for free and be the first to get notified about
                        new posts.
                      </p>
                    </div>

                    <form action="#" class="newslettre-form">
                      <div class="form-flex">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Your Email Adress"
                            required="required"
                          />
                        </div>
                        <button class="submit-btn" type="submit">
                          <i class="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="menu">
                    <h6>Follow us</h6>
                    <ul>
                      <li>
                        <a href="#">facebook</a>
                      </li>
                      <li>
                        <a href="#">instagram</a>
                      </li>
                      <li>
                        <a href="#">youtube</a>
                      </li>
                      <li>
                        <a href="#">twitter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-area-copyright">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="copyright">
                    <p>© 2023 Codefreak, All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
