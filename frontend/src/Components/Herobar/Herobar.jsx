import React from 'react'
import './Herobar.css'
import heroimage from '../../assets/hero-img.png'

function Herobar() {
  return (
  
        <section className='hero'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Grow your Business with Techy Software</h1>
                        <h2>We are team of talented designers making User friendly websites</h2>
                        <button href="" className='btn-get-started scrollto bg-secondary w-25 border-0' type='btn'>Get Started</button>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={heroimage} className='img-fluid animated' alt="" />
                    </div>
                </div>
            </div>

        </section>
   
  )
}

export default Herobar