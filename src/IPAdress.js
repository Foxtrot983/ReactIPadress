import React, { Component } from "react";
import "./styles.css";
class IPAddress extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ip}</h1>
        <p>Это ваш IP адресс ;р</p>
      </div>
    );
  }
}
export default IPAddress;
