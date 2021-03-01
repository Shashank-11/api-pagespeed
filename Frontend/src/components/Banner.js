import React, { Component } from "react";
import "./Banner.css";
import { Layout } from "./Layout";

export class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <Layout>
          <h1>Welcome to AAC lighthouse</h1>
        </Layout>
      </div>
    );
  }
}

export default Banner;
