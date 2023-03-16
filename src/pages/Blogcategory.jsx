import React from "react";
import { useParams } from "react-router-dom";
import ExploreNavbar from "../components/ExploreNavbar";
import ExploreSection1 from "../components/ExploreSection1";

function Blogcategory() {
  const { id } = useParams();
  return (
    <>
      <ExploreNavbar />
      <div style={{paddingTop: "10vh"}}>
      <ExploreSection1 url={`getpostbycategory/${id}`} />
      </div>
    </>
  );
}

export default Blogcategory;
