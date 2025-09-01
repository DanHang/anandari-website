import React from 'react';
import './App.css';

function App() {
  const transformations = [
    {
      company: "Groupe Industriel Français",
      sector: "Manufacturing",
      challenge: "Optimisation de la chaîne logistique",
      solution: "IA prédictive pour la gestion des stocks et la planification de la production",
      impact: "+23% d'efficacité opérationnelle",
      roi: "ROI de 340% en 18 mois",
      savings: "€3.2M d'économies annuelles"
    },
    {
      company: "Banque Régionale",
      sector: "Financial Services", 
      challenge: "Détection de fraudes en temps réel",
      solution: "Algorithmes d'apprentissage automatique pour l'analyse comportementale",
      impact: "95% de précision dans la détection",
      roi: "ROI de 280% en 12 mois",
      savings: "€2.1M d'économies annuelles"
    },
    {
      company: "Retailer National",
      sector: "E-commerce",
      challenge: "Personnalisation de l'expérience client",
      solution: "Moteur de recommandations intelligent et analyse prédictive",
      impact: "+31% de conversion en ligne",
      roi: "ROI de 420% en 24 mois", 
      savings: "€5.8M de revenus supplémentaires"
    }
  ];

  const methodology = [
    {
      phase: "01",
      title: "Diagnostic Stratégique",
      description: "Analyse approfondie de votre écosystème business et identification des opportunités IA à fort impact ROI.",
      duration: "2-4 semaines",
      deliverables: "Audit complet, cartographie des opportunités, business case prioritaire"
    },
    {
      phase: "02", 
      title: "Vision & Roadmap",
      description: "Définition de votre stratégie IA alignée sur vos objectifs business et construction du plan de transformation.",
      duration: "3-6 semaines",
      deliverables: "Stratégie IA, roadmap détaillée, budget et planning"
    },
    {
      phase: "03",
      title: "Pilote & Validation",
      description: "Implémentation d'un projet pilote pour valider l'approche et démontrer la valeur business concrète.",
      duration: "8-12 semaines",
      deliverables: "Solution pilote, métriques de performance, ROI démontré"
    },
    {
      phase: "04",
      title: "Déploiement & Scale",
      description: "Généralisation des solutions IA à l'ensemble de l'organisation avec accompagnement au changement.",
      duration: "6-18 mois",
      deliverables: "Déploiement complet, formation équipes, gouvernance IA"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Anandari</span>
            <span className="logo-subtitle">Strategic AI Consulting</span>
          </div>
          <div className="nav-links">
            <a href="#vision" className="nav-link">Vision</a>
            <a href="#transformations" className="nav-link">Transformations</a>
            <a href="#methodologie" className="nav-link">Méthodologie</a>
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            <span>Candidat Ambassadeur IA 2025</span>
          </div>
          
          <h1 className="hero-title">
            Transformez votre entreprise avec 
            <span className="title-accent"> l'Intelligence Artificielle</span>
          </h1>
          
          <p className="hero-subtitle">
            Expert en stratégie IA, j'accompagne les dirigeants dans la transformation 
            de leur entreprise pour créer un avantage concurrentiel durable et mesurable.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">€12M+</div>
              <div className="stat-label">Valeur créée pour nos clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">340%</div>
              <div className="stat-label">ROI moyen de nos projets</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Entreprises transformées</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18 mois</div>
              <div className="stat-label">Délai moyen de retour sur investissement</div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Évaluer votre potentiel IA</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#transformations" className="btn-secondary">
              <span>Découvrir nos transformations</span>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section" id="vision">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Notre Vision de l'IA
              <span className="title-accent"> en Entreprise</span>
            </h2>
            <p className="section-subtitle">
              L'Intelligence Artificielle n'est pas une technologie, c'est un levier stratégique 
              de transformation qui redéfinit la compétitivité des entreprises du 21ème siècle.
            </p>
          </div>

          <div className="vision-content">
            <div className="vision-text">
              <div className="vision-quote">
                <blockquote>
                  "Dans un monde où la donnée est le nouveau pétrole, 
                  l'IA devient le moteur qui transforme cette ressource 
                  en avantage concurrentiel durable et mesurable."
                </blockquote>
                <cite>— Dan Hang, Fondateur Anandari</cite>
              </div>
              
              <div className="vision-principles">
                <div className="principle">
                  <h4>Vision Business-First</h4>
                  <p>Chaque initiative IA doit servir un objectif business clair avec un ROI mesurable et démontrable.</p>
                </div>
                <div className="principle">
                  <h4>Approche Pragmatique</h4>
                  <p>Privilégier les solutions éprouvées qui créent de la valeur immédiate plutôt que les expérimentations coûteuses.</p>
                </div>
                <div className="principle">
                  <h4>Transformation Humaine</h4>
                  <p>L'IA augmente les capacités humaines et libère le potentiel créatif, elle ne remplace pas l'intelligence humaine.</p>
                </div>
              </div>
            </div>

            <div className="vision-visual">
              <div className="impact-metrics">
                <div className="metric-card">
                  <div className="metric-icon">📈</div>
                  <div className="metric-value">+28%</div>
                  <div className="metric-label">Croissance moyenne du chiffre d'affaires</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">⚡</div>
                  <div className="metric-value">-45%</div>
                  <div className="metric-label">Réduction des coûts opérationnels</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🎯</div>
                  <div className="metric-value">85%</div>
                  <div className="metric-label">Amélioration satisfaction client</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🚀</div>
                  <div className="metric-value">2.3x</div>
                  <div className="metric-label">Accélération time-to-market</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="transformations-section" id="transformations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Transformations
              <span className="title-accent"> Réussies</span>
            </h2>
            <p className="section-subtitle">
              Découvrez comment nous avons aidé des entreprises leaders à créer un avantage 
              concurrentiel durable grâce à l'Intelligence Artificielle stratégique.
            </p>
          </div>

          <div className="transformations-grid">
            {transformations.map((transformation, index) => (
              <div key={index} className="transformation-card">
                <div className="card-header">
                  <div className="company-info">
                    <h3 className="company-name">{transformation.company}</h3>
                    <span className="company-sector">{transformation.sector}</span>
                  </div>
                  <div className="challenge-badge">Défi Business</div>
                </div>
                
                <div className="challenge-section">
                  <h4>Problématique</h4>
                  <p>{transformation.challenge}</p>
                </div>

                <div className="solution-section">
                  <h4>Solution IA Déployée</h4>
                  <p>{transformation.solution}</p>
                </div>
                
                <div className="results-section">
                  <div className="result-grid">
                    <div className="result-item impact">
                      <span className="result-label">Impact Opérationnel</span>
                      <span className="result-value">{transformation.impact}</span>
                    </div>
                    <div className="result-item roi">
                      <span className="result-label">Retour sur Investissement</span>
                      <span className="result-value">{transformation.roi}</span>
                    </div>
                    <div className="result-item savings">
                      <span className="result-label">Valeur Créée</span>
                      <span className="result-value">{transformation.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section" id="methodologie">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Notre Méthodologie
              <span className="title-accent"> Éprouvée</span>
            </h2>
            <p className="section-subtitle">
              Une approche structurée en 4 phases pour garantir le succès 
              de votre transformation IA et maximiser votre retour sur investissement.
            </p>
          </div>

          <div className="methodology-timeline">
            {methodology.map((phase, index) => (
              <div key={index} className="phase-item">
                <div className="phase-number">{phase.phase}</div>
                <div className="phase-content">
                  <div className="phase-header">
                    <h3 className="phase-title">{phase.title}</h3>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                  <p className="phase-description">{phase.description}</p>
                  <div className="phase-deliverables">
                    <strong>Livrables :</strong> {phase.deliverables}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section" id="expertise">
        <div className="container">
          <div className="expertise-content">
            <div className="expertise-text">
              <h2 className="section-title">
                Expertise
                <span className="title-accent"> Stratégique</span>
              </h2>
              <p className="section-subtitle">
                15 ans d'expérience en transformation digitale, 5 ans en leadership technique, 
                et une formation d'excellence en Data Science pour vous accompagner 
                dans votre stratégie IA avec une approche business-oriented.
              </p>

              <div className="credentials">
                <div className="credential-item">
                  <div className="credential-icon">🎓</div>
                  <div className="credential-content">
                    <h4>Formation d'Excellence</h4>
                    <p>Data Science - École DataScientest & Mines Paris</p>
                    <span className="credential-detail">Spécialisation IA & Machine Learning appliqués au business</span>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">🏆</div>
                  <div className="credential-content">
                    <h4>Candidat Ambassadeur IA 2025</h4>
                    <p>Programme gouvernemental français</p>
                    <span className="credential-detail">Sélectionné pour promouvoir l'adoption de l'IA en entreprise</span>
                  </div>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">💼</div>
                  <div className="credential-content">
                    <h4>Leadership Technique</h4>
                    <p>15 ans d'expérience en transformation digitale</p>
                    <span className="credential-detail">Chef de projet technique pendant 5 ans, expert .NET</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="expertise-domains">
              <div className="domain-card">
                <div className="domain-icon">🎯</div>
                <h4 className="domain-title">Stratégie IA</h4>
                <p className="domain-description">
                  Définition de votre vision IA et alignement avec les objectifs business 
                  pour maximiser le retour sur investissement.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">🔄</div>
                <h4 className="domain-title">Transformation Digitale</h4>
                <p className="domain-description">
                  Accompagnement complet vers l'entreprise augmentée par l'IA 
                  avec gestion du changement organisationnel.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">⚡</div>
                <h4 className="domain-title">Optimisation Opérationnelle</h4>
                <p className="domain-description">
                  Automatisation intelligente des processus métier critiques 
                  pour réduire les coûts et améliorer l'efficacité.
                </p>
              </div>
              <div className="domain-card">
                <div className="domain-icon">🚀</div>
                <h4 className="domain-title">Innovation Produit</h4>
                <p className="domain-description">
                  Intégration de l'IA dans vos produits et services 
                  pour créer de nouveaux revenus et différenciation marché.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="section-title">
                Démarrons votre
                <span className="title-accent"> Transformation IA</span>
              </h2>
              <p className="section-subtitle">
                Échangeons sur vos défis business et découvrons ensemble 
                comment l'IA peut transformer votre entreprise et créer un avantage concurrentiel durable.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email Professionnel</h4>
                    <p>contact@anandari.com</p>
                    <span className="contact-note">Réponse sous 24h</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h4>LinkedIn</h4>
                    <p>Connectons-nous professionnellement</p>
                    <span className="contact-note">Réseau de dirigeants et experts IA</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📅</div>
                  <div className="contact-details">
                    <h4>Consultation Stratégique</h4>
                    <p>Audit IA gratuit de 60 minutes</p>
                    <span className="contact-note">Sans engagement, analyse de votre potentiel IA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-header">
                <h3>Demande de Consultation</h3>
                <p>Partagez votre défi business et recevez une première analyse</p>
              </div>
              <form className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom & Prénom *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">Fonction *</label>
                    <input type="text" id="position" name="position" placeholder="ex: Directeur Général" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Entreprise *</label>
                    <input type="text" id="company" name="company" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sector">Secteur d'activité</label>
                    <input type="text" id="sector" name="sector" placeholder="ex: Manufacturing, Finance..." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email professionnel *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">Votre défi business principal</label>
                  <textarea 
                    id="challenge" 
                    name="challenge" 
                    rows="4" 
                    placeholder="Décrivez en quelques mots le défi que vous aimeriez résoudre avec l'IA..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  <span>Demander une consultation</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Anandari</span>
                <span className="logo-subtitle">Strategic AI Consulting</span>
              </div>
              <p className="footer-description">
                Transformez votre entreprise avec l'Intelligence Artificielle. 
                Expertise stratégique pour dirigeants visionnaires qui veulent créer 
                un avantage concurrentiel durable.
              </p>
              <div className="footer-badge">
                <span>🏆 Candidat Ambassadeur IA 2025</span>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#vision">Stratégie IA</a></li>
                  <li><a href="#transformations">Transformation Business</a></li>
                  <li><a href="#methodologie">Conseil Stratégique</a></li>
                  <li><a href="#expertise">Audit IA</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Entreprise</h4>
                <ul>
                  <li><a href="#expertise">À propos</a></li>
                  <li><a href="#transformations">Cas clients</a></li>
                  <li><a href="#methodologie">Méthodologie</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Ressources</h4>
                <ul>
                  <li><a href="#vision">Vision IA</a></li>
                  <li><a href="#transformations">ROI Calculator</a></li>
                  <li><a href="#contact">Consultation gratuite</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Anandari Strategic AI Consulting. Tous droits réservés.</p>
              <p>Candidat Ambassadeur IA 2025 - Programme gouvernemental français pour la démocratisation de l'IA en entreprise</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

