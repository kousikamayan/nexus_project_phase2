import React from 'react'
import Herobar from '../../Herobar/Herobar'
import AboutUs from '../../AboutUs/AboutUs'
import Clients from '../../Clients/Clients'
import Services from '../../Services/Services'
import OtherServices from '../../OtherServices/OtherServices'
import States from '../../States/States'
import Testimonial from '../../Testimonial/Testimonial'
import ContactUs from '../../ContactUs/ContactUs'

function Homepage() {
  return (
    <div>
        <Herobar/>
        <Clients/>
        <AboutUs/>
        <States/>

        <Services/>
        <OtherServices/>

        <Testimonial/>
        <ContactUs/>
    </div>
  )
}

export default Homepage