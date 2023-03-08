import { React, useEffect, useState } from "react";
import NewsLetter from "./NewsLetter";
import StayConnected from "./StayConnected";
import DraftThumbnail from "./DraftThumbnail";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

function DraftSection() {
  const [blog, setBlog] = useState([]);
  const [blogState, setBlogState] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/drafts", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        if (result.data.status === true) {
          setBlog(result.data.data);
          setBlogState(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section class="blog-layout-5">
        <div class="container-fluid">
          <div class="row">
            {/* <!--conetnt--> */}
            <div class="col-lg-8 oredoo-content" id="explore_container">
              <div
                class="theiaStickySidebar"
                id="draftsection"
                style={{
                  height: "80vh",
                  overflowY: "scroll",
                  marginBottom: "5vh",
                }}
              >
                {/* Blog post */}
                {blog.length === 0 ? <div>No blogs to show</div> : <></>}
                {blogState === true ? (
                  <div className="mt-3"><PulseLoader color="#747373" /></div>
                ) : (
                  blog.map((result, index) => {
                    return (
                      <DraftThumbnail
                        key={index}
                        id={result._id}
                        title={result.title}
                      />
                    );
                  })
                )}
                {/* Blog post end */}
              </div>
            </div>

            <div class="col-lg-4 oredoo-sidebar">
              <div class="theiaStickySidebar">
                <div class="sidebar">
                  {/* <!--search--> */}
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
                        <a class="btn-submit">
                          <i class="las la-search"></i>
                        </a>
                      </form>
                    </div>
                  </div>

                  {/* <!--newslatter--> */}
                  <NewsLetter />

                  {/* <!--stay connected--> */}
                  <StayConnected />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DraftSection;
