import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Loading..." />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Hi There! I'm{" "}
            <strong>
              <i>Ravi Kumar</i>
            </strong>
            . A Full Stack Web Developer having specialization in{" "}
            <strong>back end & front end developement </strong>. I have
            experience of around 7 years in<strong> Web development</strong>{" "}
            having strong <strong>React.Js and Node.Js </strong> skills. I have
            backend skills in Node.Js, Express.Js, Typescript with{" "}
            <strong>SQL and NoSQL </strong>database. I also have Frontend skill
            in React.Js,Redux,Javascript, Typescript,MaterialUI, Bootstrap, html
            & CSS{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
