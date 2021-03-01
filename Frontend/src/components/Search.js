import React, { Component } from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";
import "./Search.css";
import Date from "./Date";

export class Search extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='dropdown pr-0' style={{ display: "inline" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant='outline-dark btn-sm'
                id='dropdown-basic'>
                Select the URL for more details.
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
                <Dropdown.Item href='#'>Arabic</Dropdown.Item>
                <Dropdown.Item href='#'>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md='auto' xs='auto' className='pr-0'>
            <Date wrapperStyle='display: inline'>Select Date</Date>
          </Col>
          <Col md='auto' xs='auto'>
            <Button variant='success' className='search'>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
