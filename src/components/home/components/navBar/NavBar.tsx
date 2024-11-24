"use client";
import React, { useState } from "react";
import classes from "./navBar.module.css";
import { Link } from "react-scroll";
const NavBar = () => {
  const [active, setActive] = useState("Work");

  return (
    <div>
      <ul className={classes.list}>
        <li>
          <button aria-label="work" className={classes.button}>
            <Link
              to="section1"
              smooth={true}
              duration={1000}
              onClick={() => setActive("Work")}
              className={
                active === "Work" ? classes.listItemsActive : classes.listItems
              }
            >
              Work
            </Link>
          </button>
        </li>
        <li>
          <button aria-label="about" className={classes.button}>
            <Link
              to="section2"
              smooth={true}
              duration={1000}
              onClick={() => setActive("About")}
              className={
                active === "About" ? classes.listItemsActive : classes.listItems
              }
            >
              About
            </Link>
          </button>
        </li>
        <li>
          <button aria-label="blog" className={classes.button}>
            <Link
              to="section2"
              smooth={true}
              duration={1000}
              onClick={() => setActive("Blog")}
              className={
                active === "Blog" ? classes.listItemsActive : classes.listItems
              }
            >
              Blog
            </Link>
          </button>
        </li>
        <li>
          <button aria-label="contact" className={classes.button}>
            <Link
              to="section3"
              smooth={true}
              duration={1000}
              onClick={() => setActive("Contact")}
              className={`${classes.special} ${
                active === "Contact"
                  ? classes.listItemsActive
                  : classes.listItems
              }`}
            >
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
