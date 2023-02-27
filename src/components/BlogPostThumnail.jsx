import React from "react";
import logo from "../assets/img/blog/21.jpg";

function BlogPostThumnail() {
  return (
    <>
      <div class="post-list post-list-style4">
        <div class="post-list-image">
          <a href="post-single.html">
            <img src={logo} alt="" />
          </a>
        </div>
        <div class="post-list-content">
          <ul class="entry-meta">
            <li class="entry-cat">
              <a class="category-style-1">marketing</a>
            </li>
            <li class="post-date">
              {" "}
              <span class="line"></span> february 10 ,2022
            </li>
          </ul>
          <h5 class="entry-title">
            <a>The best marketing doesn't feel like marketing</a>
          </h5>

          <div class="post-btn">
            <a class="btn-read-more">
              Continue Reading <i class="las la-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostThumnail;
