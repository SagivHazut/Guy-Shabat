import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./Hompage.css";

import log1 from "../../src/assets/gate1.jpg";
import log2 from "../../src/assets/gate2.jpg";
import log3 from "../../src/assets/gate3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { Component } from "react";

//https://www.somfy.co.il/?utm_source=search&utm_medium=brand&utm_campaign=bny2022&gclid=Cj0KCQjwjN-SBhCkARIsACsrBz5u3Bh9mhPBGuS3UvM06wJkqbcsLbBiRwPwMWt5LLtajYYSEJIeYWAaAj-pEALw_wcB
const HomePage = () => {
  return (
    <Fragment>
      <Carousel
        className="main-slide"
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        dynamicHeight={true}
        showThumbs={false}
      >
        <div>
          <div className="imageone">
            <h1 className="header">
              שעריים חשמליים ממונעים
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/cardspanel"
                activeClassName="activeLink"
              >
                לפרטים נוספים
              </NavLink>
            </h1>
            <img src={log1} width="90vw" height="880vh" />

            <p className="legend">Legend 1</p>
          </div>
        </div>
        <div className="imageone">
          <h1 className="header">
            שעריים חשמליים ממונעים
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/cardspanel"
              activeClassName="activeLink"
            >
              לפרטים נוספים
            </NavLink>
          </h1>
          <img src={log2} width="90vw" height="880vh" />

          <p className="legend">Legend 2</p>
        </div>
        <div className="imageone">
          <h1 className="header">
            שעריים חשמליים ממונעים
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/cardspanel"
              activeClassName="activeLink"
            >
              לפרטים נוספים
            </NavLink>
          </h1>

          <img src={log3} width="90vw" height="880vh" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="somfey">
        <h1>פתרונות לבית חכם מבית Somfy, השותפים שלכם בבית</h1>
      </div>
      <div className="images">
        <div className="imagesfirstrow">
          <div className="imgaes2">
            <img src={log3}></img>
          </div>
          <img src={log3} />
          <img src={log3} />
        </div>
        <img src={log3} />
        <img src={log3} />
        <img src={log3} />
      </div>
    </Fragment>
  );
};

export default HomePage;
