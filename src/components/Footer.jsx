import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <footer>
        <div id="socialmedia">
          {/* <Link to="/" className="fa fa-facebook"></Link> */}
          <a href="https://twitter.com/JoseDH29" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/joseda.hg/" className="fa fa-instagram"></a>
          <a href="https://www.youtube.com/channel/UChMlKA_6f2mNJRRbB7RXzkw" className="fa fa-youtube"></a>
          {/* <Link to="/" className="fa fa-envelope"></Link> */}
        </div>
        <div id="Copyright">
          <p id="Copytext">Copyright © Mercurial Design. All Rights reserved</p>
        </div>
      </footer>
    </div>
  );
}