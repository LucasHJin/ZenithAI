import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header';

//layout page such that there is always a header at the top

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;