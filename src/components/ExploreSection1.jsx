import React from "react";
import ExploreThumbnail from "./ExploreThumbnail";
import NewsLetter from "./NewsLetter";
import StayConnected from "./StayConnected";
import PopularPostThumbnail from "./PopularPostThumbnail";

function ExploreSection1() {
  return (
    <>
      <section class="blog-layout-5">
        <div class="container-fluid">
          <div class="row">
            {/* <!--conetnt--> */}
            <div class="col-lg-8 oredoo-content" id="explore_container">
              <div class="theiaStickySidebar">
                {/* Blog post */}
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />
                <ExploreThumbnail />

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

                  {/* <!--popular-posts--> */}
                  <div class="widget">
                    <div class="widget-title">
                      <h5>popular Posts</h5>
                    </div>

                    <ul class="widget-popular-posts">
                      {/* popular post start */}
                      <PopularPostThumbnail />
                      <PopularPostThumbnail />
                      {/* popular post end */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreSection1;
