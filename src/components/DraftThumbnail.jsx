import React from 'react'
import logo from "../assets/img/author/5.jpg";


function DraftThumbnail() {
  return (
    <>
        <div class="post-list post-list-style5">
        <div class="post-list-content">
          <h4 class="entry-title">
            <a href="post-single.html">
              The function of design is letting design function
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
                <span class="line"></span>design
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
        </div>
      </div>
    </>
  )
}

export default DraftThumbnail