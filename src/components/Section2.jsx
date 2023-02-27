import React from "react";
import BlogPostThumnail from "./BlogPostThumnail";
import PopularPostThumbnail from "./PopularPostThumbnail";
import StayConnected from "./StayConnected";
import Tags from "./Tags";
import NewsLetter from "./NewsLetter";

function Section2() {
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
                <BlogPostThumnail />
                <BlogPostThumnail />
                <BlogPostThumnail />
                <BlogPostThumnail />
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

                  <div class="widget">
                    <div class="widget-title">
                      <h5>popular Posts</h5>
                    </div>

                    <ul class="widget-popular-posts">
                      {/* popular post start */}
                      <PopularPostThumbnail />
                      <PopularPostThumbnail />
                      <PopularPostThumbnail />
                      <PopularPostThumbnail />
                      {/* popular post end */}
                    </ul>
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
