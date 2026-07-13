import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Sun, Droplet, Snowflake, AlertTriangle, Calendar, Shield, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Piscine() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prestations = [
    {
      title: 'ESTIVAGE (MISE EN SERVICE)',
      icon: Sun,
      details: [
        'Ouverture de la bâche d\'hivernage ou bâche à bar',
        'Enlèvement des bouchons, Guizmo et flotteurs',
        'Remise en place du manomètre',
        'Remise en eau du système de filtration et de la pompe à chaleur',
        'Nettoyage complet du bassin',
        'Remise à niveau et équilibrage de la chimie de l\'eau'
      ],
      color: 'bg-[#0066cc]'
    },
    {
      title: 'ENTRETIEN COURANT (MAI À SEPTEMBRE)',
      icon: Droplet,
      details: [
        '1 passage par semaine comprenant :',
        'Brossage de la ligne d\'eau',
        'Brossage fond, parois, escalier et plage',
        'Passage de l\'épuisette de surface',
        'Passage de l\'aspirateur fond, parois, escalier et plage',
        'Nettoyage des skimmers et pièces à éceller',
        'Changement de chaussette du skimmer si nécessaire',
        'Backwash à chaque passage pour favoriser un bon entretien du filtre',
        'Vérification du bon fonctionnement du système de filtration',
        'Test à languette 1 fois par semaine',
        'Correction chimique 1 fois par mois',
        'Absorbant Water Lily offert à chaque passage',
        'Échange aux bassins',
        'Conseils personnalisés'
      ],
      color: 'bg-[#0066cc]'
    },
    {
      title: 'HIVERNAGE',
      icon: Snowflake,
      details: [
        'Vidange de la piscine jusqu\'en dessous des refoulements',
        'Vidange des canalisations par soufflage ou aspiration',
        'Mise en hivernage du système de filtration, pompe, filtre, sonde et pompe à chaleur',
        'Mise en place des bouchons et du Guizmo',
        'Mise en place des flotteurs',
        'Mise en place de la bâche d\'hivernage ou bâche à bar',
        'Mise hors-gel du manomètre'
      ],
      color: 'bg-[#0066cc]'
    }
  ];

  const importantInfos = [
    { icon: AlertTriangle, title: 'Produits inclus', description: 'Les produits de traitement sont inclus dans le pack : utilisés selon les besoins de votre bassin.' },
    { icon: Calendar, title: 'Interventions planifiées', description: 'Les interventions sont planifiées à l\'avance, jour fixe selon la tournée.' },
    { icon: Shield, title: 'Forfait établi', description: 'Le forfait est établi pour une piscine maintenue dans un état d\'entretien normal. Intervention exceptionnelle (eau verte, tempête, travaux...) faisant l\'objet d\'un devis complémentaire.' }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 flex-shrink-0 mr-8">
              <img src="/manus-storage/LOGO_e8a3e33e.PNG" alt="KAB'ALSA Logo" className="h-14" />
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <Link href="/piscine">
              <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors font-semibold">Piscine</a>
            </Link>
            <Link href="/jardin">
              <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors">Jardin</a>
            </Link>
            <Link href="/nos-packs">
              <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors">Nos Packs</a>
            </Link>
            <Link href="/a-propos">
              <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors">À propos</a>
            </Link>
            <Link href="/cgvi">
              <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors">Conditions générales</a>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-[#1a4d7a]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hidden md:block bg-[#1a4d7a] hover:bg-[#0d2d4a] text-white px-6 py-2 rounded-lg font-semibold ml-auto flex-shrink-0">
            Demander un devis
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container flex flex-col gap-4">
              <Link href="/piscine">
                <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors block py-2 font-semibold" onClick={() => setMobileMenuOpen(false)}>Piscine</a>
              </Link>
              <Link href="/jardin">
                <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Jardin</a>
              </Link>
              <Link href="/nos-packs">
                <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Nos Packs</a>
              </Link>
              <Link href="/a-propos">
                <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>À propos</a>
              </Link>
              <Link href="/cgvi">
                <a className="text-[#1a4d7a] hover:text-[#0d2d4a] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Conditions générales</a>
              </Link>
              <button 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="bg-[#1a4d7a] hover:bg-[#0d2d4a] text-white px-6 py-2 rounded-lg font-semibold w-full mt-2"
              >
                Demander un devis
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section - Reprenant le design de l'affiche */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/manus-storage/pasted_file_xaN0dK_image_34d17f12.png')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/90"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo et texte */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1a4d7a] text-sm font-semibold mb-2">PACK</p>
              <h1 className="text-6xl md:text-7xl font-bold text-[#1a4d7a] mb-6">BAHÏA</h1>
              
              <div className="bg-[#1a4d7a] text-white px-6 py-2 rounded-full inline-block mb-6 font-semibold">
                ENTRETIEN PISCINE
              </div>
              
              <p className="text-lg text-[#1a4d7a] italic font-semibold mb-4">
                Une eau claire, un esprit léger
              </p>
              
              <p className="text-[#67766d] leading-relaxed mb-6">
                Le Pack BAHÏA vous garantit une piscine propre, saine et parfaitement entretenue tout au long de la saison et en toute sérénité.
              </p>

              <div className="flex items-center gap-3 bg-[#f0f4f8] p-4 rounded-lg">
                <Droplet className="w-6 h-6 text-[#1a4d7a]" />
                <div>
                  <p className="font-semibold text-[#1a4d7a]">Eau claire toute l'année</p>
                  <p className="text-sm text-[#67766d]">Estivage, entretien courant, hivernage</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img 
                src="/manus-storage/pasted_file_xaN0dK_image_34d17f12.png"
                alt="Piscine BAHÏA Avant/Après"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#1a4d7a] my-8"></div>

      {/* Les 3 prestations principales */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d7a] mb-4 text-center">Les prestations incluses</h2>
          <p className="text-center text-[#67766d] mb-16 max-w-2xl mx-auto font-semibold">Estivage, entretien courant et hivernage</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {prestations.map((prestation, idx) => {
              const Icon = prestation.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Header coloré */}
                  <div className={`${prestation.color} text-white p-6 flex items-center gap-4`}>
                    <Icon className="w-8 h-8" />
                    <h3 className="text-lg font-bold">{prestation.title}</h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-2">
                      {prestation.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#67766d]">
                          <CheckCircle className="w-4 h-4 text-[#1a4d7a] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#1a4d7a] my-8"></div>

      {/* Informations importantes */}
      <section className="py-20 md:py-32 bg-[#f0f4f8]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d7a] mb-16 text-center">Informations importantes</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {importantInfos.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center bg-white p-6 rounded-lg border-2 border-[#1a4d7a]"
                >
                  <Icon className="w-8 h-8 text-[#1a4d7a] mb-4" />
                  <h3 className="font-bold text-[#1a4d7a] mb-2">{info.title}</h3>
                  <p className="text-xs text-[#67766d]">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#1a4d7a] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Prêt à profiter de votre piscine ?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Confiez-nous l'entretien de votre piscine et profitez d'une eau claire et saine toute l'année.
          </p>
          <Link href="/">
            <a>
              <button className="bg-white hover:bg-gray-100 text-[#1a4d7a] px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                Demander mon devis →
              </button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d7a] text-white py-12 border-t-4 border-[#c4a574]">
        <div className="container text-center">
          <p className="mb-4 font-semibold">KAB'ALSA Services Fruhauf</p>
          <p className="text-white/80 text-sm">Entretien de jardins et piscines en Alsace</p>
        </div>
      </footer>
    </div>
  );
}
