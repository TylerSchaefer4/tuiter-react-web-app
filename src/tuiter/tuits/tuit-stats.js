import React from "react";
import {
  FaComment,
  FaRetweet,
  FaHeart,
  FaShareSquare,
  FaThumbsDown,
} from "react-icons/fa";
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

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {retuits}
      </div>
      <div className="wd-tuit-stat">
        <FaHeart
          className="text-danger"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, likes: likes + 1 }))
          }
        />
        <span className="ms-2">{likes}</span>
      </div>
      <div className="wd-tuit-stat">
        <FaThumbsDown
          className="text-danger"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, dislikes: dislikes + 1 }))
          }
        />
        <span className="ms-2">{dislikes}</span>
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {shares}
      </div>
    </div>
  );
};

export default TuitStats;
