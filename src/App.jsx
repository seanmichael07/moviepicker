import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import Routes from "./routes";

import "./styles/less/App.less";

const { Content } = Layout;

class App extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Router>
        <Route
          render={(props) => (
            <Layout className="App" style={{ height: "100vh" }}>
              <SideNav {...props} />
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content
                  style={{
                    padding: "1% 1%",
                    minHeight: "90%",
                    background: "#fff",
                    marginTop: "1%",
                    borderRadius: "25px",
                  }}
                >
                  <Routes {...props} movies={movies} />
                </Content>
              </Layout>
            </Layout>
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.firestore.ordered.movies,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "movies" }])
)(App);
