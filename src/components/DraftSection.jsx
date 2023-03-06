import React from "react";
import ExploreThumbnail from "./ExploreThumbnail";
import NewsLetter from "./NewsLetter";
import StayConnected from "./StayConnected";
import PopularPostThumbnail from "./PopularPostThumbnail";
import DraftThumbnail from "./DraftThumbnail";

function DraftSection() {
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
                <DraftThumbnail />
                <DraftThumbnail />
                <DraftThumbnail />
                <DraftThumbnail />
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
