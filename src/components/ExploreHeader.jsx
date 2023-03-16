import React from "react";

function ExploreHeader({title}) {
  return (
    <>
      <div class="section-heading section-heading-light">
        <div class="container-fluid">
          <div class="section-heading-3">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading-3-title">
                  <h1>{title}</h1>
                  <p class="links">
                    <a>
                      Home <i class="las la-angle-right"></i>
                    </a>{" "}
                    {title}
                  </p>
                  <p class="desc">
                    A comprehensive Solutions to all of your coding needs,
                    including devops, cloud computing, communities to join,
                    development, and much more.
                    <br /> explore all domains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreHeader;
