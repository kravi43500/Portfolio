import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { HiMail } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';
import './contact.css';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2jmljml', 'template_k1p1o9v', form.current, 'iTZKkYDL5htfhjyEE').then((e)=>{console.log(e);});
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiMail className='contact__option-icon'></HiMail>
            <h4>Email</h4>
            <h5>srahul302021@gmail.com</h5>
            <a href="mailto:srahul302021@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'></RiWhatsappFill>
            <h4>Whatsapp</h4>
            <h5>+91-9432185979</h5>
            <a href="https://api.whatsapp.com/send?phone=+91-9432185979" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Your Full Name...' required />
          <input type="email" name="email" id="email" placeholder='Your Email...' />
          <textarea name="message" id="message" rows="7" placeholder='Your message...' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
