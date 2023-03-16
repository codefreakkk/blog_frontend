import React from "react";
import ExploreHeader from "../components/ExploreHeader";
import ExploreSection1 from "../components/ExploreSection1";
import Footer from "../components/Footer";
import ExploreNavbar from "../components/ExploreNavbar";

function Explore() {
  return (
    <>
      <ExploreNavbar />
      <ExploreHeader title={"Explore"} />
      <ExploreSection1 url={`getposts`}/>
      <Footer />
    </>
  );
}

export default Explore;
