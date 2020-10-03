
import React, { Component } from "react";
import "./IntroVideo.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
    return (
      <div className="logo_wrapper">
        <div className="screen">
          <LoaderLogo id="logo" />
        </div>
      </div>
    );
  }
  
class IntroVideo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false
      };
    }
render() {
    return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
  }
}

export default IntroVideo;