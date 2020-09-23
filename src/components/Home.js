import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);

    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id} className="post card">
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">HOME</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
