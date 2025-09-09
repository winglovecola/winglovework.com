import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {


    
  return (
    <nav>
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <a href="#about-home" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
        </li>

        <li className="nav-item">
          <a href="#portfolio-home" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>

        <li className="nav-item">
          <a href="#resume-home" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>

        <li className="nav-item">
          <a href="#contact-home" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}


