import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
        ReactApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ color: 'white' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Card" className="nav-link" style={{ color: 'white' }}>
              Card
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" style={{ color: 'white' }}>
              Contact
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{ marginLeft: 'auto' }}>
          <div style={{ width: '200px', display: 'flex', justifyContent: 'flex-end' }}>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '5px' }}>
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;