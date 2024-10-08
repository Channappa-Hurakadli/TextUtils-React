import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.modes.toLowerCase()} bg-${props.modes.toLowerCase()} text-bg-light shadow `}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/#">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                
                {/* <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
                  <label className={`form-check-label  me-4 text-${props.modes.toLowerCase()==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.modes.toLowerCase()==='light'?'Dark Mode':'Light Mode'}</label>
              </div>
              {/* <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Action</button></li>
                    <li><button className="dropdown-item" type="button">Another action</button></li>
                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                  </ul>
              </div> */}
            </div>
          </div>
      </nav>
      
  </div>
  );
}
