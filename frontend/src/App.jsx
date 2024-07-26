import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Herobar from './Components/Herobar/Herobar';
import Clients from './Components/Clients/Clients';
import AboutUs from './Components/AboutUs/AboutUs';
import States from './Components/States/States';
import Services from './Components/Services/Services';
import OtherServices from './Components/OtherServices/OtherServices';
import Testimonial from './Components/Testimonial/Testimonial';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Pages/HomePage/Homepage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';
import AboutUsPage from './Components/Pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './Components/Pages/ContactUsPage/ContactUsPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>

      </Routes>
      <Footer/>

    </div>
    </BrowserRouter>
  )
}

export default App