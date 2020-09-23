import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleDelete}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
      <p>Post Not Ready</p>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // Params Id : Look in App.js where we Defined the Route
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id == id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
