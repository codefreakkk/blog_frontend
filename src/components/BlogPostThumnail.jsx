import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/blog/21.jpg";

function BlogPostThumnail({ id, title, previewImage, userName }) {
  return (
    <>
      <div class="post-list post-list-style4">
        <div class="post-list-image">
          <a href="">
            <img style={{ height: "20vh" }} src={previewImage} alt="" />
          </a>
        </div>
        <div class="post-list-content">
          <h3 class="entry-title">
            <NavLink to={`/blog/${id}`}>
              <a>{title.substring(0, 80)}</a>
            </NavLink>
          </h3>
          <ul class="entry-meta">
            <li class="entry-cat">
              <a class="category-style-1">Contributed By </a>
            </li>
            <li class="post-date">
              {" "}
              <span class="line"></span> {userName}
            </li>
          </ul>
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
