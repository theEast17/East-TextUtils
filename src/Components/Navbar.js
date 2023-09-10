import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand" >{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a href="/" className="nav-link active" aria-current="page" >Home</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a href="/" className="nav-link" >{props.about}</a>
                        </li> */}
                    </ul>

                    <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeTitle}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// this is for validation
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
};

// default arguments
Navbar.defaultProps = {
    title: "Logo",
    about: "About Us"
}

