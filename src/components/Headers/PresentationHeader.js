/*eslint-disable*/
import React, {useState} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Col, Button, Row } from "reactstrap";
import TextArea from "../Custom/TextArea";
import RubiksCube from '../Custom/RubixCube/cube-iframe'

// core comments

function PresentationHeader() {
  const [buttonHover, setButtonHover] = useState(false);

  const logo = () => {
    return <img src={require("assets/img/jj.png")} alt="" className="special-j"/>
  }

  return (
    <>
      <div className="wrapper section section-dark" id="header-height">
        <div
          className="page-header section-dark"
        >
          <div>
          <div className="content-left">
            <Container>
             <Col>
                {/* <Description /> */}
                <TextArea
                  home={true}
                  // pre={"Hi,~I'm Jason,~Web Developer!"}
                  title={`Hi,~I'm Jason,~Web Developer!`}
                  subtitle={"Full Stack Developer / React Expert"}
                ></TextArea>
             </Col>
            </Container>
          </div>
          <div className="content-right">
            <Col className="cube-animation">
              <RubiksCube />
              {/* <span className="content-right cube-animation">o</span> */}
            </Col>
          </div>
          </div>
          {/* <div id="designedNCoded">
            <h6 className="category category-absolute designedNCoded">
              Designed and coded by{" "}
                <a
                  href="/work"
                  target="_blank"
                >
                  <img
                    alt="..."
                    className="creative-tim-logo"
                    src={require("assets/img/jason-Maynard.png")}
                  />
                </a>
            </h6>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
