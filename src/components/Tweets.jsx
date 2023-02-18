import React, { useState } from "react";
import { FaRetweet } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { IoIosMore } from "react-icons/io";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { TbMessageCircle2 } from "react-icons/tb";
import { CgSmileSad } from "react-icons/cg";
import { MdPlaylistAdd, MdOutlineBlock, MdIosShare } from "react-icons/md";
import { FiUserPlus, FiBellOff } from "react-icons/fi";
import { RiFlag2Line, RiDeleteBinLine } from "react-icons/ri";
import { ImEmbed2 } from "react-icons/im";
import "../style/Tweets.css";

const Tweets = ({ tw, i, setTweet, tweet }) => {
  const iconMoreArray = [
    {
      name: "Bu Tweet yardımcı olmadı",
      icon: CgSmileSad,
      isDeleteActive: false,
    },
    {
      name: "@mutlutokk adlı kişiyi takip et",
      icon: FiUserPlus,
      isDeleteActive: false,
    },
    {
      name: "@mutlutokk kullanıcısını listelere ekle / listelerden kaldır ",
      icon: MdPlaylistAdd,
      isDeleteActive: false,
    },
    {
      name: "@mutlutokk adlı kişiyi sessize al",
      icon: FiBellOff,
      isDeleteActive: false,
    },
    {
      name: "@mutlutokk adlı kişiyi engelle",
      icon: MdOutlineBlock,
      isDeleteActive: false,
    },
    {
      name: "Tweeti katıştır",
      icon: ImEmbed2,
      isDeleteActive: false,
    },
    {
      name: "Tweeti bildir",
      icon: RiFlag2Line,
      isDeleteActive: false,
    },
    {
      name: "Tweeti sil",
      icon: RiDeleteBinLine,
      isDeleteActive: true,
    },
  ];

  const [toggle, setToggle] = useState(false);

  const handleUserMoreClick = () => {
    setToggle(true);
  };

  const handleClickMoreFalse = () => {
    setToggle(false);
  };

  const handleDelete = () => {
    const deleteTweet = tweet.filter((item) => item !== tw);
    setTweet(deleteTweet);
    setToggle(false);
  };

  const handleMoreOnClick = (isDeleteActive) => {
    if (isDeleteActive) {
      handleDelete();
    }
    handleClickMoreFalse();
  };

  return (
    <div className="tweet-in">
      <div className="photo">
        <img
          src="https://pbs.twimg.com/profile_images/1617923724770000896/9JCajFZF_400x400.jpg"
          alt=""
        />
      </div>
      <div className="tweet-right">
        <div className="tweet-user">
          <div>
            <a href="">Mutlu TOK</a>
            <span> @mutlutokk.3d</span>
          </div>
          <div
            className="tweet-user-icon"
            onClick={() => handleUserMoreClick()}
          >
            <IoIosMore />
          </div>
          {toggle && (
            <div className="icon-more">
              {iconMoreArray.map(({ icon: Icon, name, isDeleteActive }) => {
                return (
                  <div
                    className="more"
                    onClick={(e) => handleMoreOnClick(isDeleteActive, e)}
                  >
                    <Icon className="more-icon" />
                    <div>{name}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="tweet-text" key={i}>
          {tw}
        </div>
        <div className="tweet-icons">
          <div className="ms">
            <TbMessageCircle2 />
          </div>
          <div className="rt">
            <FaRetweet />
          </div>
          <div className="he">
            <HiOutlineHeart />
          </div>
          <div className="ms">
            <RiBarChartGroupedFill />
          </div>
          <div className="ms">
            <MdIosShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
