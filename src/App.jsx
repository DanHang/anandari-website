import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

