import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <h2>Add Card</h2>
        <input type="text" required placeholder="Name your Card"></input>
        <br></br>
        <input type="text" placeholder="Name your Color Code" required></input>
        <br></br>
        <button type="submit">Submit your Card</button>
      </form>
    );
  }
}
