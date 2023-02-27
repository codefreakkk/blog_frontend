import React from "react";
import logo from "../assets/img/blog/21.jpg"
import profile from "../assets/img/author/1.jpg";
import logo2 from "../assets/img/author/1.jpg"

function BlogPostSection() {
  return (
    <>
      <section class="post-single">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-lg-12">
              {/* <!--post-single-image--> */}
              <div class="post-single-image">
                <img src={logo} alt="" style={{height: "25vh"}}/>
              </div>

              <div class="post-single-body">
                {/* <!--post-single-title--> */}
                <div class="post-single-title">
                  <h2>
                    {" "}
                    Brand is just a perception, and perception will match
                    reality over time
                  </h2>
                  <ul class="entry-meta">
                    <li class="post-author-img">
                      <img src={profile} alt="" />
                    </li>
                    <li class="post-author">
                      {" "}
                      <a href="author.html">Meriam Smith</a>
                    </li>
                    <li class="entry-cat">
                      {" "}
                      <a href="blog-layout-1.html" class="category-style-1 ">
                        {" "}
                        <span class="line"></span> Livestyle
                      </a>
                    </li>
                    <li class="post-date">
                      {" "}
                      <span class="line"></span> february 10 ,2022
                    </li>
                  </ul>
                </div>

                {/* <!--post-single-content--> */}
                <div class="post-single-content">
                  <p>
                    Its sometimes her behaviour are contented. Do listening am
                    eagerness oh objection collected. Together gay feelings
                    continue
                  </p>
                  <h4> Make it simple, but significant. </h4>

                  <p>
                    Oh acceptance apartments up sympathize astonished
                    delightful.
                  </p>
                  <h4> Simplicity is the ultimate sophistication</h4>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irur
                  </p>
                  <div class="image-groupe">
                    <div class="image">
                      <img src="assets/img/blog/21.jpg" alt="" />
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>

                  {/* <!-- Quote --> */}
                  <div class="quote">
                    <div>
                      <i class="las la-quote-left"></i>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsam corrupti voluptatum, tenetur tempore
                        suscipit veniam molestiae exercitationem, praesentium ea
                        molestias doloremque alias voluptatibus fuga quibusdam
                        placeat aspernatur, harum blanditiis iure.
                      </p>
                      <small>Henry David Thoreau.</small>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                  <p>
                    Oh acceptance apartments up sympathize astonished
                    delightful. Waiting him new lasting towards. Continuing
                    melancholy especially so to. Me unpleasing impossible in
                    attachment announcing so astonished. What ask leaf may nor
                    upon door. Tended remain my do stairs. Oh smiling amiable am
                    so visited cordial in offices hearted. Oh acceptance
                    apartments up sympathize astonished delightful. Waiting him
                    new lasting towards. Continuing melancholy especially so to.
                    Me unpleasing impossible in attachment announcing so
                    astonished. What ask leaf may nor upon door. Tended remain
                    my do stairs. Oh smiling amiable am so visited cordial in
                    offices hearted. Waiting him new lasting towards. Continuing
                    melancholy especially so to. Me unpleasing impossible in
                    attachment announcing so astonished. What ask leaf may nor
                    upon door. Tended remain my do stairs. Quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <ul class="list">
                    <li>
                      Digital design is like painting, except the paint never
                      dries.{" "}
                    </li>
                    <li>Creativity is only as obscure as your reference</li>
                    <li>
                      Whitespace is like air: it is necessary for design to
                      breathe.
                    </li>
                    <li>You don’t have to be ‘a creative’ to be creative.</li>
                    <li>The best way to predict the future is to create it</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </div>

                {/* <!--post-single-bottom--> */}
                <div class="post-single-bottom">
                  <div class="tags">
                    <p>Tags:</p>
                    <ul class="list-inline">
                      <li>
                        <a>brading</a>
                      </li>
                      <li>
                        <a>brading</a>
                      </li>
                      <li>
                        <a>brading</a>
                      </li>
                      <li>
                        <a>brading</a>
                      </li>
                      <li>
                        <a>brading</a>
                      </li>
                    </ul>
                  </div>
                  <div class="social-media">
                    <p>Copy url :</p>
                    <ul class="list-inline">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!--post-single-author--> */}
                <div class="post-single-author ">
                  <div class="authors-info">
                    <div class="image">
                      <a href="author.html" class="image">
                        <img src={logo2} alt="" />
                      </a>
                    </div>
                    <div class="content">
                      <h4>sarah smith</h4>
                      <p>
                        {" "}
                        Etiam vitae dapibus rhoncus. Eget etiam aenean nisi
                        montes felis pretium donec veni. Pede vidi condimentum
                        et aenean hendrerit. Quis sem justo nisi varius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPostSection;
