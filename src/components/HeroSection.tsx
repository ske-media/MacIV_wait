import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16 space-y-6">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neon-green glow-green leading-tight">
        LE VOILE SE LÈVERA
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-gray-100 max-w-2xl mx-auto leading-relaxed">
        Une nuit pour transcender. Une expérience pour se souvenir.
      </h2>
    </div>
  );
};

export default HeroSection;
