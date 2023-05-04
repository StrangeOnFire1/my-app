import React from 'react'

export default function Navbar1({mode,toggleDarkLightBtn,toggleDarkGreenBtn}) {


  return (
    <nav className={`navbar navbar-${mode} navbar-expand-lg bg-${mode}`} style={{borderBottom:'1px solid grey' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>Text-converter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/'>About</a>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
            <input className="form-check-input" onClick={toggleDarkLightBtn}   value={1} type="checkbox" role="switch" id="flexSwitchCheckDefault1" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1"  style={{color: mode === 'light'? 'black':'white'}}>Enable Dark-mode</label>
          </div> 
          <div className="form-check form-switch mx-3">
            <input className="form-check-input" onClick={toggleDarkGreenBtn} value={1} type="checkbox" role="switch" id="flexSwitchCheckDefault2"  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2"  style={{color: mode === 'light'? 'black':'white'}}>Enable Dark-Green-mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

