import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <div>
            <footer>
        <div id="socialmedia">
        <Link to="/" className="fa fa-facebook"></Link>
        <Link to="/" className="fa fa-twitter"></Link>
        <Link to="/" className="fa fa-instagram"></Link>
        <Link to="/" className="fa fa-youtube"></Link>
        <Link to="/" className="fa fa-envelope"></Link>
        </div>
        <div id="Copyright">
        <p id="Copytext">Copyright © Mercurial Design. All Rights reserved</p>
        </div>
        </footer>
        </div>
    )
}

