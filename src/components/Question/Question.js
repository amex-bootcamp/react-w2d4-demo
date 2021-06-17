import React, { Component } from "react";

export default class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "ad",
      answer: "asdf",
      category: "asdf",
    };
  }

  render() {
    return (
      <div>
        <h2>Question: {this.state.question}</h2>
        <h3>Answer: {this.state.answer}</h3>
        <p>Category: {this.state.category}</p>
      </div>
    );
  }
}
