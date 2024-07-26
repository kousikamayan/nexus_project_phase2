import React from 'react'
import './Clients.css'
import { Carousel } from 'react-bootstrap'
import client1 from '../../assets/images/client-1.png'
import client2 from '../../assets/images/client-2.png'
import client3 from '../../assets/images/client-3.png'
import client4 from '../../assets/images/client-4.png'
import client5 from '../../assets/images/client-5.png'
import client6 from '../../assets/images/client-6.png'

function Clients() {
    const clients = [client1, client2, client3, client4, client5, client6];


  return (
    <section className='clients bg-white'>
        <div className="container">
            <Carousel interval={3000} controls={false}>
            <Carousel.Item>
            
            <div className="row gy-3">
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client1} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client2} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client3} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client4} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client5} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client6} className='img-fluid w-50 h-50' alt="" />
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row gy-3">
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client2} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client3} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client4} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client5} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client6} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client1} className='img-fluid w-50 h-50' alt="" />
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            
            <div className="row gy-3">
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client3} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client4} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client5} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client6} className='img-fluid w-50 w-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client1} className='img-fluid w-50 h-50' alt="" />
                </div>
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                    <img src={client2} className='img-fluid w-50 h-50' alt="" />
                </div>
            </div>
            </Carousel.Item>
            </Carousel>
        </div>

    </section>
  )
}

export default Clients