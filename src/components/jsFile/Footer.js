import React from 'react'
import { Link } from 'react-router-dom';
import '../cssFile/Footer.css';

const Footer = () => {
  return (
    <main className={"profile"}>
      <p className={"headerCont"}>Aakash Metal Works Copyright © 2023 || All rights reserved || <Link to="/contact">Contact Us</Link> || <Link to="/about">About Us</Link></p>
    </main>
  );
};

export default Footer;
