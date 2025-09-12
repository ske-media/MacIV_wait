import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('form-name', 'newsletter-signup');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neon-green glow-green">
        REJOIGNEZ LE CERCLE DES INITIÉS
      </h3>

      {!isSubmitted ? (
        <form 
          name="newsletter-signup" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-4 max-w-md mx-auto"
        >
          {/* Champ caché pour Netlify Forms */}
          <input type="hidden" name="form-name" value="newsletter-signup" />
          
          {/* Honeypot pour éviter les spams */}
          <div style={{ display: 'none' }}>
            <label>
              Ne remplissez pas ce champ si vous êtes humain: 
              <input name="bot-field" />
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre âme... ou votre email"
              required
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-black/50 border border-amber-500/30 rounded-lg text-gray-100 placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 font-normal disabled:opacity-50"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-neon-green text-black font-bold py-4 px-8 rounded-lg hover:bg-neon-green-bright transition-all duration-300 transform hover:scale-105 hover:shadow-neon-green shadow-lg text-sm md:text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'ENVOI EN COURS...' : 'JE RÉSERVE MA PLACE DANS L\'OMBRE'}
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
