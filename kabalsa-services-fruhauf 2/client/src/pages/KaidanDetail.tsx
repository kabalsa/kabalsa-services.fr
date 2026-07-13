import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Wind, Scissors, Sprout, Leaf, AlertTriangle, Calendar, Shield, Droplet, CheckCircle, Users, Clock, Award, FileCheck, Zap, Handshake } from 'lucide-react';

export default function KaidanDetail() {
  const prestations = [
    { icon: Wind, text: 'Tonte de pelouse' },
    { icon: Scissors, text: 'Taille de haies et arbustes' },
    { icon: Sprout, text: 'Désherbage' },
    { icon: Leaf, text: 'Entretien général' },
    { icon: Droplet, text: 'Soufflage des feuilles' },
    { icon: Shield, text: 'Débroussaillage' }
  ];

  const packs = [
    {
      name: 'KAÏDAN ESSENTIEL',
      frequency: '1 passage / mois',
      description: 'Idéal pour les petits jardins et un entretien régulier.',
      number: '1',
      borderColor: 'border-[#2d5016]',
      bgColor: 'bg-[#f0f4ed]'
    },
    {
      name: 'KAÏDAN CONFORT',
      frequency: '2 passages / mois',
      description: 'Le bon équilibre pour un jardin harmonieux et bien entretenu.',
      number: '2',
      borderColor: 'border-[#2d5016]',
      bgColor: 'bg-white'
    },
    {
      name: 'KAÏDAN PRESTIGE',
      frequency: '1 passage / semaine',
      description: 'L\'entretien haut de gamme pour un extérieur toujours parfait.',
      number: '3',
      borderColor: 'border-[#c4a574]',
      bgColor: 'bg-[#faf8f4]'
    }
  ];

  const importantInfos = [
    { icon: Calendar, title: 'Interventions planifiées', description: 'Interventions planifiées à l\'avance, jour fixe selon la tournée.' },
    { icon: Shield, title: 'Forfait établi', description: 'Le forfait est établi pour un entretien normal, dans un état d\'entretien normal.' },
    { icon: AlertTriangle, title: 'Intervention exceptionnelle', description: 'Intervention exceptionnelle (élagage, abattage, gros débarra...) sur devis complémentaire.' },
    { icon: Droplet, title: 'Produits utilisés', description: 'Les produits utilisés respectent votre jardin et l\'environnement.' }
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

      {/* Hero Section - Reprenant le design de l'affiche */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-kaidan-jardin-gKKW5nkudSrBMTZDvxg8GL.webp')"
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
              
              <p className="text-[#2d5016] text-sm font-semibold mb-2">PACK</p>
              <h1 className="text-6xl md:text-7xl font-bold text-[#2d5016] mb-6">KAÏDAN</h1>
              
              <div className="bg-[#2d5016] text-white px-6 py-2 rounded-full inline-block mb-6 font-semibold">
                ENTRETIEN ESPACES VERTS
              </div>
              
              <p className="text-lg text-[#2d5016] italic font-semibold mb-4">
                Un jardin soigné, un extérieur qui respire
              </p>
              
              <p className="text-[#67766d] leading-relaxed mb-6">
                Le Pack KAÏDAN vous garantit des espaces verts entretenus avec soin tout au long de l'année, pour un extérieur propre, harmonieux et agréable en toute saison.
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-kaidan-jardin-gKKW5nkudSrBMTZDvxg8GL.webp"
                alt="Jardin KAÏDAN"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#c4a574] my-8"></div>

      {/* 3 Niveaux de prestations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4 text-center">3 niveaux de prestations</h2>
          <p className="text-center text-[#67766d] mb-16 max-w-2xl mx-auto font-semibold">3 fréquences adaptées à vos besoins</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-8 transition-all border-3 ${pack.borderColor} ${pack.bgColor}`}
                >
                  
                  <div className={`w-14 h-14 bg-[#2d5016] rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl`}>
                    {pack.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2d5016] mb-3">{pack.name}</h3>
                  <p className="text-sm font-semibold text-white bg-[#2d5016] px-3 py-1 rounded-full inline-block mb-4 w-fit">{pack.frequency}</p>
                  
                  <p className="text-[#67766d] text-sm leading-relaxed">{pack.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#c4a574] my-8"></div>

      {/* Les prestations incluses */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4 text-center">Les prestations incluses dans tous les packs KAÏDAN</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {prestations.map((prestation, idx) => {
              const Icon = prestation.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#2d5016]" />
                  </div>
                  <p className="font-semibold text-[#2d5016] text-sm">{prestation.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-2 border-[#c4a574] my-8"></div>

      {/* Informations importantes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Informations importantes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {importantInfos.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-[#f5f3f0] p-6 rounded-lg"
                >
                  <Icon className="w-6 h-6 text-[#2d5016] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#2d5016] mb-2 text-sm">{info.title}</h3>
                    <p className="text-xs text-[#67766d]">{info.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#2d5016] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Prêt à transformer votre jardin ?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Confiez-nous l'entretien de vos espaces verts et profitez d'un jardin impeccable toute l'année.
          </p>
          <Link href="/">
            <a>
              <button className="bg-white hover:bg-gray-100 text-[#2d5016] px-10 py-4 text-lg font-semibold rounded-lg transition-colors">
                Demander mon devis →
              </button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-12 border-t-4 border-[#c4a574]">
        <div className="container text-center">
          <p className="mb-4 font-semibold">KAB'ALSA Services Fruhauf</p>
          <p className="text-white/80 text-sm">Entretien de jardins et piscines en Alsace</p>
        </div>
      </footer>
    </div>
  );
}
