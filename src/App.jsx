import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import MainContent from "./components/MainContent/MainContent";

import "./styles/less/App.less";

class App extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Router>
        <Layout className="App" style={{ height: "100vh" }}>
          <SideNav />
          <Layout style={{ padding: "0 24px 24px" }}>
            <MainContent movies={movies} />
          </Layout>
        </Layout>
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
