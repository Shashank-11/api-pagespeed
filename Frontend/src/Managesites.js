import React from "react";
import Banner from "./components/Banner";
import { Layout } from "./components/Layout";
// import { Updateurls } from "./components/Updateurls";
import {
  Container,
  Table,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "./components/Search.css";

export const Managesites = () => (
  <div>
    <Banner></Banner>
    <Layout>
      <h3>
        Here you can manage the site URLs by adding new or updating the
        existing.
      </h3>
      <div>
        <Container className='p-0'>
          <Row className='mt-4 mb-4'>
            <Col className='pr-0' style={{ display: "inline" }}>
              <FormControl
                type='text'
                placeholder='New URL you want add..'
                className=' mr-sm-2'
              />
            </Col>
            <Col md='auto' xs='auto'>
              <Button variant='success' className='add'>
                Add
              </Button>
            </Col>
          </Row>

          <Table
            striped
            responsive
            bordered
            hover
            variant='dark'
            className='score'>
            <thead>
              <tr>
                <th>URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type='text'
                    disabled
                    value='https://www.rehabs.com/'
                    id='{id}'
                  />
                </td>
                <td md='auto' xs='auto'>
                  <Button variant='warning' className='add'>
                    Update binding
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    disabled
                    value='https://www.rehabs.com/'
                    id='{id}'
                  />
                </td>
                <td>
                  <Button variant='warning' className='add'>
                    Update binding
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type='text'
                    disabled
                    value='https://www.rehabs.com/'
                    id='{id}'
                  />
                </td>
                <td>
                  <Button variant='warning' className='add'>
                    Update binding
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          {/* <Updateurls></Updateurls> */}
        </Container>
      </div>
    </Layout>
  </div>
);
