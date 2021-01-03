import React, { Component } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { List, Row, Col, Spin, Input, Button } from "antd";
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";

const fakeDataUrl =
  "https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo";

const fakeData = [
  // {
  //   id: "1",
  //   movieName: "Lord of the Rings, The Return of the King",
  //   watched: true,
  //   category: "Movie",
  // },
  // { id: "2", movieName: "Jumanji", watched: false, category: "Movie" },
  // { id: "3", movieName: "Mamma Mia", watched: false, category: "Movie" },
  // { id: "4", movieName: "Avengers", watched: false, category: "Movie" },
  // { id: "5", movieName: "Now You See Me", watched: false, category: "Movie" },
  // { id: "6", movieName: "Man of Steel", watched: false, category: "Movie" },
  // { id: "7", movieName: "Hercules", watched: false, category: "Movie" },
  // { id: "8", movieName: "Ip Man", watched: false, category: "Movie" },
  // {
  //   id: "9",
  //   movieName: "Captain America, The Winter Soldier",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  // {
  //   id: "1",
  //   movieName: "Lord of the Rings, The Return of the King",
  //   watched: true,
  //   category: "Movie",
  // },
  // { id: "2", movieName: "Jumanji", watched: false, category: "Movie" },
  // { id: "3", movieName: "Mamma Mia", watched: false, category: "Movie" },
  // { id: "4", movieName: "Avengers", watched: false, category: "Movie" },
  // { id: "5", movieName: "Now You See Me", watched: false, category: "Movie" },
  // { id: "6", movieName: "Man of Steel", watched: false, category: "Movie" },
  // { id: "7", movieName: "Hercules", watched: false, category: "Movie" },
  // { id: "8", movieName: "Ip Man", watched: false, category: "Movie" },
  // {
  //   id: "9",
  //   movieName: "Captain America, The Winter Soldier",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  // {
  //   id: "1",
  //   movieName: "Lord of the Rings, The Return of the King",
  //   watched: true,
  //   category: "Movie",
  // },
  // { id: "2", movieName: "Jumanji", watched: false, category: "Movie" },
  // { id: "3", movieName: "Mamma Mia", watched: false, category: "Movie" },
  // { id: "4", movieName: "Avengers", watched: false, category: "Movie" },
  // { id: "5", movieName: "Now You See Me", watched: false, category: "Movie" },
  // { id: "6", movieName: "Man of Steel", watched: false, category: "Movie" },
  // { id: "7", movieName: "Hercules", watched: false, category: "Movie" },
  // { id: "8", movieName: "Ip Man", watched: false, category: "Movie" },
  // {
  //   id: "9",
  //   movieName: "Captain America, The Winter Soldier",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  //   id: "10",
  //   movieName: "Antman and The Wasp",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  //   id: "11",
  //   movieName: "The Hills Have Eyes",
  //   watched: false,
  //   category: "Movie",
  // },
  // { id: "12", movieName: "The Conjuring", watched: false, category: "Movie" },
  // {
  //   id: "13",
  //   movieName: "Django Unchained",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  //   id: "14",
  //   movieName: "Star Wars, Revenge of the Sith",
  //   watched: false,
  //   category: "Movie",
  // },
  // { id: "16", movieName: "The Dark Knight", watched: false, category: "Movie" },
  // {
  //   id: "15",
  //   movieName: "The Dark Knight Rises",
  //   watched: false,
  //   category: "Movie",
  // },
  // { id: "17", movieName: "Justice League", watched: false, category: "Movie" },
  // {
  //   id: "18",
  //   movieName: "The Amazing Spider Man",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  //   id: "19",
  //   movieName: "Dawn of the Planet of the Apes",
  //   watched: false,
  //   category: "Movie",
  // },
  // {
  //   id: "20",
  //   movieName: "The Imitation Game",
  //   watched: false,
  //   category: "Movie",
  // },
  // { id: "21", movieName: "Limitless", watched: false, category: "Movie" },
];

class AddMovie extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    setMovie: null,
  };

  //Temp function until I start pulling data from DB
  componentDidMount() {
    this.setState({
      data: fakeData,
    });
  }

  // componentDidMount() {
  //   this.fetchData((res) => {
  //     this.setState({
  //       data: res.results,
  //     });
  //   });
  // }

  fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

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

  onAdd = () => {
    let { setMovie, data } = this.state;
    data = data.concat({
      id: "22",
      movieName: setMovie,
      watched: false,
      category: "Movie",
    });

    this.setState({
      data,
      loading: false,
      setMovie: null,
    });
  };

  setMovie = (value) => {
    this.setState({
      setMovie: value,
    });
  };

  render() {
    console.log(this.state);
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
            value={this.state.setMovie}
            onChange={(event) => this.setMovie(event.target.value)}
          />
        </Col>
        <Col span={4}>
          <Button type="primary" icon={<CheckOutlined />} onClick={this.onAdd}>
            Add Movie to List
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
                dataSource={this.state.data}
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

export default AddMovie;
