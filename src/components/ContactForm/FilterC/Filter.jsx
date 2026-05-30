import { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <label>
          {" "}
          Find contac by Name
          <br />
          <input type="text" name="filter" onChange={this.handleChange} />
        </label>
      </>
    );
  }
}

export default Filter;
