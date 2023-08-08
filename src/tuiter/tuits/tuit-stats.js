import React from "react";
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShareSquare,
  FaThumbsDown,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiFillDislike } from "react-icons/ai";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  // Default values
  const replies = tuit.replies || 0;
  const retuits = tuit.retuits || 0;
  const likes = tuit.likes || 0;
  const dislikes = tuit.dislikes || 0;
  const shares = tuit.shares || 0;
  let likeIcon = null;
  if (tuit.liked) {
    likeIcon = <AiFillHeart color={"red"} />;
  } else {
    likeIcon = <AiOutlineHeart />;
  }

  let dislikeIcon = null;
  if (tuit.disliked === undefined) {
    dislikeIcon = <AiFillDislike />;
  } else if (tuit.disliked) {
    dislikeIcon = <AiFillDislike fill="#0D6EFD" />;
  } else {
    dislikeIcon = <AiFillDislike />;
  }

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {retuits}
      </div>
      <div className="wd-tuit-stat">
        <div
          className=""
          onClick={() =>
            dispatch(
              updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })
            )
          }
        >
          {likeIcon} <span className="ms-2">{likes}</span>
        </div>
      </div>
      <div className="wd-tuit-stat">
        <div
          className=""
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes ? tuit.dislikes + 1 : 1,
                disliked: true,
              })
            )
          }
        >
          {dislikeIcon} <span className="ms-2">{dislikes}</span>
        </div>
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {shares}
      </div>
    </div>
  );
};

export default TuitStats;
