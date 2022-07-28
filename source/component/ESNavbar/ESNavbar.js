import React, { PureComponent } from "react";
import HomeButton from "../HomeButton.js";
import DownloadButton from "../DownloadButton.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
//import PropTypes from "prop-types";

export default class ESNavbar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, title, max, now, progressLabel, data } = this.props;
    document.title = title || "Eaglescope";
    return (
      <Navbar bg="primary" variant="dark">
        {url ? <HomeButton url={url} /> : null}
        <DownloadButton data={data} title={title}/>
        <Navbar.Brand href={url ? url : "#"}>
          {title ? title : "Eaglescope"}
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <ProgressBar
            style={{ width: "30rem" }}
            className="border border-light bg-light"
            min={0}
            variant="success"
            max={max}
            now={now}
            label={progressLabel}
          />
        </Form>
      </Navbar>
    );
  }
}

// ESNavbar.protoType = {
//     title
//     url
// max
// now
// ProgressLabel
// }
