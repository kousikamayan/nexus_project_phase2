import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid px-lg-3 py-lg-2">
      <Link className="navbar-brand me-auto" href="#" to='/'><span className=''style={{color:"#9BEC00"}}>TECHY </span><span className=''>SOFTWARE</span></Link>

      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">TECHY SOFTWARE</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item dropdown mx-lg-2">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company Info
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="nav-link dropdown-item" href="#" to='/about'>About </Link></li>
                <li><Link className="nav-link dropdown-item" href="#">Career</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-lg-2">
              <Link className="nav-link" aria-current="page" to='/services' href="#">Services</Link>
            </li>
            <li className="nav-item mx-lg-2">
              <Link className="nav-link" to='/contact' href="#"> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn btn-secondary quote-button me-2" to='/contact' type="submit">Get a Quote</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  )
}

export default Navbar