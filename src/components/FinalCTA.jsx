import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

function FinalCTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              <span className="font-extralight">Transformons Ensemble</span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">Votre Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Échangeons sur vos défis stratégiques et explorons comment l'IA peut accélérer votre croissance
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Échange Stratégique
              </h3>
              <p className="text-gray-600 font-light mb-6">
                Discutons de vos objectifs et explorons les opportunités d'IA pour votre organisation.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 inline-flex items-center gap-2">
                <span>Envoyer un message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Calendar Booking */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-amber-50 to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Consultation Personnalisée
              </h3>
              <p className="text-gray-600 font-light mb-6">
                Réservez un créneau pour une analyse approfondie de vos besoins stratégiques.
              </p>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 inline-flex items-center gap-2">
                <span>Réserver un créneau</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white"
          >
            <h3 className="text-2xl font-light mb-4">
              Prêt à faire la différence ?
            </h3>
            <p className="text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Rejoignez les dirigeants visionnaires qui transforment leur secteur grâce à une approche stratégique de l'IA. 
              Votre avantage concurrentiel commence aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
                Découvrir mon approche
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
                Télécharger le guide IA
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;

