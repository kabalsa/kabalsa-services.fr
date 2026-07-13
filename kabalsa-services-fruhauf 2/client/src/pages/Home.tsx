import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Droplet,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  CheckCircle,
  Users,
  Clock,
  Award,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  Scissors,
  Sprout,
  Wind,
  Waves,
  Sun,
  Snowflake,
  Handshake,
  FileCheck,
  Zap,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const packs = [
    {
      name: "PACK KAÏDAN",
      subtitle: "ENTRETIEN JARDIN",
      description: "Un jardin entretenu, harmonieux et agréable",
      icon: Leaf,
      color: "bg-[#2d5016]",
      link: "/jardin"
    },
    {
      name: "PACK BAHÏA",
      subtitle: "ENTRETIEN PISCINE",
      description: "Une piscine impeccable, saine et sécurisée",
      icon: Droplet,
      color: "bg-[#1e5a96]",
      link: "/piscine"
    },
    {
      name: "PACK TINA",
      subtitle: "PISCINE + JARDIN",
      description: "La sérénité totale de vos extérieurs",
      icon: Award,
      color: "bg-[#c4a574]",
      link: "/tina"
    }
  ];

  const whyUs = [
    { icon: Shield, title: "Service sérieux", description: "Plus de 13 ans d'expérience" },
    { icon: Users, title: "Un seul interlocuteur", description: "Proche et réactif" },
    { icon: CheckCircle, title: "Prestations planifiées", description: "Jour fixe selon la tournée" },
    { icon: Award, title: "Professionnels", description: "Équipe qualifiée et expérimentée" },
    { icon: Leaf, title: "Respectueux", description: "Produits écologiques" },
    { icon: Star, title: "Suivi personnalisé", description: "Adaptation à vos besoins" }
  ];

  const testimonials = [
    { name: "Jean Dupont", rating: 5, text: "Excellent service, très professionnel !" },
    { name: "Marie Martin", rating: 5, text: "Très satisfait de l'entretien de ma piscine" },
    { name: "Pierre Lefevre", rating: 5, text: "Équipe réactive et de qualité" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
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
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-[#2d5016]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block bg-[#2d5016] text-white px-6 py-2 rounded-full hover:bg-[#1f3810] transition-colors ml-auto flex-shrink-0"
          >
            Demander un devis
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container flex flex-col gap-4">
              <Link href="/piscine">
                <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Piscine</a>
              </Link>
              <Link href="/jardin">
                <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Jardin</a>
              </Link>
              <Link href="/nos-packs">
                <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Nos Packs</a>
              </Link>
              <Link href="/a-propos">
                <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>À propos</a>
              </Link>
              <Link href="/cgvi">
                <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors block py-2" onClick={() => setMobileMenuOpen(false)}>Conditions générales</a>
              </Link>
              <button 
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="bg-[#2d5016] text-white px-6 py-2 rounded-full hover:bg-[#1f3810] transition-colors w-full mt-2"
              >
                Demander un devis
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(/manus-storage/K7lYeLmwVgSR_5179b158.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10"></div>
        <div className="container h-full flex flex-col items-center justify-center text-center text-white relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">L'ENTRETIEN DE VOS EXTÉRIEURS en toute sérénité</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">KAB'ALSA Services Fruhauf entretient, imagine et valorise vos jardins et piscines depuis plus de 13 ans en Alsace.</p>
          <div className="flex gap-6">
            <a href="tel:0765274895" className="bg-[#2d5016] text-white px-8 py-3 rounded-lg hover:bg-[#1f3810] transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" /> Appeler maintenant
            </a>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#2d5016] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Demander un devis gratuit →
            </button>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-12 text-center">Qui sommes-nous ?</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 mb-6">Chez KAB'ALSA Services Fruhauf, nous accompagnons nos clients dans l'entretien de leurs piscines et jardins. Grâce à nos contrats d'entretien BAHÏA, KAÏDAN et TINA, nous assurons un suivi régulier, personnalisé et de qualité tout au long de l'année.</p>
            <p className="text-lg text-gray-700">Notre expertise et notre passion nous permettent de transformer vos espaces extérieurs en véritables havres de paix.</p>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-12 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f5f3f0] p-8 rounded-lg"
            >
              <Leaf className="w-12 h-12 text-[#2d5016] mb-4" />
              <h3 className="text-2xl font-bold text-[#2d5016] mb-4">Espaces Verts</h3>
              <p className="text-gray-700 leading-relaxed">Entretien complet de vos jardins : tonte de pelouse, taille de haies, désherbage, nettoyage et aménagement paysager. Nous transformons vos espaces verts en véritables havres de paix.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f3f0] p-8 rounded-lg"
            >
              <Droplet className="w-12 h-12 text-[#1e5a96] mb-4" />
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Piscines</h3>
              <p className="text-gray-700 leading-relaxed">Entretien régulier, estivage, hivernage et maintenance complète de votre piscine. Eau cristalline et équilibrée toute l'année grâce à nos services professionnels.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f5f3f0] p-8 rounded-lg"
            >
              <Wrench className="w-12 h-12 text-[#c4a574] mb-4" />
              <h3 className="text-2xl font-bold text-[#c4a574] mb-4">Petits Travaux</h3>
              <p className="text-gray-700 leading-relaxed">Aménagements et petits travaux extérieurs : pose de pavé, dalle sur plots, clôtures, petits murets. Nous transformons vos espaces avec des solutions durables et esthétiques.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Packs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          {/* Header avec layout 3 colonnes */}
          <div className="flex items-start justify-between mb-16 gap-8">
            {/* Left text */}
            <div className="flex-1">
              <p className="text-lg italic text-[#2d5016] mb-2">Un extérieur impeccable,</p>
              <p className="text-lg italic text-[#2d5016] mb-4">un esprit tranquille.</p>
              <div className="w-12 h-1 bg-[#c4a574]"></div>
            </div>
            
            {/* Center title */}
            <div className="flex-1 text-center">
              <h2 className="text-5xl font-bold text-[#2d5016] mb-4">Nos Packs</h2>
              <div className="flex justify-center mb-4">
                <span className="text-4xl">🌸</span>
              </div>
              <p className="text-gray-700 mb-1">Des formules complètes pour des extérieurs soignés,</p>
              <p className="font-bold text-gray-800">toute l'année.</p>
            </div>
            
            {/* Right circle */}
            <div className="flex-1 flex justify-end">
              <div className="w-40 h-40 rounded-full border-2 border-[#c4a574] flex flex-col items-center justify-center text-center p-6">
                <Calendar className="w-8 h-8 text-[#c4a574] mx-auto mb-2" />
                <p className="font-bold text-[#2d5016] text-sm">Interventions</p>
                <p className="font-bold text-[#2d5016] text-sm">planifiées à l'avance</p>
                <p className="text-xs text-[#2d5016] mt-2">selon la tournée</p>
              </div>
            </div>
          </div>
          
          {/* Packs cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, idx) => {
              const Icon = pack.icon;
              const packImages = [
                'https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-kaidan-jardin-gKKW5nkudSrBMTZDvxg8GL.webp',
                'https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-bahia-piscine-BBu7ckHoZWQwfNw6z4EJGa.webp',
                'https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-tina-combo-YZMU6hE6FHgz6FqAvECyC8.webp'
              ];
              const packFeatures = [
                [
                  { icon: 'mower', text: 'Tonte de pelouse' },
                  { icon: 'scissors', text: 'Taille de haies' },
                  { icon: 'sprout', text: 'Désherbage' },
                  { icon: 'leaf', text: 'Entretien général' }
                ],
                [
                  { icon: 'sun', text: 'Estivage' },
                  { icon: 'droplet', text: 'Entretien régulier' },
                  { icon: 'snowflake', text: 'Hivernage' }
                ],
                [
                  { icon: 'users', text: 'Un seul interlocuteur' },
                  { icon: 'checkCircle', text: 'Une seule organisation' },
                  { icon: 'fileText', text: 'Une seule facturation' },
                  { icon: 'clock', text: 'Plus de temps' }
                ]
              ];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img src={packImages[idx]} alt={pack.name} className="w-full h-48 object-cover" />
                  
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 ${pack.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-sm font-semibold text-gray-600 text-center mb-2">PACK</p>
                    <h3 className="text-3xl font-bold text-center mb-2" style={{ color: pack.color }}>{pack.name}</h3>
                    <p className="text-sm font-semibold text-center mb-4" style={{ color: pack.color }}>{pack.subtitle}</p>
                    
                    <p className="text-gray-700 text-center mb-6 text-sm">{pack.description}</p>
                    
                    <div className="border-t border-gray-200 pt-6 mb-6">
                      <div className="flex flex-wrap justify-center gap-4">
                        {packFeatures[idx].map((feature, i) => {
                          const iconMap: any = {
                            mower: <Wind className="w-6 h-6 text-[#2d5016]" />,
                            scissors: <Scissors className="w-6 h-6 text-[#2d5016]" />,
                            sprout: <Sprout className="w-6 h-6 text-[#2d5016]" />,
                            leaf: <Leaf className="w-6 h-6 text-[#2d5016]" />,
                            sun: <Sun className="w-6 h-6 text-[#1e5a96]" />,
                            droplet: <Droplet className="w-6 h-6 text-[#1e5a96]" />,
                            water: <Waves className="w-6 h-6 text-[#1e5a96]" />,
                            snowflake: <Snowflake className="w-6 h-6 text-[#1e5a96]" />,
                            users: <Handshake className="w-6 h-6 text-[#c4a574]" />,
                            checkCircle: <CheckCircle className="w-6 h-6 text-[#c4a574]" />,
                            fileText: <FileCheck className="w-6 h-6 text-[#c4a574]" />,
                            clock: <Zap className="w-6 h-6 text-[#c4a574]" />
                          };
                          return (
                            <div key={i} className="flex flex-col items-center gap-1">
                              <div className="flex justify-center">{iconMap[feature.icon]}</div>
                              <p className="text-xs text-gray-700 text-center">{feature.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <Link href={idx === 0 ? '/kaidan' : idx === 1 ? '/bahia' : pack.link}>
                      <a>
                        <button className={`w-full ${pack.color} text-white font-semibold py-3 rounded-full hover:opacity-90`}>
                          En savoir plus →
                        </button>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Pourquoi choisir KAB'ALSA Services Fruhauf ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg border border-[#d7cebe] text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d5016] mb-3">{item.title}</h3>
                  <p className="text-[#67766d]">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avis Google */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-8">Découvrez nos avis clients</h2>
          <p className="text-lg text-[#67766d] mb-12 max-w-2xl mx-auto">Consultez les avis de nos clients satisfaits sur Google</p>
          <a href="https://share.google/i5uv0Boz4EwBXHxhq" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2d5016] text-white px-8 py-3 rounded-lg hover:bg-[#1f3810] transition-colors">
            Lire les avis Google
          </a>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-12 text-center">Notre zone d'intervention</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">Nous intervenons dans la région de Strasbourg et ses alentours :</p>
              <div className="grid grid-cols-2 gap-4">
                {['Lipsheim', 'Fegersheim', 'Blaesheim', 'Entzheim', 'Geispolsheim'].map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#2d5016]" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#d7cebe]">
              <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Contactez-nous</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#2d5016]" />
                  <a href="tel:0765274895" className="text-lg text-[#2d5016] font-semibold hover:underline">07 65 27 48 95</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#2d5016]" />
                  <a href="mailto:contact@kabalsa-services.fr" className="text-lg text-[#2d5016] font-semibold hover:underline">contact@kabalsa-services.fr</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-12 text-center">Demander un devis</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Prénom"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="text"
                placeholder="Nom"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
              />
            </div>
            
            <input
              type="text"
              placeholder="Adresse postale"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
            />
            
            <input
              type="email"
              placeholder="Adresse email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            
            <textarea
              placeholder="Que souhaitez-vous ?"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d5016]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-[#2d5016] text-white font-semibold py-3 rounded-lg hover:bg-[#1f3810] transition-colors"
            >
              Envoyer mon message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">KAB'ALSA Services</h3>
              <p className="text-sm text-gray-300">Entretien de piscines et jardins en Alsace</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/piscine"><a>Piscine</a></Link></li>
                <li><Link href="/jardin"><a>Jardin</a></Link></li>
                <li><Link href="/nos-packs"><a>Nos Packs</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">07 65 27 48 95</p>
              <p className="text-sm text-gray-300">contact@kabalsa-services.fr</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-gray-300 hover:text-white"><Instagram className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 KAB'ALSA Services Fruhauf. Tous droits réservés.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/mentions-legales"><a>Mentions légales</a></Link>
              <Link href="/cgvi"><a>Conditions générales</a></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Button({ children, className }: any) {
  return <button className={className}>{children}</button>;
}
