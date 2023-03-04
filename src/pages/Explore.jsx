import React from 'react'
import ExploreHeader from '../components/ExploreHeader'
import ExploreSection1 from '../components/ExploreSection1'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Explore() {
  return (
    <>
        <Header />
        <ExploreHeader title={"Explore"}/>
        <ExploreSection1/>
        <Footer />
    </>
  )
}

export default Explore