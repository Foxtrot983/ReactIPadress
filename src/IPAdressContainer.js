import React, { Component } from "react";

let xhr;

class IPAdress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ipadress: "...",
      city: "..."
    };
    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("get", "https://ipinfo.io/json", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);

      this.setState({
        ipadress: response.ip,
        city: response.city
      });
    }
  }

  render() {
    return <p>Test</p>;
  }
}

export default IPAdress;
