import React from 'react';

var divStyle = {
  backgroundColor: '#801515',
  height: 100,
  width: "100%",
  padding: "50px 30px 0px 20px"
};

var aStyle = {
    color: "white",
    padding: "14px 25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontFamily: "Arial",
    fontWeight: "bold"
};

export class Header extends React.Component {
  render() {
      return (
        <div style ={divStyle} >
          <img src="https://i.imgur.com/SVPk9uj.png" alt="logo" width="25%" />
          <a href ="/add-post" style= {aStyle}>Post A Concern</a>
          <a href ="/posts" style= {aStyle}>Concerns</a>
        </div>
      );
  }
}