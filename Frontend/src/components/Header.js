import React from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import styled from "styled-components";
import "./Header.css";

const Styles = styled.div`
  .navbar {
    margin-bottom: 0px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    &:hover {
    }
  }
  .app-title {
    font-weight: bold;
    font-size: 24px;
    font-family: trebuchet ms;
  }
`;

export const Header = () => (
  <Styles>
    <Row bsPrefix>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='m-b-0 header'
        sticky='top'
        fixed='bottom'>
        <Navbar.Brand className='app-title' href='/'>
          Analytics Reporting Tool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Dashboard</Nav.Link>
            <Nav.Link href='/manage-sites'>Manage Sites</Nav.Link>
            <Nav.Link href='/references'>References</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  </Styles>
);
