import React from 'react';
import {Header} from "./components/header/Header";
import {Nav} from './components/nav/Nav';
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Contact></Contact>
    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}
