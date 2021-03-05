import React from 'react';
import video from '../../images/hm-hero-mobile.mp4';

function Video() {
  return (
    <div>
      <video loop muted className="video" playsinline autoPlay track preload="auto" src={video} />
    </div>
  );
}

export default Video;
