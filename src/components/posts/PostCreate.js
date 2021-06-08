import React from "react";
import axios from "axios";

class PostCreate extends React.Component {
  state = {
    title: "",
    body: "",
    response: [],
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const createPost = async () => {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: this.state.title,
          body: this.state.body,
          userId: 1,
        },
        {
          headers: {
            "Content-type": "application/json",
            charset: "UTF-8",
          },
        }
      );
      this.setState({ response: data });
      console.log(this.state.response);
    };
    createPost();
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <label>Body</label>
            <textarea
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            ></textarea>
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
        <div className="ui fluid card">
          <div className="content">
            <div className="header">{this.state.response.title}</div>
            <div className="description">{this.state.response.body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCreate;
