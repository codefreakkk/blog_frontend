import { React, useEffect, useState } from "react";
import BlogPostThumnail from "./BlogPostThumnail";
import StayConnected from "./StayConnected";
import Tags from "./Tags";
import NewsLetter from "./NewsLetter";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

function Section2() {
  const [blog, setBlog] = useState([]);
  const [blogState, setBlogState] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallposts")
      .then((res) => {
        if (res.data.status === true) {
          setBlog(res.data.data);
          setBlogState(false);
        } else {
          alert("Some error occured");
        }
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }, []);

  return (
    <>
      <section class="section-feature-1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 oredoo-content">
              <div class="theiaStickySidebar">
                <div class="section-title">
                  <h3>recent Articles </h3>
                  <p>
                    Discover the most outstanding articles in all topics of
                    life.
                  </p>
                </div>

                {/* blog post start */}
                {blogState == true ? (
                  <div className="mt-2">
                    <PulseLoader color="#747373" />
                  </div>
                ) : (
                  blog.map((result, index) => {
                    // console.log(result);
                    return (
                      <BlogPostThumnail
                        key={index}
                        title={result.title}
                        previewImage={result.previewImage}
                        userName={result.userName}
                      />
                    );
                  })
                )}
                {/* blog post end */}
              </div>
            </div>

            <div class="col-lg-4 oredoo-sidebar">
              <div class="theiaStickySidebar">
                <div class="sidebar">
                  <div class="widget">
                    <div class="widget-title">
                      <h5>Search</h5>
                    </div>
                    <div class=" widget-search">
                      <form>
                        <input
                          type="search"
                          id="gsearch"
                          name="gsearch"
                          placeholder="Search ...."
                        />
                        <a href="search.html" class="btn-submit">
                          <i class="las la-search"></i>
                        </a>
                      </form>
                    </div>
                  </div>

                  {/* newsletter start */}
                  <NewsLetter />
                  {/* newsletter end */}

                  {/* Stay connected start */}
                  <StayConnected />
                  {/* stay connected end */}

                  {/* Tags start */}
                  <Tags />
                  {/* Tags end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
