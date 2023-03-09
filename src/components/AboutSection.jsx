import React from "react";
import { NavLink } from "react-router-dom";
import about from "../assets/images/about.jpg"

function AboutSection() {
  return (
    <>
      <section class="about-us">
        <div class="container-fluid">
          <div class="about-us-area">
            <div class="row ">
              <div class="col-lg-12 ">
                <div class="images">
                  <img src={about} className="mb-5" alt="" />
                </div>

                <div class="description">
                  <h3>Thank you for checking out our blog.</h3>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus finibus, nisi vitae dapibus luctus, ante magna
                    auctor magna, aliquet lacinia mauris magna a ligula. Nunc
                    pharetra lectus eros, at blandit nisi iaculis vel. Donec
                    vehicula eros nibh, in efficitur libero luctus vel. Nunc ac
                    augue sapien. Praesent mollis dolor a velit porta, non
                    egestas mauris facilisis. Aliquam fermentum mauris ex, et
                    tristique tortor pellentesque.
                  </p>
                  <p>
                    Quisque venenatis tempor enim, quis mollis quam hendrerit
                    ut. Praesent tempor, eros in sodales dignissim, augue tellus
                    convallis eros, at ultrices nibh neque sed turpis. Cras
                    consequat placerat enim in varius. Suspendisse sem neque,
                    lobortis vitae tristique ac, sodales non eros. Aenean vel
                    dictum sem. Nullam ultricies cursus nisl id.
                  </p>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus finibus, nisi vitae dapibus luctus, ante magna
                    auctor magna, aliquet lacinia mauris magna a ligula. Nunc
                    pharetra lectus eros, at blandit nisi iaculis vel. Donec
                    vehicula eros nibh, in efficitur libero luctus vel. Nunc ac
                    augue sapien. Praesent mollis dolor a velit porta, non
                    egestas mauris facilisis. Aliquam fermentum mauris ex, et
                    tristique tortor pellentesque. Quisque venenatis tempor
                    enim, quis mollis quam hendrerit ut. Praesent tempor, eros
                    in sodales dignissim, augue tellus convallis eros, at
                    ultrices nibh neque sed turpis. Cras consequat placerat enim
                    in varius. Suspendisse sem neque, lobortis vitae tristique
                    ac, sodales non eros. Aenean vel dictum sem. Nullam
                    ultricies cursus nisl id.
                  </p>

                  <NavLink to="/contact">
                  <a href="" class="btn-custom">
                    Contact us
                  </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
