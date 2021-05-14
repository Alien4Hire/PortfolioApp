import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Logo from '../../assets/img/NameLogo.png';

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
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
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="danger">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              <img src={Logo} href="/" className='HomePageLogo' alt="#" />
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Hi I'm Jason, Web Developer.
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
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar to="/">
                <DropdownToggle className="mr-2" to="/" tag={Link} color="default" nav >
                  Home
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Sections
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/works#headers" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/works#features" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Features
                  </DropdownItem>
                  <DropdownItem to="/works#blogs" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/works#teams" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/works#projects" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/works#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/works#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/works#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Examples
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/add-product" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    <i className="nc-icon nc-world-2" />
                    Discover
                  </DropdownItem>
                  <DropdownItem to="/e-commerce" tag={Link}>
                    <i className="nc-icon nc-send" />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="nc-icon nc-spaceship" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="nc-icon nc-lock-circle-open" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="nc-icon nc-album-2" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="nc-icon nc-bookmark-2" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/search-with-sidebar" tag={Link}>
                    <i className="nc-icon nc-zoom-split" />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to="/settings" tag={Link}>
                    <i className="nc-icon nc-settings-gear-65" />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to="/twitter-redesign" tag={Link}>
                    <i className="nc-icon nc-tie-bow" />
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-danger-navbar"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Buy Now
                </Button>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
