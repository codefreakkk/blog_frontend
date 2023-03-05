import React from "react";
import logo from "../assets/img/author/5.jpg";

function ExploreThumbnail() {
  return (
    <>
      <div class=" col-lg-6 ">
        <div class="post-list post-list-style3">
          <div class="post-list-content">
            <h4 class="entry-title">
              <a href="post-single.html">
                Your genetics load the gun your lifestyle pulls the trigger.
              </a>
            </h4>
            <ul class="entry-meta">
              <li class="post-author-img">
                <img src={logo} alt="" />
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
            <div class="post-exerpt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est
                minus iste in accusantium repellat repudiandae nulla blanditiis
                iusto dolores!
              </p>
            </div>
            <div class="post-btn">
              <a href="post-single.html" class="btn-read-more">
                Continue Reading <i class="las la-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreThumbnail;
