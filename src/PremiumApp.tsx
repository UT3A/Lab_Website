import { PremiumNavigation } from './components/PremiumNavigation';
import { PremiumCarousel } from './components/PremiumCarousel';
import { PremiumHeroSection } from './components/PremiumHeroSection';
import { PremiumStatsSection } from './components/PremiumStatsSection';
import { PremiumResearchSection } from './components/PremiumResearchSection';
import { PremiumTeamSection } from './components/PremiumTeamSection';
import { PremiumTimelineSection } from './components/PremiumTimelineSection';
import { PremiumCTASection } from './components/PremiumCTASection';
import { PremiumFooter } from './components/PremiumFooter';
import { PremiumParticleBackground } from './components/PremiumParticleBackground';

export default function PremiumApp() {
  return (
    <div className="min-h-screen bg-black text-white antialiased relative overflow-hidden">
      {/* Enhanced Background with Particles */}
      <PremiumParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <PremiumNavigation />
        
        {/* Featured Carousel - Full Screen */}
        <PremiumCarousel />
        
        {/* Original Hero Section */}
        <PremiumHeroSection />
        
        <PremiumStatsSection />
        <PremiumResearchSection />
        <PremiumTeamSection />
        <PremiumTimelineSection />
        <PremiumCTASection />
        <PremiumFooter />
      </div>
    </div>
  );
}
