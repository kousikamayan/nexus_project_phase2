import React from 'react'
import Services from '../../Services/Services'
import OtherServices from '../../OtherServices/OtherServices'
import BreadCrumb from '../../BreadCrumb/BreadCrumb'

function ServicesPage() {
  return (
    <div className='py-5'>
        <BreadCrumb page={"OUR SERVICES"}/>
        <Services/>
        <OtherServices/>
    </div>
  )
}

export default ServicesPage