import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
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
  );
};

export default EmailForm;
