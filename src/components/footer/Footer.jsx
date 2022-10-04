import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css"

export const Footer = () => {
    return (
        <footer>
            <a href="#" target="_blank" className='footer__logo'>
                Ravi Kumar
            </a>
            <ul className='premalinks'>
                <li><a href="#" >Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services" >Services</a></li>
                <li><a href="#portfolio" >Portfolio</a></li>
                <li><a href="#testimonials" >Testimonials</a></li>
                <li><a href="#contact" >Contacts</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://instagram.com"><FaInstagramSquare></FaInstagramSquare></a>
                <a href="https://facebook.com"><BsFacebook></BsFacebook></a>
                <a href="https://twitter.com"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
        </footer>
    )
}
