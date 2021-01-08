import React, { Component } from "react";
import { Button, Progress } from "antd";

class SelectMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }
  tick() {
    if (this.state.seconds < 100) {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  handleRandomSelection = () => {
    let movies = this.props.movies;
    let randomMovie = movies[Math.floor(Math.random() * (movies.length - 1))];
    console.log("random movie =>", randomMovie);
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <Progress type="circle" percent={this.state.seconds} />
        <Button type="primary" onClick={this.handleRandomSelection}>
          Select Movie
        </Button>
      </div>
    );
  }
}

export default SelectMovie;
