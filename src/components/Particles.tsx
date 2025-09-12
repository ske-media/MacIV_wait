import React from 'react';

const Particles: React.FC = () => {
  return (
    <div className="particles-container">
      {[...Array(25)].map((_, i) => (
        <div key={i} className={`particle particle-${i + 1}`}></div>
      ))}
    </div>
  );
};

export default Particles;
