import React from "react";

function ExploreHeader({title}) {
  return (
    <>
      <div class="section-heading" id="explore_header">
        <div class="container-fluid">
          <div class="section-heading-5">
            <div class="row">
              <div class="col-lg-10">
                <div class="section-heading-5-title">
                  <h1>{title}</h1>
                  <p class="links">
                    <a href="index.html">
                      Home <i class="las la-angle-right"></i>
                    </a>{" "}
                    {title}
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi mollitia, adipisci odio iusto aperiam ea et
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
