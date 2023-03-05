import React from "react";
import ExploreThumbnail from "./ExploreThumbnail";

function ExploreSection1() {
  return (
    <>
      <section class="blog-layout-3 ">
        <div class="container-fluid">
            <div class="explore_search_container">
              <div class="exp_form">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email Adress"
                  required="required"
                />
              </div>
              <button class="btn btn-dark exp_btn" type="submit">
                Search
              </button>
            </div>
          <div class="row" style={{ paddingBottom: "5vh" }}>
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
            <ExploreThumbnail />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreSection1;
