import React from "react";
import { FaComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const TuitStats = ({ stats, handleLike }) => {
  return (
    <div className="wd-tuit-stats">
      <div className="wd-tuit-stat">
        <FaComment /> {stats.replies}
      </div>
      <div className="wd-tuit-stat">
        <FaRetweet /> {stats.retuits}
      </div>
      <div className="wd-tuit-stat" onClick={handleLike}>
        <FaHeart color={stats.liked ? "red" : "black"} /> {stats.likes}
      </div>
      <div className="wd-tuit-stat">
        <FaShareSquare /> {stats.shares}
      </div>
    </div>
  );
};

export default TuitStats;
