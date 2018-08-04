import React, { Component } from 'react';

class Posts extends Component {

  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,

    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Hold on...
        </div>
      );
    }

    return (

      <div className="Posts" >
        <a href ="/add-post">Add Post</a>
        { Object.keys(posts).map(function(key) {
            return (

              <div key={key} style ={{backgroundColor: 'rgb(139, 157, 195)', margin:'1em' }}>
                <div>Complaint: { posts[key].title }</div>
                <div>Upvotes: { posts[key].upvote }</div>
                <div>
                  <button 
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button> 
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
