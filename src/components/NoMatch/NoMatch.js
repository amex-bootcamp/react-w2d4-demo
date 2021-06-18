import React, { Component } from "react";

export default class NoMatch extends Component {
  render() {
    return <h3>No match for the path: {this.props.location.pathname}</h3>;
  }
}
