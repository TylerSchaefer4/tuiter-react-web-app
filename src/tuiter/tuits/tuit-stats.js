import React from "react";
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShareSquare,
  FaThumbsDown,
} from "react-icons/fa";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ stats, handleLike }) => {
  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {stats.replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {stats.retuits}
      </div>
      <div className="wd-tuit-stat">
        <FaHeart
          className="text-danger"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
          }
        />
        <span className="ms-2">{tuit.likes}</span>
      </div>
      <div className="wd-tuit-stat">
        <FaThumbsDown
          className="text-danger"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
          }
        />
        <span className="ms-2">{tuit.dislikes}</span>
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {stats.shares}
      </div>
    </div>
  );
};

export default TuitStats;
