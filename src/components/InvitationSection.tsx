import React from 'react';
import EmailForm from './EmailForm';

const InvitationSection: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-8">
      <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed font-normal">
        Certaines portes ne s'ouvrent qu'une fois. Derrière elles, le familier se dissout dans l'extraordinaire. 
        Oubliez ce que vous savez. Préparez-vous à voir.
      </p>

      <EmailForm />
    </div>
  );
};

export default InvitationSection;
