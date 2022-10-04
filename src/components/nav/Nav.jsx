import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <nav><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiOutlineHome></AiOutlineHome></a>
      <a onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} href="#about"><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiBookAlt></BiBookAlt></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? 'active' : ''}><RiServerLine></RiServerLine></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail></BiMessageSquareDetail></a></nav>
  )
}
