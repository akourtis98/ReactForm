import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-default fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              Project name
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/">Sign up</a>
              </li>
              <li>
                <a href="/users">See users</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="http://alexkourtis.net/">Personal Website</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/alexandros-kourtis/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/akourtis98">
                  Github <span className="sr-only" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
