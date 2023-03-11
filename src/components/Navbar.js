import React from 'react';
import { Icon } from '@iconify/react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="ulDiv">
        <ul>
          <h2 style={{ fontWeight: 'bold' }}>BookStore CMS</h2>
          <li><Link to="/" className="links">BOOKS</Link></li>
          <li><Link to="categories" className="links">CATEGORIES</Link></li>
          <span className="usr-icon-cont"><Icon className="icon" icon="mingcute:user-3-fill" /></span>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}

export default Navbar;
