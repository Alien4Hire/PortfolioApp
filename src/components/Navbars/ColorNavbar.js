/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Row,
  Nav,
  Container,
  UncontrolledTooltip,
  Modal,
  Col,
  Input,
  Label,
  FormGroup,
  CardBody,
  Form,
  CardTitle,
  Card,

} from "reactstrap";
import Logo from '../../assets/img/NameLogo.png';
import ShowYourWork from '../Custom/WorkSecurity';
import emailjs from 'emailjs-com';
emailjs.init("user_3pxPCw304DHbOSfDwIS5s");
// core components

function ColorNavbar() {
  const [hoverMenu, setHoverMenu] = useState(false)
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [bodyClick, setBodyClick] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [menuHover, setMenuHover] = useState(false);
  const [modal, setModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [focus, setFocus] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [messaged, setMessaged] = useState('');
  const [contactNumber, setContactNumber] = useState("000000");

  // eslint-disable-next-line no-unused-vars
  const senderEmail = 'jaymaynard84@gmail.com'

  const contactData = {
    name: `${firstName} ${lastName}`,
    email,
    message: messaged,
    contactNumber,
  }

  const launch = () => setModal(!modal);

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const handleFocus = (e) => {
    setFocus(e.target.name);
  };

  //update Email date
  const handleEmailChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setEmail(value);
  };

  const handleFirstNameChange = (e) => {
    const { name, value } = e.target;
    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const { name, value } = e.target;
    setLastName(value);
  };
  
  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessaged(value);
  };
  
  const statechange = (e) => {
    setMenuDropdown(true);
  }

  //submit and email
  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    emailjs.send('service_9qx6s3l', 'template_p50rplk', contactData)
      .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert('FAILED...', error);
      });
  }

  useEffect(() => {
    console.log(contactData)
  }, [firstName, lastName, email, messaged, contactData])

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
        onMouseLeave={(e) => setMenuDropdown(false)}
      >
        <Container className="navbar-grid">
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link} style={{ animation: `fadeIn 3s` }}>
              <img src={Logo} href="" className={`HomePageLogo ${menuDropdown ? ' HomePagedroptitle' : '' }`} alt="#" />
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand" className={`HomePageLogo ${menuDropdown ? ' display-none' : '' }`}>
              Hi, I'm Jason, web developer.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          {/* <span 
            onClick={(e) => removeTask(e)} 
            className="remove-item"
            onMouseEnter={() => setDelIcon('mdi mdi-close-box icon-watchlists')} 
            onMouseLeave={() => setDelIcon('mdi mdi-close-box-outline icon-watchlists')}
            >
                {delStock === name && (
                <i className={delIcon}></i>
                )}
            </span> */}
          <Collapse navbar isOpen={collapseOpen}>
            <div>
            <Nav className="ml-auto navAll-el" navbar>
              <UncontrolledDropdown 
                nav 
                inNavbar 
                // tag={Link}
                // to="/presentation"
                onMouseEnter = {() => setHoverMenu('home')}
                onMouseLeave = {() => setHoverMenu(false)}
                className= "fix-nav"
                >
                <DropdownToggle 
                  className="mr-2 home-nav" 
                  color="default" 
                  to="/" 
                  tag={Link} 
                  nav
                >
                  <div className="fixit-navbar">
                    { hoverMenu !== 'home' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M19 22H5C4.44772 22 4 21.5523 4 21V13H2L11.292 3.70698C11.4796 3.51921 11.7341 3.4137 11.9995 3.4137C12.2649 3.4137 12.5194 3.51921 12.707 3.70698L22 13H20V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z" fill="#a5a5a5"></path>
                    </svg>
                    )}
                    { hoverMenu === 'home' && (
                      <span className="menu-text" style={{ animation: `fadeIn 1s` }}>Home</span>
                    )}
                  </div>
                  </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown 
                nav 
                inNavbar 
                // tag={Link}
                // to="/about"
                onMouseEnter = {() => setHoverMenu('about')}
                onMouseLeave = {() => setHoverMenu(false)}
                >
                <DropdownToggle 
                  className="mr-2 about-nav" 
                  color="default" 
                  to="/about" 
                  tag={Link} 
                  nav

                >
                  <div className="fixit-navbar">
                    { hoverMenu !== 'about' && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#a5a5a5"></path>
                      <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="#a5a5a5"></path>
                      </svg>
                    )}
                    { hoverMenu === 'about' && (
                      <span className="menu-text" style={{ animation: `fadeIn 1s` }}>About</span>
                    )}
                </div>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown 
                nav 
                inNavbar 
                // tag={Link}
                // to="skills"
                onMouseLeave = {() => setHoverMenu(false)}
                onMouseEnter = {() => setHoverMenu('skills')}
                >
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  to="/skills" 
                  tag={Link} 
                  nav

                >
                  <div className="fixit-navbar">
                    { hoverMenu !== 'skills' && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z" fill="#a5a5a5"></path>
                      </svg>
                    )}
                    { hoverMenu === 'skills' && (
                      <span className="menu-text" style={{ animation: `fadeIn 1s` }}>Skills</span>
                    )}
                </div>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown 
                nav 
                inNavbar 
                // tag={Link}
                // to=""
                onMouseEnter = {() => setHoverMenu('work')}
                onMouseLeave = {() => setHoverMenu(false)}
                >
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  to=""
                  nav

                >
                  <div className="fixit-navbar">
                    { hoverMenu !== 'work' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 16 16" onClick={(e) => statechange(e)}>
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" fill="#a5a5a5"/>
                      </svg>
                    )}
                    { hoverMenu === 'work' && (
                      <span className="menu-text" style={{ animation: `fadeIn 1s` }} onClick={(e) => statechange(e)}>Work</span>
                    )}
                  </div>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown 
                nav 
                inNavbar 
                // tag={Link}
                // to=""
                onMouseEnter = {() => setHoverMenu('contact')}
                onMouseLeave = {() => setHoverMenu(false)}
                >
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  onClick={() => launch()}
                  nav

                >
                  <div className="fixit-navbar">
                    { hoverMenu !== 'contact' && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="#a5a5a5"></path>
                      </svg>
                    )}
                    { hoverMenu === 'contact' && (
                      <span className="menu-text" style={{ animation: `fadeIn 1s` }}>Contact</span>
                    )}
                  </div>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className={` ${menuHover ? 'more-padding-left ' : 'padding-left ' } slide-right`}>
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  nav
                  tag={Link} 
                  to="https://www.facebook.com/Jason-Makes-Websites-101997348569309" 
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="#a5a5a5"/>
                  </svg>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className={` ${menuHover ? 'hide-icon ' : '' } slide-right`}>
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  nav
                  tag={Link} 
                  to="https://twitter.com/HubcapFounder" 
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" fill="#a5a5a5"/>
                  </svg>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className={` ${menuHover ? 'hide-icon ' : '' } slide-right`}>
                <DropdownToggle 
                  className="mr-2 skills-nav" 
                  color="default" 
                  nav
                  tag={Link} 
                  to="https://www.linkedin.com/in/jason-maynard-54b538ba/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="#a5a5a5"/>
                  </svg>
                </DropdownToggle>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href=""
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Buy Now
                </Button>
              </NavItem> */}
            </Nav>
            <Container >
              {menuDropdown === true && (
              <div className="clickthrough-box" style={{ animation: `moveIn 1s` }} >
                <div className="shift-right">
                <ShowYourWork />
                </div>
              </div>
              )}
            </Container>
            </div>
          </Collapse>
        </Container>
        <Modal isOpen={modal} toggle={() => launch()} className="itWorkedSoWell">
          {/* <ModalHeader toggle={() => launch()}>Components</ModalHeader> */}
              <Row className="modal-row">
              <Col className="">
                  <Card className="card-contact no-transition">
                  <CardTitle className="text-center" tag="h3">
                      Contact Me
                  </CardTitle>
                  <Row>
                      <Col className="ml-auto">
                      <CardBody>
                          <div className="info info-horizontal">
                          <div className="icon icon-info">
                              <i className="nc-icon nc-pin-3" />
                          </div>
                          <div className="description-contact">
                              <h4 className="info-titles">
                              Find Me online
                              </h4>
                              <p className="description-description-one">
                              You found me once, now check<br />
                              out my freelance services available<br />
                              on <a href="https://www.upwork.com/freelancers/~015f09e9b279777d9c">Upwork</a>
                              </p>
                          </div>
                          </div>
                          <div className="info info-horizontal" id="fall-down">
                          <div className="icon icon-danger">
                              <i className="nc-icon nc-badge" />
                          </div>
                          <div className="description-contact">
                              <h4 className="info-titles">Give me a ring</h4>
                              <p className="description-description-two">
                              Jason Maynard <br />
                              740-975-3508 <br />
                              Mon - Fri, 8a-10p
                              </p>
                          </div>
                          </div>
                      </CardBody>
                      </Col>
                      <Col className="mr-auto" id="move-form-left" md="6">
                      <Form id="contact-form" role="form" onSubmit={(e) => onSubmit(e)}>
                          <CardBody>
                          <Row>
                              <Col md="6">
                              <FormGroup className="label-floating">
                                  <label className="control-label">
                                  First name
                                  </label>
                                  <Input
                                  name="name"
                                  placeholder="First Name"
                                  type="text"
                                  onFocus={handleFocus}
                                  onChange={handleFirstNameChange}
                                  />
                              </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup className="label-floating">
                                  <label className="control-label">
                                  Last name
                                  </label>
                                  <Input
                                  name="name"
                                  placeholder="Last Name"
                                  type="text"
                                  onFocus={handleFocus}
                                  onChange={handleLastNameChange}
                                  />
                                  <input type='hidden' name='contact_number' value={contactNumber} />
                              </FormGroup>
                              </Col>
                          </Row>
                          <FormGroup className="label-floating">
                              <label className="control-label">
                              Email address
                              </label>
                              <Input
                              name="email"
                              placeholder="Email"
                              type="email"
                              onFocus={handleFocus}
                              onChange={handleEmailChange}
                              />
                          </FormGroup>
                          <FormGroup className="label-floating">
                              <label className="control-label">
                              Your message
                              </label>
                              <Input
                              id="message"
                              name="message"
                              placeholder="Message"
                              type="textarea"
                              rows="6"
                              onFocus={handleFocus}
                              onChange={handleMessageChange}
                              />
                          </FormGroup>
                          <Row>
                              <Col md="6">
                              <FormGroup check>
                                  <Label check>
                                  <Input defaultValue="" type="checkbox" />
                                  I'm not a robot !{" "}
                                  <span className="form-check-sign" />
                                  </Label>
                              </FormGroup>
                              </Col>
                              <Col md="6">
                              <Button
                                  className="pull-right"
                                  color="primary"
                                  type="submit"
                                  onClick={(e) => onSubmit(e)}
                              >
                                  Send Message
                              </Button>
                              </Col>
                          </Row>
                          </CardBody>
                      </Form>
                      </Col>
                  </Row>
                  </Card>
              </Col>
              </Row>
          {/* <ModalFooter>
            <Button color="primary" onClick={() => launch()}>Do Something</Button>{' '}
            <Button color="secondary" onClick={() => launch()}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
