import React, { useState } from 'react';

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle the navbar collapse state
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <h3 className="navbar-brand text-light">Travel Companion</h3>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}
          id="navbarSupportedContent"
        >
          {/* Rest of your navbar code */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item dropdown"></li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn border-white text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
