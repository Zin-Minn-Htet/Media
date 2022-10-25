import React from 'react';
import logoImage from '../../statics/logo.png'

export default function Nav() {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg bg-dark">
        <div className="container">
          <img src={logoImage} alt='logoImg' width='30' height='30'/>
          <a className="navbar-brand text-white ms-2" href="#">BM Media</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Local</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">International</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='fa fa-user' />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Register</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
