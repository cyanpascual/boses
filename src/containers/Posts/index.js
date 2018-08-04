import React, { Component } from 'react';
  var left ={
    float:"left",
    display:"inline-block",
    width: "100px",
    height: "100%",
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold"
  }

  var right = {
    float:"left",
    display:"inline-block",
    width: "-moz-calc(95% - 100px)",
    width: "-webkit-calc(95% - 100px)",
    width: "calc(95% - 100px)",
    height: "100%",
    fontSize: "32px",
    color: "white",
    padding:"2%",
    fontFamily: "Arial",
    fontWeight: "bold"

  }


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
        
        
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key} style ={{backgroundColor: '#801515', margin:'1em', height:"100px", padding:"1em",border:"2px solid #801515",borderRadius:"25px"}}>
                <div style={left}>
                  <div>Upvotes: { posts[key].upvote }</div>
                  <br/>
                  <br/>
                  <button 
                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                    type="button"
                  >
                    Upvote
                  </button> 
                </div>
                <div style={right}>{posts[key].title }</div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
