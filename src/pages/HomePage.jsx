import { Fragment } from "react";
import "./Hompage.css";

import log1 from "../../src/assets/apple.png";
import log2 from "../../src/assets/appleteam.webp";
import log3 from "../../src/assets/ipadair.png";
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
          <h1>HOLA</h1>

          <img src={log1} width="90vw" height="90vh" labels={<h1>HOLA</h1>} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={log2} width="90vw" height="90vh" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={log3} width="90vw" height="90vh" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default HomePage;
