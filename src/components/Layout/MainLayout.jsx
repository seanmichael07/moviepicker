import React from "react";
import { Layout } from "antd";
import SideNav from "../SideNav/SideNav";
import MainContent from "../content/MainContent";

function MainLayout(props) {
  return (
    <Layout>
      <SideNav {...props} />
      <Layout style={{ padding: "0 24px 24px" }}>
        <MainContent {...props} />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
