import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/meghadoo_image.png";
import IMG2 from "../../assets/BFC_image.png";
import IMG3 from "../../assets/city_image.png";
import IMG4 from "../../assets/portfolio1.jpg";
import IMG5 from "../../assets/portfolio1.jpg";
import IMG6 from "../../assets/portfolio1.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio ">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ecommerce site for online store.</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kravi43500/MeghadootElectronics"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kravi43500.github.io/MeghadootElectronics/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Online platform for food serving application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kravi43500/BFC-OnlineRestaurant"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kravi43500.github.io/BFC-OnlineRestaurant/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Online platform for food delivery services</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kravi43500/food-delivery-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kravi43500.github.io/food-delivery-app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
       {/*  <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixel"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixel"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixel"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};
