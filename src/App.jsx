import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Target, 
  Users, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Search,
  Settings,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Award,
  Star,
  Cpu,
  Network,
  Layers,
  Code,
  BarChart3,
  Rocket
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const [counters, setCounters] = useState({ experience: 0, success: 0, management: 0 })
  const [isVisible, setIsVisible] = useState({})

  const dynamicWords = ["Intelligence Artificielle", "Data Science", "Machine Learning", "Innovation", "Transformation"]
  const baseText = "Transformez votre entreprise avec "

  // Animation de typing avec mots changeants
  useEffect(() => {
    const currentWord = dynamicWords[currentWordIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentWord.slice(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentWordIndex])

  // Suivi de la souris pour effets interactifs
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Génération de particules flottantes
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Animation des compteurs
  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 15, success: 100, management: 5 }
      const duration = 2000
      const steps = 60

      Object.keys(targets).forEach(key => {
        let current = 0
        const increment = targets[key] / steps
        const timer = setInterval(() => {
          current += increment
          if (current >= targets[key]) {
            current = targets[key]
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, duration / steps)
      })
    }

    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer pour animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative">
      {/* Particules flottantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`
            }}
          />
        ))}
      </div>

      {/* Curseur personnalisé */}
      <div 
        className="fixed w-6 h-6 border-2 border-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`
        }}
      />

      {/* Navigation premium avec effet glassmorphism */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <div className="relative">
                <Brain className="h-8 w-8 text-yellow-500 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                Anandari
              </span>
            </div>
            <div className="hidden md:flex space-x-1">
              {['Services', 'Expertise', 'Processus', 'À propos', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace('à propos', 'apropos')}`} 
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 font-medium relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold border-0 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:rotate-1">
              <Star className="mr-2 h-4 w-4 animate-spin" />
              Audit Gratuit
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section avec effets wow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec formes géométriques animées */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-100 to-yellow-200 transform rotate-45 opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300 mb-6 px-6 py-2 text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
              <Award className="mr-2 h-5 w-5 animate-pulse" />
              Expert IA & Transformation Digitale
            </Badge>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-gray-900">
            <span className="block mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {baseText}
            </span>
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent animate-gradient-x relative">
              {typedText}
              <span className="animate-pulse text-yellow-500 ml-1">|</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Anandari accompagne les entreprises françaises dans leur adoption stratégique de l'IA, 
            de l'audit à la mise en œuvre, pour une transformation réussie et durable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold border-0 shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:-rotate-1 px-8 py-4 text-lg group">
              <Rocket className="mr-2 h-6 w-6 group-hover:animate-bounce" />
              Commencer votre transformation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300 hover:scale-105 hover:rotate-1 px-8 py-4 text-lg font-medium group">
              <Globe className="mr-2 h-6 w-6 group-hover:animate-spin" />
              Découvrir nos services
            </Button>
          </div>

          {/* Statistiques animées */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: `${counters.experience}+`, label: "Années d'expérience", icon: BarChart3 },
              { number: `${counters.success}%`, label: "Projets réussis", icon: Target },
              { number: `${counters.management}+`, label: "Ans en management", icon: Users },
              { number: "Expert", label: "Data Science", icon: Brain }
            ].map((stat, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-1 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-yellow-50">
                  <stat.icon className="h-8 w-8 text-yellow-500 mx-auto mb-3 group-hover:animate-bounce" />
                  <div className="text-3xl font-bold mb-2 text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section avec cards interactives */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" data-animate>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${isVisible.services ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              Services d'<span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${isVisible.services ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              Une approche complète pour accompagner votre transformation IA, 
              de la stratégie à la mise en œuvre opérationnelle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Audit IA",
                description: "Évaluation complète du potentiel IA de votre entreprise et identification des opportunités prioritaires.",
                color: "from-yellow-400 to-yellow-600"
              },
              {
                icon: Target,
                title: "Stratégie d'adoption",
                description: "Élaboration d'une feuille de route personnalisée pour intégrer l'IA dans vos processus métiers.",
                color: "from-yellow-500 to-yellow-700"
              },
              {
                icon: Settings,
                title: "Pilotage de projets",
                description: "Accompagnement opérationnel de vos projets IA, de la conception à la mise en production.",
                color: "from-yellow-400 to-yellow-600"
              },
              {
                icon: GraduationCap,
                title: "Formation",
                description: "Montée en compétences de vos équipes sur les technologies et usages de l'IA.",
                color: "from-yellow-500 to-yellow-700"
              }
            ].map((service, index) => (
              <div key={index} className={`group transition-all duration-1000 ${isVisible.services ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-yellow-50 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/25">
                      <service.icon className="h-8 w-8 text-yellow-600 group-hover:animate-pulse" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 font-semibold group-hover:text-yellow-700 transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-center text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section avec animations avancées */}
      <section id="expertise" className="py-20 bg-white relative overflow-hidden" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.expertise ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Pourquoi choisir <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Anandari</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre expertise unique combine 15 ans d'expérience en développement et gestion de projets techniques 
                avec une formation de pointe en Data Science et IA.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: "Double expertise technique et business",
                    description: "Compréhension approfondie des enjeux métiers et maîtrise des technologies IA les plus avancées.",
                    delay: "0.2s"
                  },
                  {
                    icon: Users,
                    title: "Approche sur-mesure",
                    description: "Chaque entreprise est unique. Nos solutions sont adaptées à votre contexte, vos contraintes et vos objectifs.",
                    delay: "0.4s"
                  },
                  {
                    icon: TrendingUp,
                    title: "Vision stratégique long terme",
                    description: "Au-delà de la technologie, nous vous aidons à construire un avantage concurrentiel durable.",
                    delay: "0.6s"
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start group transition-all duration-1000 ${isVisible.expertise ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: item.delay }}>
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-300 rounded-full p-3 mr-4 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/25">
                      <item.icon className="h-6 w-6 text-yellow-600 group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 ${isVisible.expertise ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="text-center mb-8 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-yellow-500/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Brain className="h-10 w-10 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">Expert en IA & Transformation Digitale</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Diplômé DataScientest & Mines, 15 ans d'expérience en développement .NET et 5 ans en management de projets techniques.
                  </p>
                </div>
                
                <div className="space-y-3 relative z-10">
                  {[
                    "Expertise technique approfondie",
                    "Vision business stratégique", 
                    "Accompagnement personnalisé"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 group-hover:animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section avec timeline interactive */}
      <section id="processus" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" data-animate>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${isVisible.processus ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              Méthodologie <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Éprouvée</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${isVisible.processus ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              Un processus structuré en 4 étapes pour garantir le succès de votre transformation IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Diagnostic",
                description: "Analyse de votre écosystème actuel, identification des opportunités et évaluation de la maturité IA.",
                icon: Search,
                color: "from-yellow-400 to-yellow-600"
              },
              {
                number: "2", 
                title: "Stratégie",
                description: "Élaboration d'une feuille de route détaillée avec priorisation des cas d'usage et planning de déploiement.",
                icon: Target,
                color: "from-yellow-500 to-yellow-700"
              },
              {
                number: "3",
                title: "Implémentation", 
                description: "Pilotage des projets IA prioritaires avec accompagnement technique et méthodologique.",
                icon: Code,
                color: "from-yellow-400 to-yellow-600"
              },
              {
                number: "4",
                title: "Optimisation",
                description: "Mesure des résultats, optimisation continue et montée en compétences des équipes.",
                icon: TrendingUp,
                color: "from-yellow-500 to-yellow-700"
              }
            ].map((step, index) => (
              <div key={index} className={`text-center group transition-all duration-1000 ${isVisible.processus ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/50 relative z-10`}>
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full w-16 h-16 mx-auto opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500 blur-sm"></div>
                  <step.icon className="h-8 w-8 text-yellow-600 mx-auto mt-4 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section avec effets avancés */}
      <section id="apropos" className="py-20 bg-white relative overflow-hidden" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${isVisible.apropos ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              À propos d'<span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Anandari</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`relative transition-all duration-1000 ${isVisible.apropos ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 border border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100 to-yellow-200 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="mb-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <Brain className="h-12 w-12 text-yellow-600 mr-4 group-hover:animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">Expert IA & Transformation</h3>
                      <p className="text-yellow-700 font-medium group-hover:text-yellow-800 transition-colors duration-300">Candidat Ambassadeur IA 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    Diplômé DataScientest & Mines, 15 ans d'expérience en développement .NET et 5 ans en management de projets techniques.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-xl p-4 mb-6 border border-yellow-400 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-yellow-600 animate-pulse" />
                    Programme Ambassadeur IA
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Candidat officiel au programme gouvernemental "Ambassadeurs IA" pour accompagner 
                    la transformation numérique des entreprises françaises.
                  </p>
                </div>

                <div className="space-y-3 relative z-10">
                  {[
                    "Expertise technique approfondie",
                    "Vision business stratégique",
                    "Accompagnement personnalisé"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 group-hover:animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ${isVisible.apropos ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Anandari est né de la conviction que l'Intelligence Artificielle représente une opportunité 
                historique pour les entreprises françaises de renforcer leur compétitivité.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre mission est d'accompagner les dirigeants dans cette transformation en alliant expertise 
                technique de pointe et compréhension fine des enjeux business.
              </p>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 group">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center group-hover:text-yellow-700 transition-colors duration-300">
                  <Shield className="mr-2 h-6 w-6 text-yellow-500 group-hover:animate-pulse" />
                  Notre engagement
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Faire de l'IA un levier de croissance durable pour votre entreprise, en vous accompagnant 
                  à chaque étape de votre transformation digitale.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border-0 shadow-lg transition-all duration-300 hover:scale-105 hover:rotate-1 group">
                <ArrowRight className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                En savoir plus sur notre approche
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section avec formulaire interactif */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" data-animate>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-56 h-56 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 text-gray-900 transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              Commençons votre transformation <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">IA</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              Contactez-nous pour un premier échange et découvrez comment l'IA peut transformer votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Envoyez-nous un message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Nous vous recontacterons dans les 24h pour planifier un premier échange.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-yellow-600 transition-colors">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                          className="bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-yellow-600 transition-colors">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="votre@email.com"
                          className="bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-yellow-600 transition-colors">
                        Entreprise
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-yellow-600 transition-colors">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Décrivez votre projet ou vos besoins en IA..."
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold border-0 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:-rotate-1 group">
                      <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className={`space-y-8 transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "contact@anandari.fr", color: "text-yellow-500" },
                    { icon: Phone, label: "Téléphone", value: "+33 (0)1 XX XX XX XX", color: "text-yellow-600" },
                    { icon: MapPin, label: "Localisation", value: "France", color: "text-yellow-500" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                      <contact.icon className={`h-6 w-6 ${contact.color} mr-4 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300`} />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">{contact.label}</div>
                        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1 group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center group-hover:text-yellow-700 transition-colors duration-300">
                  <Sparkles className="mr-2 h-6 w-6 text-yellow-500 group-hover:animate-spin" />
                  Audit IA Gratuit
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Bénéficiez d'un premier diagnostic gratuit de 30 minutes pour identifier 
                  les opportunités IA de votre entreprise.
                </p>
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold border-0 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:rotate-1 group">
                  <Zap className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Réserver votre audit gratuit
                </Button>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 group">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Candidat Ambassadeur IA
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Anandari candidate au programme gouvernemental "Ambassadeurs IA" 
                  pour accompagner la transformation numérique des entreprises françaises.
                </p>
                <Badge className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 border border-gray-400 font-medium hover:from-gray-300 hover:to-gray-400 transition-all duration-300">
                  Programme gouvernemental 2025
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer premium avec animations */}
      <footer className="bg-white border-t border-gray-200 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-50 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <Brain className="h-8 w-8 text-yellow-500 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  Anandari
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Conseil en Intelligence Artificielle pour la transformation des entreprises françaises.
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 Anandari. Tous droits réservés.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">Services</h3>
              <ul className="space-y-2 text-gray-600">
                {['Audit IA', 'Stratégie d\'adoption', 'Pilotage de projets', 'Formation'].map((service, index) => (
                  <li key={service}>
                    <a href="#" className="hover:text-yellow-600 transition-all duration-300 hover:translate-x-1 inline-block" style={{ transitionDelay: `${index * 100}ms` }}>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-yellow-600 transition-colors duration-300">contact@anandari.fr</li>
                <li className="hover:text-yellow-600 transition-colors duration-300">+33 (0)1 XX XX XX XX</li>
                <li className="hover:text-yellow-600 transition-colors duration-300">France</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }

        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .group:hover .group-hover\\:animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default App

