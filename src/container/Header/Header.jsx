import React, { useState } from "react";
import "./Header.css";
import person_profile from "../../assets/people.png";
import person_ai from "../../assets/ai.png";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Tilt from "react-vanilla-tilt";

function Header() {
  const tiltStyle = {
    backgroundColor: "transparent",
    boxShadow: "none",
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    glare: false, // if it should have a "glare" effect
    "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false,
  };

  const navigate = useNavigate();
  const [logvalue, setlogvalue] = useState("false");
  const [token, setToken] = useState("");
  const [emailenter, setemailenter] = useState("");

  function Getmail() {
    let data = {
      emailenter: emailenter,
    };
    fetch("https://backendchatbot.vercel.app/", {
      method: "POST",
      mode: "no-cors",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setToken(data.token);
        console.log(token);
        alert("Logged in successfully.");
        setTimeout(() => navigate("/chat"), 1000);
        setlogvalue("true");
      })
      .catch((error) => {
        console.log("error found", error);
        alert("Sorry, This account does not exist!");
        setTimeout(() => navigate("/Signup"), 800);

        // throw error;
      });
  }

  return (
    <>
      <div id="section--1" className="headline_article">
        Let's build Something <br></br> amazing with GPT-3 <br></br>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Chatbot.")
              .pauseFor(4000)
              .deleteAll()
              .typeString("Powerful Tool.")
              .start();
          }}
        />
      </div>
      <div className="headline_view">
        Yet bed any for travelling assistance indulgence unpleasing<br></br>
        {/* <div>{emailenter}</div> */}
        Not thoughts all exercise blessing undulgence way<br></br> everything
        joy boisterous the attachment.
        <br></br>Party we years to order allow asked of.
      </div>
      <div className="headline_view">
        <span>
          <input
            id="getemail"
            className="mail_get_view"
            type="email"
            placeholder="Enter email here"
            value={emailenter}
            onChange={(e) => setemailenter(e.target.value)}
          ></input>
          <button
            id="checkemail"
            className="button_get"
            value={logvalue}
            onClick={Getmail}
          >
            Get Start
          </button>
        </span>
      </div>
      <br />
      <div className="chatperson_view">
        <img src={person_profile} alt="person profile"></img>
      </div>
      <Tilt style={tiltStyle}>
        <div>
          <img
            className="person_ai_view"
            src={person_ai}
            alt="personaimage"
          ></img>
        </div>
      </Tilt>
    </>
  );
}

export default Header;
