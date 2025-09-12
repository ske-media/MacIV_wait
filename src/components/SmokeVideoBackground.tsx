import React from 'react';

const SmokeVideoBackground: React.FC = () => {
  const videoSrc = '/videos/orange_smoke.mp4';

  return (
    <div className="smoke-video-container">
      <video src={videoSrc} className="smoke-video top-left" autoPlay loop muted playsInline />
      <video src={videoSrc} className="smoke-video bottom-right" autoPlay loop muted playsInline />
    </div>
  );
};

export default SmokeVideoBackground;