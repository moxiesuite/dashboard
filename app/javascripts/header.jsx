import React from "react";

var Header = React.createClass({
  render: function() {
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item no-left-padding">
              <img src="/dashboard/images/logo-horiz.png" alt="Moxie logo" />
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <a className="nav-item" href="https://moxiesuite.github.io">
              Home
            </a>
            <a className="nav-item" href="https://moxiesuite.github.io/docs">
              Documentation
            </a>
            <a className="nav-item" href="https://moxiesuite.github.io/tutorials">
              Tutorials
            </a>

            <span className="nav-item no-right-padding">
              <a className="button is-primary" href="https://moxiesuite.github.io">
                <span>Download Moxie</span>
              </a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
});

export default Header;
