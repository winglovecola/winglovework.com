import React from 'react';

export default function Footer({ currentPage, handlePageChange }) {
  return (

    <footer className="footer">
      <div><a href="#contact-home" onClick={() => handlePageChange('Contact')}>Contact</a></div>
      <div><a href="https://github.com/winglovecola">GitHub</a></div>
      <div><a href="https://www.linkedin.com/in/winglovecola">LinkedIn</a></div>
    </footer>


  );
}

