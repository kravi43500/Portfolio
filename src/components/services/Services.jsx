import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End(UI/UX)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Building user friendly UI and responsive UI.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Building UI compatable to all browers such as Firefox, Chrome
                and Edge (Cross-Browser).
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Building Single Page Application (SPA) using React.Js ,
                Matertiacl UI
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Re-engineering and maintainace of UI Application build on
                React.Js Framework
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Enhancement feature of existing UI.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Migration tradition UI to Modern SPA application using React.JS
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Building testing automation Framework using Java and Selenium.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Testing of UI through Automation using Selenium and Java. Also
                mannual testing of UI.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Providing best backend solution for all type of business need.{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Desiging software architectural and implementing for all type of
                business need.{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Build backend with latest framework such as Node.Js, Exress.Js
                with SQL and NoSQl database
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Re-engineering and monitoring</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Migrating existing framework to Node.Js and Express framework
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Deploy web application into Production</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Building web application with cloud based solution with
                Microsoft Azure
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>
                Testing web API using Rest-Assured Framework and Java as
                programming language.{" "}
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Desiging 2D charater Using Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Designing logo with help of Adoble illustrator.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Making short animation cartoon using Animate CC.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"></BiCheck>
              <p>Video editing and Voice over using Black Magic.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
