import React from "react";
import { Layout } from "antd";
import Routes from "../../routes";

const { Content } = Layout;

const MainContent = (props) => {
  return (
    <Content
      style={{
        padding: "1% 1%",
        minHeight: "90%",
        background: "#fff",
        marginTop: "1%",
        borderRadius: "25px",
      }}
    >
      <Routes />
    </Content>
  );
};

export default MainContent;
