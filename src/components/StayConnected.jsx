import React from "react";

function StayConnected() {
  return (
    <>
      <div class="widget ">
        <div class="widget-title">
          <h5>Stay connected</h5>
        </div>

        <div class="widget-stay-connected">
          <div class="list">
            <div class="item color-facebook">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <p>Facebook 12k</p>
            </div>

            <div class="item color-instagram">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <p>instagram 102k</p>
            </div>

            <div class="item color-twitter">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <p>twitter 22k</p>
            </div>

            <div class="item color-youtube">
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
              <p>Youtube 120k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StayConnected;
