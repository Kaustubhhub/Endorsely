"use client"
import React, { useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div onClick={handleVideoPlay} className="cursor-pointer">
        <video
          ref={videoRef}
          width="1000"
          height="400"
          controls={false}
        >
          <source
            src="https://stream.mux.com/Woifb2gxZArCOh2z1aPMW901UdR9pSeF5Dhx6kaEVZYc/high.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
