import React from "react";
import classes from "./homePage.module.css";
import NavBar from "./components/navBar/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import WorkSection from "./components/workSection/WorkSection";
import AboutSection from "./components/aboutSection/AboutSection";
import LetsTalk from "./components/letsTalkSection/LetsTalk";
import { MdOutlineCopyright } from "react-icons/md";
const HomePage = () => {
  return (
    <div className={classes.homePageContainer}>
      <NavBar />
      <HeroSection />
      <section id="section1">{<WorkSection />}</section>
      <section id="section2">{<AboutSection />}</section>
      <section id="section3">{<LetsTalk />}</section>
      <p className={classes.description}>
        <MdOutlineCopyright /> 2023 Jhan Gonzales
      </p>
    </div>
  );
};

export default HomePage;
