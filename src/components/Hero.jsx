import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { RainbowButton } from './magicui/rainbow-button';

function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  // Transform for 3D rotation effect - starts inclined and becomes upright
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={container} className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient - luxe discret */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
      
      <div className="relative container mx-auto text-center">
        {/* Main content */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-900">
            <span className="font-extralight">L'architecte IA qui transforme</span>
            <br />
            <span className="bg-gradient-to-r from-blue-900 via-gray-800 to-amber-600 bg-clip-text text-transparent font-medium">
              votre business strategy
            </span>
            <br />
            <span className="font-extralight">en croissance mesurable</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            J'aide les dirigeants ambitieux à transformer leur business grâce à l'IA stratégique.
            <br />
            <span className="text-blue-900 font-medium">Ma spécialité :</span> Systèmes multi-agents autonomes, IA conversationnelle avancée et automatisation intelligente à l'échelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-900 to-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Discuter de votre projet IA
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('projets');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Voir mes projets en cours
            </button>
          </div>
        </Motion.div>
        
        {/* Visual element - elegant and minimal */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            rotateX: rotateX,
            scale: scale,
            transformPerspective: 1000,
            transformStyle: 'preserve-3d'
          }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl border border-gray-200 p-12">
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-900 mb-2">2025</div>
                <div className="text-gray-600 font-light">Expertise IA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-800 mb-2">2</div>
                <div className="text-gray-600 font-light">Projets en cours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">100%</div>
                <div className="text-gray-600 font-light">Sur mesure</div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;

