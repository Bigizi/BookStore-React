import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    lists: {
      display: 'flex',
      flexDirection: 'row',
    },

    list: {
      display: 'inline',
      padding: '10px',
    },
  };
  return (
    <>
      <div>
        <ul className="lists" style={styles.lists}>
          <li className="list" style={styles.list}><Link to="/">Books</Link></li>
          <li className="list" style={styles.list}><Link to="categories">Categories</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
