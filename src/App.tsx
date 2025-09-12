import SmokeVideoBackground from './components/SmokeVideoBackground';
import Particles from './components/Particles';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import IntroText from './components/IntroText';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-montserrat">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/10 via-black to-stone-900/5"></div>
      <SmokeVideoBackground />
      <Particles />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 space-y-12">
        <HeroSection />
        <InvitationSection />
        <IntroText />
        <Countdown />
      </div>
    </div>
  );
}

export default App;