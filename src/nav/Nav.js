import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/"></Link>

          <Link to="delete"></Link>

          <Link to="update"></Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
