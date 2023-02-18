import { useState } from "react";
import Leftside from "./components/Leftside";
import Main from "./components/Main";
import Right from "./components/Rightside";
import "./style/All.css";

function App() {
  const [tweet, setTweet] = useState([]);

  const [input, setInput] = useState([]);

  return (
    <div className="all">
      <div className="left">
        <Leftside />
      </div>
      <div className="mid">
        <Main
          tweet={tweet}
          setTweet={setTweet}
          input={input}
          setInput={setInput}
        />
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
}

export default App;
