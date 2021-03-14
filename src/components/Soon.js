import React from 'react';
import video from '../images/hm-hero-mobile.mp4';

function Soon() {
  return (
    <div className="bg-white flex flex-row justify-between soon">
      <div>
        <video
          loop
          muted
          className="w-full h-full border-r-none"
          playsInline
          autoPlay
          track="true"
          preload="auto"
          src={video}
        />
      </div>
      <div className="text-center w-1/2 mt-20 pt-28 comingSoon">
        <p className="text-5xl mt-28">
          Coming soon...
        </p>
      </div>
    </div>
  );
}

export default Soon;
