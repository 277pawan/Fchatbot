import React from "react";
import arrow from "../../assets/arrowdown.png";
import github from "../../assets/githubimg.png";
import linkdin from "../../assets/linkdin.png";

import "./Footer.css";
function Footer() {
  function setgithub() {
    window.location.href = "https://github.com/277pawan";
  }
  function setlinkedin() {
    window.location.href = "https://www.linkedin.com/in/pawan-bisht-a943161b9/";
  }
  return (
    <div className="footercontainer">
      <div className="footerheadlight_view">
        Do you want to step into the <br></br>future before others.<br></br>
        Join Us.<br></br>
        <img className="arrowcss" src={arrow} alt="arrowdown"></img>
        <br></br>
        <span>
          <img
            className="github"
            src={github}
            alt="arrowdown"
            onClick={setgithub}
          ></img>
          &nbsp;
          <img
            className="linkdin"
            src={linkdin}
            alt="arrowdown"
            onClick={setlinkedin}
          ></img>
        </span>
        <br></br>
        <p className="copyright">
          <abbr title="Pawan Bisht">&copy; Educational purpose</abbr>
        </p>
      </div>
    </div>
  );
}

export default Footer;
