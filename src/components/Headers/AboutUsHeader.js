/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col } from "reactstrap";
import {Link} from 'react-router-dom';
import Description from '../Custom/HeaderDescription';
import CubeContainer from '../Custom/RubixCube/CubeContainer';
import ImportScript from '../plainJs';

// core comments

function PresentationHeader() {

  ImportScript("../Custom/RubixCube/cube/css3.oz.js");
  ImportScript("../Custom/RubixCube/cube/quaternion.js");
  ImportScript("../Custom/RubixCube/cube/oz.js");
  ImportScript("../Custom/RubixCube/cube/rubik.js");
  

  return (
    <>
      <div className="wrapper section section-dark">
        <div
          className="page-header section-dark"
          // style={{
          //   backgroundImage:
          //     "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")",
          // }}
        >
        <span className="header-font" id="about-one" style={{ animation: `workDance 3s` }}>{'<'}body{'>'}</span>
        <span className="header-font" id="about-two" style={{ animation: `workDanceSequal 4s` }}>{'<'}h1{'>'}</span>
        <span className="header-font" id="about-three" style={{ animation: `workDance 5s` }}>{'<'}h1{'/>'}</span>
        <span className="header-font" id="about-four" style={{ animation: `workDanceSequal 3s` }}>{'</'}body{'>'}</span>
        <span className="header-font" id="about-five" style={{ animation: `workDance 4s` }}>{'</'}html{'>'}</span>
        <span className="header-font" id="about-six" style={{ animation: `workDanceSequal 5s` }}>{'<'}Rubix{'>'}</span>
        <span className="header-font" id="about-seven" style={{ animation: `workDance 3s` }}>{'<'}Rubix{'/>'}</span>
        <span className="header-font" id="about-eight" style={{ animation: `workDanceSequal 4s` }}>{'<'}Script{'/>'}</span>
        <span className="header-font" id="about-nine" style={{ animation: `workDance 5s` }}>{'<'}Navbar{'/>'}</span>
          <div>
          <div className="content-left">
            <Container>
              <h1 classname="description-name color-text blueish" id="about-texts">
              About me
              </h1>
             <Col className="about-paragraph">
             <p>
              Professionally connected with the web development industry and information technology for many years. <br/><br/>
              Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and, recently chess.
               I'm a family person, therefore remote employment is preferred. <br/><br/> Interested in the full spectrum of Javascript Development and working on ambitious projects with positive people.
              </p>
             </Col>
            </Container>
          </div>
          <div className="content-right">
            <Col className="cube-animation">
              <CubeContainer />
            </Col>
          </div>
          </div>
          <div id="designedNCoded">
            <h6 className="category category-absolute designedNCoded">
              Designed and coded by{" "}
                <Link
                  to="/work"
                  target="_blank"
                >
                  <img
                    alt="..."
                    className="creative-tim-logo"
                    src={require("assets/img/jason-Maynard.png")}
                  />
                </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
