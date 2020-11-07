import React, { Component } from "react";
import "./App.scss";

import dog from "./dog.jpeg";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      life: 3,
      score: 0,
    };
  }

  handleClick = (e) => {
    console.warn(e.target.name);
    if (e.target.name ==='dog') {
      this.setState({
        score: this.state.score + 1
      });
    } else {
      if(this.state.life === 1) {
        alert('game over');
        this.setState({
          life: 3,
          score: 0,
        })
      } else {
        this.setState({
          life: this.state.life - 1
        });
      }
    } 
  };


  render() {
    const { life, score } = this.state;
    return (
      <div>
        <div className="center life">生命值：{life}</div>
        <div className="outside">
          <div className="frame" onClick={this.handleClick}>
            <img
              alt="狗"
              src={dog}
              name="dog"
              className="dog"
              style={{
                animationDuration: `${4 / (score + 1)}s`,
              }}
            />
          </div>
        </div>
        <div className="center score">得分：{score}</div>
      </div>
    );
  }
}
