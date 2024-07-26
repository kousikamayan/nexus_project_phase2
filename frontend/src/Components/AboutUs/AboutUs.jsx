import React, { useEffect } from 'react';
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
      once: true, // Animate only once
    });
  }, []);

  return (
    <section className='about pt-5 pb-5' data-aos="fade-up">
      <div className="container section-title text-center">
        <h2 data-aos="fade-up">Get to Know About Us</h2>
        <p data-aos="fade-up">We are Providing Userfriendly and attractive websites for startups</p>
      </div>
      <div className="container">
        <div className="row gy-5">
          <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up">
            <h3>We are Providing Userfriendly and attractive websites for startups</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="col-xl-7">
            <div className="row gy-4">
              <div className="col-md-6 icon-box position-relative" data-aos="fade-left">
                <i className='bi bi-globe'></i>
                <h4><a href="">User friendly</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 icon-box position-relative" data-aos="fade-left">
                <i className='bi bi-wallet-fill'></i>
                <h4><a href="">Responsiveness</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 icon-box position-relative" data-aos="fade-left">
                <i className='bi bi-currency-dollar'></i>
                <h4><a href="">Best Prizes</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 icon-box position-relative" data-aos="fade-left">
                <i className='bi bi-boxes'></i>
                <h4><a href="">Multi platform</a></h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
