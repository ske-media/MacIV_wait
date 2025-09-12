import React from 'react';

const IntroText: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/5 to-transparent rounded-2xl blur-sm"></div>
        <div className="relative bg-black/20 backdrop-blur-sm border border-neon-green/10 rounded-2xl p-8">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium">
            Certaines portes ne s'ouvrent qu'une fois. Derrière elles, le familier se dissout dans l'extraordinaire. 
            Oubliez ce que vous savez. Préparez-vous à voir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
