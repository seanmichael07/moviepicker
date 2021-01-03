import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
import { List, Row, Col, Spin, Input, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import { createMovie } from "../store/actions/movieActions";
class AddMovie extends Component {
  state = {
    loading: false,
    hasMore: true,
    newMovieName: null,
  };

  // TODO: Figure out how to make this work with how my data fetching works
  handleInfiniteOnLoad = () => {
    // let { data } = this.state;
    // this.setState({
    //   loading: true,
    // });
    // this.fetchData((res) => {
    //   data = data.concat(res.results);
    //   this.setState({
    //     data,
    //     loading: false,
    //   });
    // });
  };

  handleAddMovie = () => {
    let { newMovieName } = this.state;

    let newMovie = {
      movieName: newMovieName,
      watched: false,
      category: "Movie",
    };

    this.props.createMovie(newMovie);

    this.setState({ newMovieName: null });
  };

  handleMovieChange = (value) => {
    this.setState({
      newMovieName: value,
    });
  };

  render() {
    return (
      <Row
        style={{ height: "100%" }}
        justify="center"
        align="middle"
        gutter={16}
      >
        <Col span={8}>
          <Input
            placeholder="Type movie name here"
            allowClear
            size="large"
            value={this.state.newMovieName}
            onChange={(event) => this.handleMovieChange(event.target.value)}
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            icon={<CheckOutlined />}
            onClick={this.handleAddMovie}
          >
            Add Movie to Watchlist
          </Button>
        </Col>
        <Col span={12} style={{ height: "100%" }}>
          <div
            className="demo-infinite-container"
            style={{
              border: "1px solid #e8e8e8",
              borderRadius: "4px",
              overflowY: "scroll",
              padding: "8px 24px",
              maxHeight: "100%",
            }}
          >
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
            >
              <List
                dataSource={this.props.movies}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      title={item.movieName}
                      description={item.category}
                    />
                    {!item.watched ? (
                      <div>Not Watched</div>
                    ) : (
                      <div>Watched</div>
                    )}
                  </List.Item>
                )}
              >
                {this.state.loading && this.state.hasMore && (
                  <div
                    className="demo-loading-container"
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Spin />
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: (movie) => dispatch(createMovie(movie)),
  };
};
export default connect(null, mapDispatchToProps)(AddMovie);
