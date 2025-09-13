import { useState } from 'react';
import { motion } from 'framer-motion';


function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "AUDIT IA STRATÉGIQUE",
      description: "Diagnostic ultra-précis de votre potentiel IA",
      price: "€15,000",
      period: "Engagement unique",
      features: [
        "Audit complet 360° de votre business",
        "Identification des leviers de croissance IA", 
        "Roadmap stratégique personnalisée",
        "ROI prévisionnelle détaillée",
        "Garantie satisfaction 100%"
      ],
      cta: "Réserver mon Audit",
      highlighted: false,
      buttonColor: "bg-gradient-to-r from-blue-900 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white shadow-xl"
    },
    {
      name: "TRANSFORMATION IA", 
      description: "Accompagnement complet vers la domination",
      price: "€75,000",
      period: "6 mois / Projet",
      features: [
        "Tout de l'Audit Stratégique",
        "Implémentation IA haute performance",
        "Formation équipe dirigeante", 
        "Suivi ROI hebdomadaire",
        "Garantie +300% ROI ou remboursé"
      ],
      cta: "Lancer ma Transformation",
      highlighted: true,
      buttonColor: "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-xl"
    },
    {
      name: "PARTNERSHIP STRATÉGIQUE",
      description: "Votre CTO IA externalisé",
      price: "€25,000",
      period: "par mois",
      features: [
        "Accès direct 24/7",
        "Stratégie IA continue",
        "Veille technologique exclusive",
        "Coaching leadership IA",
        "Réseau d'experts premium"
      ],
      cta: "Devenir Partenaire",
      highlighted: false,
      buttonColor: "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white shadow-xl"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-4">
            INVESTISSEMENT
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            <span className="font-extralight">Tarifs</span>
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium"> Premium</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Investissement haute rentabilité pour dirigeants ambitieux
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-[var(--bg-gray-700)] rounded-full transition-colors duration-200 focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-[var(--text-primary)] rounded-full transition-transform duration-200 ${
                  isYearly ? 'transform translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              Yearly
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-amber-50 to-amber-25 border-2 border-amber-500' 
                  : 'bg-gray-800/80 border border-gray-700'
              }`}
            >
              
              <div className="text-center flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6 min-h-[3rem] flex items-center justify-center">
                  {plan.description}
                </p>
                
                <div className="mb-8 min-h-[5rem] flex flex-col justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-300 text-lg">
                    {plan.period}
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-8 rounded-full font-semibold transition-all duration-300 text-lg mb-8 ${plan.buttonColor} text-black`}
                >
                  {plan.cta}
                </motion.button>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-white font-semibold mb-6 text-lg">Inclus</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-4">
                      <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <span className="text-white leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

