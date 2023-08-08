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
  console.log("Tuit: ", tuit);

  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {tuit.replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {tuit.retuits}
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
        <FaShareSquare /> {tuit.shares}
      </div>
    </div>
  );
};

export default TuitStats;
