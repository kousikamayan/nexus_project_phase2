import React from 'react'
import ContactUs from '../../ContactUs/ContactUs'
import BreadCrumb from '../../BreadCrumb/BreadCrumb'

function ContactUsPage() {
  return (
    <div className='py-5'>
        <BreadCrumb page={"CONTACT US"}/>
        <ContactUs/>
    </div>
  )
}

export default ContactUsPage