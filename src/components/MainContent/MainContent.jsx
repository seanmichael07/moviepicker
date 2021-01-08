import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router";
import routes from "../../routes";

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
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => <route.main {...props} movies={props.movies} />}
          />
        ))}
      </Switch>
    </Content>
  );
};

export default MainContent;
