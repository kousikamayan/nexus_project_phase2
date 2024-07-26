import React, { useEffect } from 'react'
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wowjs';
import 'animate.css/animate.min.css'; 
function Footer() {
   
    useEffect(() => {
          new WOW.WOW().init();
        }, []);
  
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className='Footercontainer container-fluid text-light footer pt-5 mt-5 wow fadeInUp'  data-wow-delay="0.2s">
    <div className='container py-5'>
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start mb-4">
                    Company
                </h4>
                <div className='containerCompany d-flex row ' >
                <a href="" className="btn btn-link"> <i className="bi bi-caret-right-fill"></i> About Us</a>
                <a href="" className="btn btn-link"> <i className="bi bi-caret-right-fill"></i> Contact Us</a>
                <a href="" className="btn btn-link"> <i className="bi bi-caret-right-fill"></i> Services</a>

                <a href="" className="btn btn-link"><i className="bi bi-caret-right-fill"></i> Privacy Policy</a>
                <a href="" className=" btn btn-link"><i className="bi bi-caret-right-fill"></i> Terms & Condition</a>
            

                </div>
            

            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start mb-4">
                    Contact
                </h4>
                <p className='mb-4'> <i className='bi bi-geo-alt-fill me-1'></i>  123 Street,chennai</p>
                <p className='mb-4'><i className='bi bi-telephone-fill me-1'></i>  +01234567890</p>
                <p className='mb-4'> <i className='bi bi-envelope-fill me-1'></i>  info@techysoftware.com</p>
                <div className='d-flex pt-2'>
                    <a href="" className='btn btn-outline-light btn-social'><i className='bi bi-twitter-x'></i></a>
                    <a href="" className='btn btn-outline-light btn-social'><i className='bi bi-meta'></i></a>
                    <a href="" className='btn btn-outline-light btn-social'><i className='bi bi-youtube'></i></a>
                    <a href="" className='btn btn-outline-light btn-social'><i className='bi bi-linkedin'></i></a>
                </div>
 
            

            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className='section-title ff-secondary text-start mb-4'>Opening</h4>
                <h5 className='text-light'>Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className='text-light'>Sunday</h5>

                <p>10AM - 08PM</p>
            </div>

            <div className="col-lg-3 col-md-6">
                <h4 className='section-title ff-secondary text-start mb-4'>Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est</p>
                <div className='position-relative mx-auto' style={{maxWidth:"400px"}}>
                    <input className='form-control border-light w-100 py-3 ps-4 pe-5' type="text" placeholder='Your email'/>
                    <button type='button' className='btn btn-dark py-2 position-absolute top-0 end-0 mt-2 me-2'>SignUp</button>
                </div>
            </div>

        </div>

    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    @
                    <a href="#" className='border-bottom' style={{textDecoration:"none"}}>Techy Software</a>, All Right Reserved. Designed By <a className="border-bottom" style={{textDecoration:"none"}} href="">Techy Software</a>
                    <br/>
                    <br/>
                    Distributed By 
                    <a href="" className='border-bottom' style={{textDecoration:"none"}}>ThemeWagon</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href>Home</a>
                        <a href>Cookies</a>
                        <a href>Help</a>
                        <a href>FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer