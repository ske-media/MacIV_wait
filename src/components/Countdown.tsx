import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Compte à rebours vers le 1er novembre 2024 à 20:00 (Paris)
  useEffect(() => {
    const targetDate = new Date('2024-11-01T20:00:00+01:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-16">
      <div className="flex space-x-4 md:space-x-8 text-center">
        <div className="countdown-item">
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-neon-green glow-green">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-300 mt-2 font-normal">JOURS</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-neon-green glow-green">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-300 mt-2 font-normal">HEURES</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-neon-green glow-green">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-300 mt-2 font-normal">MINUTES</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="text-3xl md:text-5xl lg:text-6xl font-black text-neon-green glow-green">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-300 mt-2 font-normal">SECONDES</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
