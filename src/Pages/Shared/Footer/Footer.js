import React from 'react';
import './Footer.css'

const Footer = () => {
    /*   const getYear = () => {
          const currentYear = new Date().getFullYear();
          return currentYear;
      };
      {getYear()} */

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center py-4 bg-dark text-white'>
            <p className='m-0'><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;