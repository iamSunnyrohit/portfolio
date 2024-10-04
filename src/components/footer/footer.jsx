import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo' rel='noopener'>Sunny Rohit</a>
      
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#recentWork'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href= 'https://github.com/iamSunnyrohit' target='_blank' rel="noreferrer"><FiGithub /></a>
        <a href='https://www.linkedin.com/in/sunny-rohit/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.instagram.com/iam_sunnyrohit/' target='_blank' rel="noreferrer"><FaInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sunny Rohit. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer