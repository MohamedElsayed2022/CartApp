import React from 'react'
import Products from '../component/Products'
import { Container } from 'react-bootstrap'
import Carousels from './Carousels';
import Addation from './Addation/Addation';
import ContactUs from './Contact-us/ContactUs';
import Footer from './footer/Footer';

function Home() {
  const containerStyle = {
      padding: "2rem",
      backgroundColor: "#343a40", 
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", 
    };
  return (
    <div className='container-fluid' style={containerStyle}>
    <Carousels />
    <Addation />
      <Products />
      <ContactUs />
    <Footer />
    </div>
 
  )
  
}

export default Home
