import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Zap, Shield, Lightbulb } from 'lucide-react';

function Features() {
  const expertises = [
    {
      icon: Brain,
      title: "Audit IA Stratégique",
      description: "Diagnostic ultra-précis de votre potentiel IA. Identification des leviers de croissance cachés pour multiplier votre CA par 3-5x en 12 mois."
    },
    {
      icon: TrendingUp,
      title: "Automatisation Rentable",
      description: "Réduction de 60-80% des coûts opérationnels via l'IA. Génération de revenus passifs et libération de votre temps de direction."
    },
    {
      icon: Target,
      title: "ROI Garanti",
      description: "Engagement de performance : +380% de ROI moyen ou remboursé. KPIs business mesurés chaque semaine avec reporting exec."
    },
    {
      icon: Zap,
      title: "Domination Concurrentielle",
      description: "Positionnement de leader grâce aux IA de nouvelle génération. Vos concurrents mettront 2-3 ans à vous rattraper."
    },
    {
      icon: Shield,
      title: "Excellence Opérationnelle",
      description: "Frameworks de gouvernance enterprise-grade. Conformité RGPD/IA Act et processus certifiés pour scale international."
    },
    {
      icon: Lightbulb,
      title: "Transformation Leadership",
      description: "Formation de vos équipes dirigeantes à l'IA stratégique. Coaching exec pour devenir un CEO IA-native reconnu."
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-sm font-medium text-blue-900 tracking-wider uppercase mb-4 letterspacing-wide">
            EXPERTISE
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="font-extralight">6 Leviers pour</span>
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">Dominer votre Marché</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            La méthode prouvée pour transformer votre business en machine de croissance IA à haute rentabilité
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const IconComponent = expertise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-gray-100 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-blue-900" />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                  {expertise.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {expertise.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

