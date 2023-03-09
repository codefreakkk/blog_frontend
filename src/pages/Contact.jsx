import React from 'react'
import ContactHeader from '../components/ContactHeader';
import ContactSection from '../components/ContactSection';
import ExploreNavbar from "../components/ExploreNavbar";
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
        <ExploreNavbar/>
        <ContactHeader/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Contact;