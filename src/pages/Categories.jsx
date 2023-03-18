import { React, useEffect,  useState } from "react";
import ExploreNavbar from "../components/ExploreNavbar";
import frontend from "../assets/images/frontend.png";
import backend from "../assets/images/backend.png";
import devops from "../assets/images/devops.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import linux from "../assets/images/linux.png";
import database from "../assets/images/database.png";
import coding from "../assets/images/coding.png";
import computer from "../assets/images/computer.png";
import Footer from "../components/Footer";
import ExploreHeader from "../components/ExploreHeader";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallcategories")
      .then((res) => {
        const data = res.data;
        if (data.status === true) {
          console.log(data.data);
          setCategories(data.data);
        } else {
          alert("Some error occured");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ExploreNavbar />
      <ExploreHeader title={"Categories"} />
      <div className="container cat_container">
        <div class="row cat_inner">
          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={frontend}
                  className="pointer"
                  style={{ height: "50px" }}
                />
              </div>
              <div className="cat_title">Frontend</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={backend}
                  className="pointer"
                  style={{ height: "50px" }}
                />
              </div>
              <div className="cat_title">Backend</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={devops}
                  className="pointer"
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="cat_title">Devops</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={coding}
                  className="pointer"
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="cat_title">Data Structure</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={java}
                  className="pointer"
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="cat_title">Java</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={javascript}
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                  className="pointer"
                />
              </div>
              <div className="cat_title">Javascript</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={linux}
                  className="pointer"
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="cat_title">Operating System</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={database}
                  style={{ height: "50px" }}
                  alt=""
                  srcset=""
                  className="pointer"
                />
              </div>
              <div className="cat_title">Database</div>
            </div>
          </div>

          <div class="col-md-4 mb-5 col-sm-6">
            <div className="cat">
              <div>
                <img
                  src={computer}
                  style={{ height: "50px" }}
                  alt=""
                  className="pointer"
                  srcset=""
                />
              </div>
              <div className="cat_title">Computer Network</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categories;
