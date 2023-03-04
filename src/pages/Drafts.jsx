import React from 'react'
import Header from '../components/Header'
import DraftSection from '../components/DraftSection'
import ExploreHeader from '../components/ExploreHeader'
import Footer from "../components/Footer";
function Drafts() {
  return (
    <>
        <Header/>
        <ExploreHeader title={"Drafts"}/>
        <DraftSection/>
        <Footer/>
    </>
  )
}

export default Drafts