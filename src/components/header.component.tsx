import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

type Props = RouteComponentProps;

const Header: React.FC<Props> = ({ location }) => {
  //   const pathName = location.pathname;
  //   const path = pathName === "/" ? "home" : pathName.substr(1);
  //   const [activeItem, setActiveItem] = useState("");

  //   const handleOnClick = () => {
  //     setActiveItem(path);
  //   };

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="response-navbar-nav" />
      <Navbar.Collapse id="response-navbar-nav">
        <Nav>
          <Nav.Link
            as={Link}
            to="/"
            // onClick={handleOnClick}
            // active={activeItem === "home" ? true : false}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/features"
            // onClick={handleOnClick}
            // active={activeItem === "features" ? true : false}
          >
            Features
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
