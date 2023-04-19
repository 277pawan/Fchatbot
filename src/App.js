import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Blog, Possibility, Header, Whatgpt3, Chat } from "./container";
import { Navbar, Feature, Signup } from "./components";
import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<>
            <Header />
            <Whatgpt3 />
            <Feature />
            <Possibility />
            <Blog />
            <Footer />
          </>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
        {/* <Chat /> */}
      </div>

    </BrowserRouter>

  );
};

export default App;
