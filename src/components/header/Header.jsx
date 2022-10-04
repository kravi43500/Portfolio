import React from 'react';
import "./header.css";
import { CTA } from './CTA';
import ME from "../../assets/me.png";
import { HeaderSocial } from './HeaderSocial';
import "./header.css"

export const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h2 className='tag-line'>Tailor-Made Solutions Enabling Agility & Authority for Digitalizing your Business</h2>
        <h5>I am</h5>
        <h1>Ravi Kumar</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
