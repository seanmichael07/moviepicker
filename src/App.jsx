import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/less/App.less";

import MainLayout from "./components/Layout/MainLayout";

const App = () => (
  <Router>
    <Route
      render={(props) => (
        <Layout className="App" style={{ height: "100vh" }}>
          <MainLayout {...props} />
        </Layout>
      )}
    />
  </Router>
);

export default App;
