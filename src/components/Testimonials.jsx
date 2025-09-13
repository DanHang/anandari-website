import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Testimonials() {
  const casClients = [
    {
      name: "Marie Dubois",
      title: "CEO",
      company: "TechnoLux Industries",
      quote: "Anandari a transformé notre approche de l'IA. En 8 mois, nous avons automatisé 60% de nos processus et augmenté notre marge opérationnelle de 35%. Une vision stratégique remarquable.",
      roi: "+35%",
      metric: "Marge opérationnelle",
      avatar: "MD",
      sector: "Manufacturing"
    },
    {
      name: "Pierre Martineau", 
      title: "Directeur Général",
      company: "FinanceFirst",
      quote: "L'expertise d'Anandari nous a permis de déployer une IA prédictive qui a réduit nos risques de crédit de 40% tout en accélérant nos décisions d'investissement.",
      roi: "+280%",
      metric: "ROI sur 18 mois",
      avatar: "PM",
      sector: "Finance"
    },
    {
      name: "Sophie Laurent",
      title: "Présidente",
      company: "RetailEvolution",
      quote: "Grâce à la stratégie IA d'Anandari, nous avons personnalisé l'expérience client et augmenté nos ventes de 45% en moins d'un an. Un partenaire stratégique exceptionnel.",
      roi: "+45%",
      metric: "Croissance des ventes",
      avatar: "SL",
      sector: "Retail"
    },
    {
      name: "Thomas Rousseau",
      title: "Directeur Innovation",
      company: "HealthTech Solutions",
      quote: "L'approche d'Anandari a révolutionné notre R&D. Nous développons maintenant nos produits 3x plus rapidement avec une précision diagnostique améliorée de 25%.",
      roi: "3x",
      metric: "Vitesse de développement",
      avatar: "TR",
      sector: "Healthcare"
    }
  ];

  return (
    <section id="cas-clients" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-sm font-medium text-blue-900 tracking-wider uppercase mb-4">
            CAS CLIENTS
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="font-extralight">Résultats</span>
            <br />
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">Exceptionnels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ces dirigeants ont multiplié leur CA et écrasé la concurrence grâce à l'IA stratégique
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {casClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{client.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{client.name}</h4>
                    <p className="text-sm text-gray-600">{client.title}</p>
                    <p className="text-sm font-medium text-blue-900">{client.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-amber-600 mb-1">{client.roi}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{client.metric}</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed font-light mb-6 italic">
                "{client.quote}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">
                  {client.sector}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900 to-gray-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-4">
              Prêt à rejoindre l'élite des CEO IA-natives ?
            </h3>
            <p className="text-blue-100 mb-6 font-light">
              Audit gratuit pour les 3 prochains dirigeants ambitieux
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
              Réclamer mon Audit Gratuit →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;

