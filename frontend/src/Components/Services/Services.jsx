import React, { useEffect } from 'react'
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services() {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of the animation
          once: true, // Animate only once
        });
      }, []);
  return (
    <section className='services pt-5 pb-5'>
        <div className='container section-title text-center'>
            <h2 data-aos="fade-left"> Our Services</h2>
            <p data-aos="fade-right">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
            <div className="row gy-4">
                <div className="col-xl-3 col-md-6 d-flex " data-aos="fade-up">
                    <div className="service-item position-relative">
                        <i className='bi bi-browser-chrome'></i>
                        <h4>
                            <a className='stretched-link' href="" >Web Development</a>
                        </h4>
                     
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>

                    
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up">
                    <div className="service-item position-relative">
                        <i className='bi bi-browser-chrome'></i>
                        <h4>
                            <a className='stretched-link' href="" >Web Development</a>
                        </h4>
                     
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>

                    
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex " data-aos="fade-up">
                    <div className="service-item position-relative">
                        <i className='bi bi-browser-chrome'></i>
                        <h4>
                            <a className='stretched-link' href="" >Web Development</a>
                        </h4>
                     
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>

                    
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex " data-aos="fade-up">
                    <div className="service-item position-relative">
                        <i className='bi bi-browser-chrome'></i>
                        <h4>
                            <a className='stretched-link' href="" >Web Development</a>
                        </h4>
                     
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>

                    
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Services