import React, { Component } from "react";
import loader from "../loader2.svg";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loader}
          alt="loading"
          style={{ height: "150px", width: "150px", margin: "auto auto" }}
        />
      </div>
    );
  }
}

export default Spinner;
