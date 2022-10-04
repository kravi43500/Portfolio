import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import './experience.css';

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>Javascript</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>Bootstrap</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div> <h4>Material UI</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div> <h4>React</h4>
              <small className="text-light">Experienced</small></div>
          </article>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>Node.Js</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>Express.Js</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>MongoDB</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div> <h4>SQL</h4>
              <small className="text-light">Experienced</small></div>
          </article>
          <article className="experience__details">
            <HiBadgeCheck className='experience__details-icon'></HiBadgeCheck>
            <div><h4>Azure Devops</h4>
              <small className="text-light">Experienced</small></div>
          </article>
        </div>
      </div>
    </section>
  )
}
