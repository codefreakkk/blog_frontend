import React from "react";
import { NavLink } from "react-router-dom";

function ExploreThumbnail({ id, title, userName, previewImage }) {
  return (
    <>
      <div class=" col-lg-6 ">
        <div class="post-list post-list-style3">
          <div class="post-list-content">
            <h4 class="entry-title">
              <NavLink to={`/blog/${id}`}>
                <a href="">{title.substring(0, 40)}...</a>
              </NavLink>
            </h4>
            <ul class="entry-meta" style={{marginLeft: "-30px"}}>
              <li class="post-author-img">
                <img src={previewImage} alt="" />
              </li>
              <li class="post-author">
                {" "}
                <a>Contributed By</a>
              </li>
              <li class="entry-cat">
                {" "}
                <a href="blog-layout-1.html" class="category-style-1 ">
                  {" "}
                  <span class="line"></span> {userName}
                </a>
              </li>
            </ul>
            {/* <div class="post-exerpt">
            </div> */}
            <NavLink
              to={`/blog/${id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div class="post-btn">
                <a href="" style={{ color: "black", textDecoration: "none",textTransform: "none" }}>
                  Continue Reading <i class="las la-long-arrow-alt-right"></i>
                </a>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreThumbnail;
