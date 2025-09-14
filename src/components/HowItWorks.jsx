import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      stepNumber: "PHASE 1",
      title: "Diagnostic IA stratégique",
      description: "Audit ultra-précis de votre potentiel IA. Identification des gisements de croissance cachés et des quick wins à 6 chiffres.",
      icon: Search,
      color: "from-blue-900 to-blue-700"
    },
    {
      stepNumber: "PHASE 2", 
      title: "Architecture de croissance",
      description: "Roadmap IA exclusive pour surpasser la concurrence. Sélection des technologies d'avant-garde et KPIs garantissant le ROI.",
      icon: Lightbulb,
      color: "from-gray-800 to-gray-600"
    },
    {
      stepNumber: "PHASE 3",
      title: "Exécution & Scale",
      description: "Déploiement haute performance avec suivi exec hebdomadaire. Optimisation continue jusqu'au leadership de marché.",
      icon: Rocket,
      color: "from-amber-600 to-amber-500"
    }
  ];

  return (
    <section id="approche" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-sm font-medium text-blue-900 tracking-wider uppercase mb-4">
            MÉTHODOLOGIE
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="font-extralight">La méthode</span>
            <br />
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">CROISSANCE IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            3 phases prouvées pour transformer votre business en empire IA rentable et inattaquable
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:justify-between lg:items-stretch gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex-1 max-w-sm"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0 hidden lg:block"></div>
                  )}
                  
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2 block">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light flex-grow">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-2 block">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

