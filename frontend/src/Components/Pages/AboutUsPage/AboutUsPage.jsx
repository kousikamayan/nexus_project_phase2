import React from 'react'
import AboutUs from '../../AboutUs/AboutUs'
import States from '../../States/States'
import BreadCrumb from '../../BreadCrumb/BreadCrumb'

function AboutUsPage() {
  return (
    <div className='py-5'>
        <BreadCrumb page={"ABOUT US"}/>
        <AboutUs/>
        <States/>
    </div>
  )
}

export default AboutUsPage