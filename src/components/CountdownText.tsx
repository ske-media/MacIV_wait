import React from 'react';

const CountdownText: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <p className="text-lg md:text-xl text-gray-100 font-medium">
        Le minuteur indique l'attente de l'ouverture de la billetterie
      </p>
    </div>
  );
};

export default CountdownText;
