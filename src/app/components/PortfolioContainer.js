import React, { useState, useEffect } from 'react';

import HeaderBar from './HeaderBar';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';


export default function PortfolioContainer() {


  
  const [currentPage, setCurrentPage] = useState('About');
  
  useEffect(() => {
    
    //load default page base on the url hash
    const urlParams = window.location.hash;
    console.log (urlParams);
  
     if (urlParams)
    {
      if (urlParams === "#resume-home")
      {
        setCurrentPage ('Resume');
      }
      else if (urlParams === "#portfolio-home")
      {
        setCurrentPage ('Portfolio');
      }
      else if (urlParams === "#contact-home")
      {
        setCurrentPage ('Contact');
      }
      else
      {
        setCurrentPage ('About');
      }
    } 
    
  },[]);
  

  // TODO: Add a comment describing the functionality of this method
  //renderPage checks the state of the variable currentPage and render the view base on currentPage
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };



  return (
    <div>
      <header>
        <HeaderBar />
        <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      </header>
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} handlePageChange={setCurrentPage}/>
    </div>

  );
}
