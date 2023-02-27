import React from "react";
import logo from "../assets/img/blog/14.jpg"

function PopularPostThumbnail() {
  return (
    <>
      <li class="small-post">
        <div class="small-post-image">
          <a href="post-single.html">
            <img src={logo} alt="" />
            <small class="nb">4</small>
          </a>
        </div>
        <div class="small-post-content">
          <p>
            <a href="post-single.html">
              All happiness depends on a leisurely breakfast
            </a>
          </p>
          <small>
            {" "}
            <span class="slash"></span>3 mounth ago
          </small>
        </div>
      </li>
    </>
  );
}

export default PopularPostThumbnail;
