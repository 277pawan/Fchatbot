import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [work, setWork] = useState("");
  const [adress, setAdress] = useState("");
  const [error, setError] = useState("");
  const [message, setmessage] = useState("");
  const resetform = () => {
    setName("");
    setMail("");
    setPass("");
    setWork("");
    setAdress("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      mail: mail,
      password: pass,
      work: work,
      adress: adress,
    };
    fetch("https://backendchatbot.vercel.app/Signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(() => {
        setmessage("Your account is successfully created");
        alert("successfully Sign in");
        setTimeout(() => setmessage(""), 5000);
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        if (error.status === 409) {
          setError("Sorry!,This email already exists");
          alert("Sorry try another email");
        } else {
          setError(
            "Oops, Please use uppercase,lowercase and numbers in your password."
          );
        }
        setTimeout(() => setError(""), 5000);
      });
    setName("");
    setMail("");
    setPass("");
    setWork("");
    setAdress("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <h1 className="heading">Signup</h1>
          <p style={{ color: "red" }}>{error}</p>
          <p style={{ color: "Lightgreen" }}>{message}</p>
          <br /> <br />
          <input
            type="text"
            id="name"
            className="input-style"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <input
            type="email"
            id="mail"
            className="input-style"
            placeholder="abc11@gmail.com"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br /> <br />
          <input
            type="password"
            id="pass"
            className="input-style"
            placeholder="enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            id="work"
            className="input-style"
            placeholder="Profession"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <br /> <br />
          <input
            type="text"
            id="adress"
            className="input-style"
            placeholder="enter the address"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <br /> <br />
          <input
            type="reset"
            className="resetbutton"
            onClick={() => {
              resetform();
            }}
          />
          <input type="submit" className="submitbutton" value="Submit" />
        </center>
      </form>
    </div>
  );
}

export default Signup;
