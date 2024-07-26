import React from 'react'
import './BreadCrumb.css'

function BreadCrumb(props) {
  return (
    <div className='container-xxl py-5 hero-header mb-5 bg-black '>
        <div className='container text-center my-5 pt-5 pb-4'>
            <h6 className='display-5 text-white mb-3 animated slideInDown' style={{fontWeight:"500"}}>{props.page}</h6>


        </div>

    </div>
  )
}

export default BreadCrumb