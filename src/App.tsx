import React, { useState, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-montserrat">
      {/* Fond avec texture subtile */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/10 via-black to-stone-900/5"></div>
      
      {/* Animation de fumée */}
      <div className="smoke-container">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
      </div>

      {/* Particules vertes */}
      <div className="particles-container">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Section 1: L'Appel */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neon-green glow-green leading-tight">
            LE VOILE SE LÈVERA
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Une nuit pour transcender. Une expérience pour se souvenir.
          </h2>
        </div>

        {/* Compte à rebours */}
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

        {/* Section 2: L'Invitation */}
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed font-normal">
            Certaines portes ne s'ouvrent qu'une fois. Derrière elles, le familier se dissout dans l'extraordinaire. 
            Oubliez ce que vous savez. Préparez-vous à voir.
          </p>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neon-green glow-green">
              REJOIGNEZ LE CERCLE DES INITIÉS
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre âme... ou votre email"
                    required
                    className="w-full px-6 py-4 bg-black/50 border border-amber-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 font-normal"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon-green text-black font-bold py-4 px-8 rounded-lg hover:bg-neon-green-bright transition-all duration-300 transform hover:scale-105 hover:shadow-neon-green shadow-lg text-sm md:text-base tracking-wide"
                >
                  JE RÉSERVE MA PLACE DANS L'OMBRE
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-6 bg-black/30 border border-neon-green/30 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-neon-green glow-green">
                  <Sparkles className="w-5 h-5" />
                  <p className="font-bold text-lg">Votre nom est inscrit.</p>
                </div>
                <p className="text-gray-100 mt-2 font-normal">
                  Surveillez les signes... et vos emails.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap');
        
        * {
          font-family: 'Montserrat', sans-serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Couleurs personnalisées */
        .text-neon-green {
          color: #39FF14;
        }
        
        .bg-neon-green {
          background-color: #39FF14;
        }
        
        .bg-neon-green-bright {
          background-color: #4AFF25;
        }
        
        .border-neon-green {
          border-color: #39FF14;
        }
        
        .shadow-neon-green {
          box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
        }

        /* Effet de lueur */
        .glow-green {
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.5),
                       0 0 20px rgba(57, 255, 20, 0.3),
                       0 0 30px rgba(57, 255, 20, 0.2);
        }

        /* Animation de fumée */
        .smoke-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .smoke {
          position: absolute;
          bottom: -100px;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          animation: smokeRise 15s linear infinite;
        }

        .smoke-1 {
          width: 200px;
          height: 200px;
          left: 10%;
          animation-delay: 0s;
        }

        .smoke-2 {
          width: 150px;
          height: 150px;
          left: 70%;
          animation-delay: -5s;
        }

        .smoke-3 {
          width: 180px;
          height: 180px;
          left: 40%;
          animation-delay: -10s;
        }

        @keyframes smokeRise {
          0% {
            transform: translateY(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
            transform: translateY(-50vh) scale(1.2) rotate(180deg);
          }
          100% {
            transform: translateY(-100vh) scale(1.5) rotate(360deg);
            opacity: 0;
          }
        }

        /* Particules vertes */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: #39FF14;
          border-radius: 50%;
          box-shadow: 0 0 6px #39FF14;
          animation: particleFloat 8s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Distribution aléatoire des particules */
        ${[...Array(25)].map((_, i) => `
          .particle-${i + 1} {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 8}s;
            animation-duration: ${8 + Math.random() * 4}s;
          }
        `).join('')}

        /* Séparateurs du compte à rebours */
        .countdown-separator {
          display: flex;
          align-items: center;
          font-size: 2rem;
          font-weight: 900;
          color: #39FF14;
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
        }

        @media (min-width: 768px) {
          .countdown-separator {
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .countdown-separator {
            font-size: 4rem;
          }
        }

        /* Scintillement aléatoire des particules */
        .particle:nth-child(3n) {
          animation: particleFloat 8s linear infinite, sparkle 2s ease-in-out infinite;
        }

        .particle:nth-child(5n) {
          animation: particleFloat 10s linear infinite, sparkle 3s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Responsive design pour le compte à rebours */
        .countdown-item {
          min-width: 60px;
        }

        @media (min-width: 768px) {
          .countdown-item {
            min-width: 80px;
          }
        }

        @media (min-width: 1024px) {
          .countdown-item {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;