import React from "react";
import Banner from "./components/Banner";
import { Layout } from "./components/Layout";

export const References = () => (
  <div>
    <Banner></Banner>
    <Layout>
      <h1>Research Google Lighthouse</h1>
      <h4>Sample GoogleApi for Lighthouse response look like following:</h4>
      <p>
        <pre>#### JSON Response here</pre>
      </p>
    </Layout>
  </div>
);
