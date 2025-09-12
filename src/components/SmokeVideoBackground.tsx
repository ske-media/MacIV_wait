import React, { useState, useRef, useEffect } from 'react';

const SmokeVideoBackground: React.FC = () => {
  const videoSrc = '/videos/orange_smoke.mp4';
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="video-background-container">
      <div className="video-overlay"></div>
      <video
        ref={videoRef}
        src={videoSrc}
        className={`fullscreen-video ${isLoaded ? 'video-loaded' : 'video-loading'}`}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default SmokeVideoBackground;