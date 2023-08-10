import React, { useState } from "react";
import TuitStats from "./tuit-stats";
import { FaEllipsisH } from "react-icons/fa";
import blueCheck from "./blueCheck.png";
import "./index.css";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import teslaLogo from "./images/tesla-logo.png";
import { useSelector } from "react-redux";

const TuitItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    replies: 100,
    image: teslaLogo,
  },
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(tuit.likes);
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  const { currentUser } = useSelector((state) => state.user);

  console.log("tuit-item", tuit);
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };
  const imageUrl = tuit.image ? require(`./images/${tuit.image}`) : teslaLogo;
  // console.log(imageUrl);
  return (
    <div className="wd-tuit">
      <div className="wd-tuit-icon-header-three-dots-container">
        <div className="wd-tuit-icon-header-container">
          <div className="wd-tuit-icon">
            <img src={imageUrl} className="wd-tuit-icon-img" alt="logo" />
          </div>
          <div className="wd-tuit-header">
            <div>
              <span className="wd-tuit-author">
                {tuit.username || currentUser.firstName}{" "}
              </span>
              <span className="wd-blue-check">
                <img
                  src={blueCheck}
                  className="wd-blue-check"
                  alt="blue check"
                />
              </span>

              <span className="wd-tuit-handle">
                {" "}
                {tuit.handle || currentUser.username}
              </span>

              <span className="wd-tuit-date"> - {tuit.time || "1h"}</span>
            </div>
            <div>
              <span className="wd-tuit-header-description">{tuit.tuit}</span>
            </div>
            {tuit && <TuitStats tuit={tuit} />}
          </div>
        </div>
        <div className="">
          <button
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TuitItem;
