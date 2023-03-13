import { React, useEffect, useState } from "react";
import logo from "../assets/img/blog/21.jpg";
import profile from "../assets/images/user.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function BlogPostSection() {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [content, setContent] = useState();
  const [blogState, setBlogState] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getblogbyid/${id}`)
      .then((res) => {
        const data = res.data;
        if (data.status === true) {
          setBlog(data.data);
          let parsed = JSON.parse(data.data.content);
          let images = data.data.images;
          let index = 0;
          let filteredData = parsed.filter((result) => {
            if (result.id == "image") {
              return (result.value = images[index++]);
            } else {
              return result;
            }
          });
          setContent(filteredData);
          setBlogState(false);
        } else {
          alert("Some error occured");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (blogState) {
    <div>Loading</div>;
  } else {
    return (
      <>
        <section class="post-single">
          <div class="container-fluid ">
            <div class="row ">
              <div class="col-lg-12">
                {/* <!--post-single-image--> */}
                <div class="post-single-image">
                  <img
                    src={blog.previewImage}
                    alt=""
                    style={{ height: "25vh" }}
                  />
                </div>

                <div class="post-single-body">
                  {/* <!--post-single-title--> */}
                  <div class="post-single-title">
                    <h2> {blog.title}</h2>
                    <ul class="entry-meta">
                      <li class="post-author-img">
                        <img src={profile} alt="" />
                      </li>
                      <li class="post-author">
                        {" "}
                        <a href="" style={{ color: "gray" }}>
                          Contributed By
                        </a>
                      </li>
                      <li class="entry-cat">
                        {" "}
                        <a href="" class="category-style-1">
                          {" "}
                          <span class="line"></span>{" "}
                          <span style={{ fontWeight: "700", color: "black" }}>
                            {blog.userName}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <!--post-single-content--> */}
                  <div class="post-single-content">
                    {content.map((result, index) => {
                      if (result.id === "text") {
                        const text = result.value.split(`\n`);
                        return text.map((value) => {
                          return <p>{value}</p>;
                        });
                      }
                      if (result.id == "header") {
                        return <h4>{result.value}</h4>;
                      }
                      if (result.id === "quote") {
                        return (
                          <div class="quote">
                            <div>
                              <i class="las la-quote-left"></i>
                            </div>
                            <div>
                              <p>{result.value}</p>
                            </div>
                          </div>
                        );
                      }
                      if (result.id === "list") {
                        return (
                          <ul class="list">
                            <li>{result.value}</li>
                          </ul>
                        );
                      }
                      if (result.id === "image") {
                        return (
                          <div class="post-single-image">
                            <img
                              src={result.value}
                              alt=""
                              style={{ height: "25vh" }}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* <!--post-single-bottom--> */}
                  <div class="post-single-bottom">
                    <div class="tags">
                      <p>Tags:</p>
                      <ul class="list-inline">
                        {content.map((result) => {
                          if (result.id == "tags") {
                            const tags = result.value.split(" ");
                            return tags.map((tag) => {
                              return <li>{tag}</li>;
                            });
                          }
                        })}
                      </ul>
                    </div>
                    {/* <div class="social-media">
                      <p>Copy url :</p>
                      <ul class="list-inline">
                        <li>
                          <a href="#">
                            <i class="fab fa-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default BlogPostSection;
