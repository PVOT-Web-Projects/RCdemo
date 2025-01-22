import React from "react";
import "./videoOne.scss";
const VideoOne = () => {
  return (
    <div className="VideoOneContainer">
      <video
        src="./video/final_frame_video.mp4"
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
        className="videoOneVid"
      />
    </div>
  );
};

export default VideoOne;
