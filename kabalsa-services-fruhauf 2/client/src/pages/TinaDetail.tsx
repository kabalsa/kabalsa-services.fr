import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Shield, AlertTriangle, Droplet, Users, Clock, Award, FileCheck, Zap, Handshake, Wind, Scissors, Sprout, Leaf, Sun, Snowflake, CheckCircle } from 'lucide-react';

export default function TinaDetail() {
  const bahiaServices = [
    'Estivage complet',
    'Entretien hebdomadaire de mai à septembre',
    'Produits inclus*',
    'Analyse et régulation de la chimie de l\'eau',
    'Nettoyage complet du bassin',
    'Contrôle du système de filtration',
    'Hivernage complet'
  ];

  const kaidanServices = [
    'Tonte de la pelouse',
    'Taille des haies et arbustes',
    'Débroussaillage',
    'Désherbage',
    'Soufflage des feuilles',
    'Entretien général du jardin'
  ];

  const advantages = [
    { icon: Users, title: 'UN SEUL INTERLOCUTEUR', desc: 'Un contact dédié, proche et réactif.' },
    { icon: Clock, title: 'UNE SEULE PLANIFICATION', desc: 'Des interventions planifiées à l\'avance, jour fixe selon la tournée.' },
    { icon: FileCheck, title: 'UNE SEULE FACTURATION', desc: 'Simplicité, transparence et suivi personnalisé.' },
    { icon: Award, title: 'BUDGET MAÎTRISÉ', desc: 'Forfait annuel avantageux avec possibilité de mensualisation.' },
    { icon: Leaf, title: 'VALORISATION DE VOTRE PROPRIÉTÉ', desc: 'Un extérieur soigné toute l\'année.' },
    { icon: Zap, title: 'PLUS DE TEMPS POUR VOUS', desc: 'Profitez de votre jardin et piscine, nous nous occupons du reste !' }
  ];

  const importantInfos = [
    { icon: Droplet, title: 'PRODUITS PISCINE INCLUS*', description: 'Produits d\'ouverture, d\'hivernage et d\'entretien courant de la piscine inclus.' },
    { icon: Calendar, title: 'INTERVENTIONS PLANIFIÉES', description: 'Les interventions sont planifiées à l\'avance, jour fixe selon la tournée.' },
    { icon: Shield, title: 'FORFAIT ÉTABLI', description: 'Le forfait est établi pour un entretien normal, intervention exceptionnelle sur devis complémentaire.' }
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
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">Piscine</a>
            </Link>
            <Link href="/jardin">
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">Jardin</a>
            </Link>
            <Link href="/nos-packs">
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">Nos Packs</a>
            </Link>
            <Link href="/a-propos">
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">À propos</a>
            </Link>
            <Link href="/cgvi">
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">Conditions générales</a>
            </Link>
          </nav>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#2d5016] hover:bg-[#1f3810] text-white px-6 py-2 rounded-lg font-semibold ml-auto flex-shrink-0">
            Demander un devis
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-tina-combo-YZMU6hE6FHgz6FqAvECyC8.webp')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/90"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#c4a574] text-sm font-semibold mb-2">PACK</p>
              <h1 className="text-6xl md:text-7xl font-bold text-[#2d5016] mb-6">TINA</h1>
              
              <div className="bg-[#c4a574] text-white px-6 py-2 rounded-full inline-block mb-6 font-semibold">
                PISCINE + JARDIN
              </div>
              
              <p className="text-lg text-[#c4a574] italic font-semibold mb-4">
                La sérénité totale de vos extérieurs
              </p>
              
              <p className="text-[#67766d] leading-relaxed mb-6">
                Le Pack TINA réunit l'expertise des offres BAHÏA et KAÏDAN afin de garantir un extérieur impeccable tout au long de l'année.
              </p>

              <p className="text-[#2d5016] font-bold mb-6 text-lg">
                Une seule entreprise, un seul interlocuteur, une seule organisation.
              </p>

              <div className="flex items-center gap-3 bg-[#f5f3f0] p-4 rounded-lg">
                <Calendar className="w-6 h-6 text-[#c4a574]" />
                <div>
                  <p className="font-semibold text-[#2d5016]">De janvier à décembre</p>
                  <p className="text-sm text-[#67766d]">Pour un extérieur impeccable toute l'année</p>
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-tina-combo-YZMU6hE6FHgz6FqAvECyC8.webp"
                alt="Pack TINA"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#c4a574] my-8"></div>

      {/* Ce qui est inclus */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">CE QUI EST INCLUS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* BAHÏA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-[#1e5a96] rounded-lg p-8 bg-[#f0f5fa]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1e5a96] flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e5a96]">UNIVERS PISCINE<br/>BAHÏA</h3>
              </div>
              <ul className="space-y-3">
                {bahiaServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1e5a96] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1e5a96] font-semibold">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* KAÏDAN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-2 border-[#2d5016] rounded-lg p-8 bg-[#f0f4ed]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#2d5016] flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d5016]">UNIVERS JARDIN<br/>KAÏDAN</h3>
              </div>
              <ul className="space-y-3">
                {kaidanServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2d5016] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2d5016] font-semibold">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">INFORMATIONS IMPORTANTES</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {importantInfos.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <Icon className="w-12 h-12 text-[#c4a574] mb-4" />
                  <h3 className="text-xl font-bold text-[#2d5016] mb-3">{info.title}</h3>
                  <p className="text-gray-700">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Les avantages TINA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">LES AVANTAGES TINA</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f5f3f0] p-8 rounded-lg text-center"
                >
                  <Icon className="w-12 h-12 text-[#c4a574] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#2d5016] mb-3">{advantage.title}</h3>
                  <p className="text-gray-700">{advantage.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d5016] text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos extérieurs ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis personnalisé et découvrez comment le Pack TINA peut vous offrir la sérénité totale.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#c4a574] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Demander un devis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f3810] text-white py-12">
        <div className="container text-center">
          <p className="mb-4">© 2026 KAB'ALSA Services Fruhauf. Tous droits réservés.</p>
          <p className="text-sm opacity-80">Entretien de jardins et piscines en Alsace</p>
        </div>
      </footer>
    </div>
  );
}
