import React, { Component } from "react";

export default class PostList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     posts: ["post 1", "post 2", "post 3", "post 4"],
  //   };
  // }

  state = {
    posts: [
      { title: "post 1" },
      { title: "post 2" },
      { title: "post 3" },
      { title: "post 4" },
    ],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section>
        <h2>Here are a list of posts:</h2>
        <ul>
          {this.state.posts.map((post, index) => {
            return <li key={`${post.title}-${index}`}>{post.title}</li>;
          })}
        </ul>
      </section>
    );
  }
}
