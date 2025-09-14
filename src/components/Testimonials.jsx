import { motion } from 'framer-motion';
import { Star, Rocket, Users, CheckCircle } from 'lucide-react';

function Testimonials() {
  const projetsEnCours = [
    {
      id: 1,
      status: "EN PRODUCTION",
      statusColor: "from-green-500 to-emerald-500",
      icon: Users,
      title: "Transformation IA plateforme RH",
      company: "Éditeur SaaS leader",
      sector: "Technologies RH",
      description: "Dan développe actuellement une solution IA révolutionnaire pour notre plateforme RH. Son architecture avec technologies de pointe (LangGraph, LightRAG, Knowledge Graphs) nous permet déjà d'anticiper 50% de gain de productivité pour nos équipes. L'intelligence artificielle transforme la gestion des processus RH en automatisant les tâches répétitives et en fournissant des insights stratégiques.",
      impact: [
        "50% de gain de temps pour les équipes RH",
        "Architecture IA enterprise-grade évolutive",
        "ROI projeté de +300% sur 12 mois",
        "15h/semaine économisées par manager RH"
      ],
      testimonial: "Son approche stratégique transforme complètement notre vision produit. Dan ne se contente pas d'implémenter de l'IA, il repense notre business model pour créer un avantage concurrentiel durable.",
      author: "Directeur Innovation",
      metrics: {
        primary: "50%",
        primaryLabel: "Gain Productivité",
        secondary: "+300%",
        secondaryLabel: "ROI Projeté"
      }
    },
    {
      id: 2,
      status: "EN DÉVELOPPEMENT",
      statusColor: "from-blue-500 to-indigo-500",
      icon: Rocket,
      title: "Solution IA disruptive secteur bâtiment",
      company: "Innovation artisanat",
      sector: "Construction & BTP",
      description: "Dan conçoit une solution IA disruptive pour révolutionner le secteur du bâtiment. Cette innovation, actuellement en phase de développement confidentiel, vise à éliminer la barrière linguistique pour les artisans étrangers en France. Le système utilise l'IA vocale de dernière génération pour transformer instantanément les interactions clients en documents professionnels.",
      impact: [
        "Marché potentiel de 12 milliards d'euros",
        "Solution unique sans concurrence directe",
        "Temps de création devis divisé par 10",
        "Accessibilité totale multi-langues"
      ],
      testimonial: "L'approche de Dan pour résoudre nos défis quotidiens est brillante. Cette solution va transformer notre industrie et permettre à des milliers d'artisans de développer leur activité sans barrière linguistique.",
      author: "Artisan Entrepreneur",
      metrics: {
        primary: "12K+",
        primaryLabel: "Artisans Cibles",
        secondary: "12Mds€",
        secondaryLabel: "Marché Adressable"
      }
    }
  ];

  return (
    <section id="projets" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-sm font-medium text-blue-900 tracking-wider uppercase mb-4">
            PROJETS IA EN COURS
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="font-extralight">Transformations</span>
            <br />
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">stratégiques actuelles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Découvrez les innovations IA que je développe actuellement pour révolutionner des industries entières
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projetsEnCours.map((projet, index) => {
            const IconComponent = projet.icon;
            return (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Status Badge - Repositionné pour éviter le chevauchement */}
                <div className="flex justify-end p-4 pb-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${projet.statusColor}`}>
                    {projet.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 pt-4">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-blue-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        {projet.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-600">{projet.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-900 font-medium">{projet.sector}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 font-light">
                    {projet.description}
                  </p>

                  {/* Impact Points */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                      Impact Mesurable
                    </h4>
                    <ul className="space-y-2">
                      {projet.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-3 border-amber-500 pl-4 mb-6">
                    <p className="text-gray-700 italic font-light text-sm leading-relaxed mb-2">
                      "{projet.testimonial}"
                    </p>
                    <cite className="text-xs text-gray-600 not-italic">
                      — {projet.author}
                    </cite>
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-blue-900 mb-1">
                        {projet.metrics.primary}
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">
                        {projet.metrics.primaryLabel}
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                      <div className="text-2xl font-light text-amber-600 mb-1">
                        {projet.metrics.secondary}
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">
                        {projet.metrics.secondaryLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-white rounded-2xl border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-900 mb-1">2</div>
              <div className="text-sm text-gray-600">Projets actifs</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-800 mb-1">IA</div>
              <div className="text-sm text-gray-600">Avant-garde</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-amber-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Engagement</div>
            </div>
          </div>
        </motion.div>

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
              Votre projet mérite une approche IA stratégique
            </h3>
            <p className="text-blue-100 mb-6 font-light">
              Seulement 3 audits gratuits disponibles ce mois • Résultats garantis
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
              Discuter de votre projet →
            </button>
          </div>
        </motion.div>

        {/* Confidentiality Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Par respect de la confidentialité et protection de l'innovation, certains détails techniques sont volontairement omis
          </p>
          <p className="text-sm text-gray-500 italic mt-2">
            Détails complets disponibles sous NDA
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;