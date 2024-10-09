import React from "react";
import "./Services.css";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import HeartEmoji from "../../img/heartemoji.png";
import Resume from "./kriti-sharma-resume.pdf";

import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      {/*left side*/}
      <div className="awesome">
        <span>My Awesome</span>

        <span>services</span>
        <spane>
          Lorem ipsum dolor sit amet, consecteturjsdf,snfmsnmfsns,m,m,mfs,
          <br /> adip lorem ipsum dolor sit amet, consectetur adip
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}
      <div className="cards">
        <div Style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>

        <div Style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React,Laravel, SpringBoot"}
          />
        </div>

        <div Style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Loremdkaljdkajdkamdkadakdka dakdkladka"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};
export default Services;
