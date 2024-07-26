import React, { useEffect } from 'react';
import './States.css';
import features from '../../assets/images/features-1.png';

function States() {
    useEffect(() => {
        // Initialize PureCounter after ensuring it's loaded
        const checkPureCounter = setInterval(() => {
          if (window.PureCounter) {
            new window.PureCounter();
            clearInterval(checkPureCounter);
          }
        }, 100);
      }, []);
  

  return (
    <section className="stats bg-white">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <img src={features} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-emoji-smile flex-shrink-0"></i>
                  <div>
                    <span 
                      data-purecounter-start="0" 
                      data-purecounter-end="245" 
                      data-purecounter-duration="1" 
                      className="purecounter">245
                    </span>
                    <p><strong>Happy Clients</strong><span> consequuntur quae</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-journal-richtext"></i>
                  <div>
                    <span 
                      data-purecounter-start="0" 
                      data-purecounter-end="542" 
                      data-purecounter-duration="1" 
                      className="purecounter">542
                    </span>
                    <p><strong>Projects</strong><span> consequuntur quae</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-headset"></i>
                  <div>
                    <span 
                      data-purecounter-start="0" 
                      data-purecounter-end="1205" 
                      data-purecounter-duration="1" 
                      className="purecounter">1205
                    </span>
                    <p><strong>Hours of Support</strong><span> consequuntur quae</span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-people"></i>
                  <div>
                    <span 
                      data-purecounter-start="0" 
                      data-purecounter-end="35" 
                      data-purecounter-duration="1" 
                      className="purecounter">35
                    </span>
                    <p><strong>Hard Workers</strong><span> consequuntur quae</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default States;
