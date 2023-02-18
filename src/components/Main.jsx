import React from "react";
import "../style/Main.css";
import { CiBoxList } from "react-icons/ci";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { RiGalleryLine, RiFileGifLine } from "react-icons/ri";
import Tweets from "./Tweets";

const Main = ({ tweet, setTweet, input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value.length);
  };

  const handleClick = (e) => {
    setTweet((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <div className="header">
        <div className="header-top">Anasayfa</div>
        <div className="header-bot">
          <div>
            <div>Sana özel</div>
          </div>
          <div>
            <div>Takip edilenler</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="photo">
            <img
              src="https://pbs.twimg.com/profile_images/1617923724770000896/9JCajFZF_400x400.jpg"
              alt=""
            />
          </div>
          <div className="write">
            <input
              value={input}
              onChange={handleChange}
              placeholder="Neler oluyor?"
              type="text"
            />
          </div>
        </div>
        <div className="send">
          <div className="send-icons">
            <div className="send-icon">
              <RiGalleryLine />
            </div>
            <div className="send-icon">
              <RiFileGifLine />
            </div>
            <div className="send-icon">
              <CiBoxList />
            </div>
            <div className="send-icon">
              <VscSmiley />
            </div>
            <div className="send-icon">
              <TbCalendarTime />
            </div>
            <div className="send-icon">
              <SlLocationPin />
            </div>
          </div>
          <button disabled={input === ""} onClick={handleClick}>
            Tweetle
          </button>
        </div>
      </div>
      <div className="tweet">
        {tweet.map((tw, i) => (
          <Tweets tw={tw} tweet={tweet} setTweet={setTweet} />
        ))}
      </div>
    </>
  );
};

export default Main;
