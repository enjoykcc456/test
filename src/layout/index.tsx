import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header.component";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
