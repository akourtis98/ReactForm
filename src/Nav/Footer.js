import React from "react";

const Footer = () => {
  return (
    <div className="navbar navbar-default navbar-fixed-bottom">
      <div className="container">
        <p className="navbar-text pull-left">
          © 2018 - Site Built By Alexandros Kourtis
        </p>

        <a
          href="http://youtu.be/zJahlKPCL9g"
          className="navbar-btn btn-warning peach-gradient btn pull-right"
        >
          <span className="glyphicon" /> Visit my website
        </a>
      </div>
    </div>
  );
};

export default Footer;
