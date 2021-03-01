import React from "react";
import Score from "./components/Score";
import Banner from "./components/Banner";
import { Layout } from "./components/Layout";

export const Dashboard = () => (
  <div>
    <Banner></Banner>

    <Layout>
      <Score></Score>
    </Layout>
  </div>
);
