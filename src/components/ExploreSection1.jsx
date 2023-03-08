import axios from "axios";
import { React, useEffect, useState } from "react";
import ExploreThumbnail from "./ExploreThumbnail";
import PulseLoader from "react-spinners/PulseLoader";

function ExploreSection1() {
  const [blog, setBlog] = useState([]);
  const [blogState, setBlogState] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getposts")
      .then((res) => {
        if (res.data.status === true) {
          setBlog(res.data.data);
          setBlogState(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section class="blog-layout-3 ">
        <div class="container-fluid">
          <div class="explore_search_container">
            <div class="exp_form">
              <input
                type="text"
                class="form-control"
                placeholder="Search blogs"
                required="required"
              />
            </div>
            {/* <button class="btn btn-dark exp_btn" type="submit">
              Search
            </button> */}
          </div>
          <div class="row" style={{ paddingBottom: "5vh" }}>
            {/* {blog.length === 0 ? (
              <div className="ml-3 mb-5">No blogs to show</div>
            ) : (
              <></>
            )} */}
            {blogState == true ? (
              <div className="mt-2 ml-3">
                <PulseLoader color="#747373" />
              </div>
            ) : (
              blog.map((result, index) => {
                return (
                  <ExploreThumbnail
                    key={index}
                    id={result._id}
                    title={result.title}
                    userName={result.userName}
                    previewImage={result.previewImage}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreSection1;
