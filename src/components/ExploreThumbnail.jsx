import React from "react";
import logo from "../assets/img/author/5.jpg";

function ExploreThumbnail({id, title, userName, previewImage}) {
  return (
    <>
      <div class=" col-lg-6 ">
        <div class="post-list post-list-style3">
          <div class="post-list-content">
            <h4 class="entry-title">
              <a href="">
                {title}
              </a>
            </h4>
            <ul class="entry-meta">
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
