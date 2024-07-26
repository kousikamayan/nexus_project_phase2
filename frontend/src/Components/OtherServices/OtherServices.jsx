import React from 'react'
import './OtherServices.css'
import service1 from '../../../src/assets/images/services-1.jpg'
import service2 from '../../../src/assets/images/services-2.jpg'
import service3 from '../../../src/assets/images/services-3.jpg'
import service4 from '../../../src/assets/images/services-4.jpg'

function OtherServices() {
  return (
    <section className='alt-services py-5'>
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-6">
                    <div className="service-item1 position-relative">
                        <div className="img">
                            <img className='img-fluid' src={service1} alt="" />
                        </div>
                        <div className="details">
                            <a href="" className='stretched-link'><h3>Web Development</h3></a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-item1 position-relative">
                        <div className="img">
                            <img className='img-fluid' src={service2} alt="" />
                        </div>
                        <div className="details">
                            <a href="" className='stretched-link'><h3>Web Development</h3></a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-item1 position-relative">
                        <div className="img">
                            <img className='img-fluid' src={service3} alt="" />
                        </div>
                        <div className="details">
                            <a href="" className='stretched-link'><h3>Web Development</h3></a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-item1 position-relative">
                        <div className="img">
                            <img className='img-fluid' src={service4} alt="" />
                        </div>
                        <div className="details">
                            <a href="" className='stretched-link'><h3>Web Development</h3></a>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default OtherServices