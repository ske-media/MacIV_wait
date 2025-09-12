import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Regex robuste pour validation email
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('L\'adresse email est requise');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return false;
    }
    if (email.length > 254) {
      setEmailError('L\'adresse email est trop longue');
      return false;
    }
    
    // Validation contre les emails de test courants
    const testEmails = [
      'test@test.com', 'test@example.com', 'admin@admin.com', 'user@user.com',
      'email@email.com', 'demo@demo.com', 'sample@sample.com', 'fake@fake.com',
      'temp@temp.com', '123@123.com', 'abc@abc.com', 'test@test.fr',
      'admin@admin.fr', 'user@user.fr', 'demo@demo.fr'
    ];
    
    if (testEmails.includes(email.toLowerCase())) {
      setEmailError('Veuillez utiliser une adresse email réelle');
      return false;
    }
    
    // Validation contre les domaines temporaires courants
    const tempDomains = [
      '10minutemail.com', 'tempmail.org', 'guerrillamail.com', 'mailinator.com',
      'throwaway.email', 'temp-mail.org', 'getnada.com', 'maildrop.cc'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && tempDomains.some(tempDomain => domain.includes(tempDomain))) {
      setEmailError('Veuillez utiliser une adresse email permanente');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setEmailError('');

    // Validation côté client
    if (!validateEmail(email)) {
      setIsSubmitting(false);
      return;
    }

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
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold text-neon-green glow-green">
          REJOIGNEZ LE CERCLE DES INITIÉS
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto">
          Soyez parmi les premiers à découvrir cette expérience unique
        </p>
      </div>

      {!isSubmitted ? (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-green/10 rounded-2xl blur-xl"></div>
          <form 
            name="newsletter-signup" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="relative space-y-6 max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-neon-green/20 rounded-2xl p-8 shadow-neon-green"
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

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-green rounded-full shadow-neon-green"></div>
              <label htmlFor="email" className="text-sm font-semibold text-neon-green tracking-wide uppercase">
                Votre Adresse Email
              </label>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) {
                    validateEmail(e.target.value);
                  }
                }}
                onBlur={() => validateEmail(email)}
                placeholder="exemple@email.com"
                required
                disabled={isSubmitting}
                className={`relative w-full px-4 py-4 bg-black/60 border rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 font-normal disabled:opacity-50 text-base ${
                  emailError 
                    ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-neon-green/30 focus:border-neon-green focus:ring-neon-green/20'
                }`}
              />
              {emailError && (
                <div className="absolute -bottom-6 left-0 text-red-400 text-xs font-medium">
                  {emailError}
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center mt-6">
              {error}
            </div>
          )}

          <div className="relative group">
            <div className="absolute inset-0 bg-neon-green/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-neon-green to-neon-green-bright text-black font-bold py-4 px-8 rounded-xl hover:from-neon-green-bright hover:to-neon-green transition-all duration-300 transform hover:scale-[1.02] hover:shadow-neon-green shadow-lg text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-neon-green/30"
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>ENVOI EN COURS...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span>JE REJOINS LA LISTE D'ATTENTE</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute inset-0 bg-neon-green/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-black/40 backdrop-blur-sm border border-neon-green/20 rounded-2xl p-8 shadow-neon-green">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 text-neon-green glow-green">
                <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="font-bold text-xl">Inscription confirmée</p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-200 font-medium text-lg">
                  Bienvenue dans l'attente. L'aventure commence bientôt...
                </p>
                <p className="text-gray-400 text-sm">
                  Restez connectés pour découvrir l'inconnu
                </p>
              </div>
              <a 
                href="https://instagram.com/limitless.horyzon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-green to-neon-green-bright text-black font-bold py-3 px-6 rounded-xl hover:from-neon-green-bright hover:to-neon-green transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>SUIVEZ NOUS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
