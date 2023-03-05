import React from 'react'
import Header from '../components/Header'
import DraftSection from '../components/DraftSection'
import DraftHeader from '../components/DraftHeader'
import Footer from "../components/Footer";
function Drafts() {
  return (
    <>
        <Header/>
        <DraftHeader />
        <DraftSection/>
        <Footer/>
    </>
  )
}

export default Drafts