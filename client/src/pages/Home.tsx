/*
Style reminder — Home.tsx
Philosophie retenue : minimalisme organique épuré, design moderne.
Règles de composition : grands espaces, asymétrie, tonalité premium, contrastes feutrés, verticalité architecturale.
Palette : vert profond, beige minéral, ivoire chaud, bronze discret.
Question directrice : est-ce que chaque bloc renforce une impression de paysagisme haut de gamme, calme et maîtrisé ?
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
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
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'espaces-verts',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kabalsa-services.fr?subject=Demande de devis - ${formData.name}&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const advantages = [
    {
      icon: CheckCircle,
      title: "Travail soigné et de qualité",
      description: "Résultats durables et satisfaisants"
    },
    {
      icon: Users,
      title: "Conseils personnalisés",
      description: "Solutions adaptées à vos besoins"
    },
    {
      icon: Award,
      title: "Plus de 13 ans d'expérience",
      description: "Un savoir-faire reconnu en Alsace"
    },
    {
      icon: Clock,
      title: "Professionnel local à votre écoute",
      description: "Disponible et réactif"
    },
    {
      icon: CheckCircle,
      title: "Suivi et entretien toute l'année",
      description: "Accompagnement continu de vos espaces"
    },
    {
      icon: CheckCircle,
      title: "Devis gratuit",
      description: "Sans engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Hero Section with integrated header */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/manus-storage/hero-photo_71765613.png" 
            alt="KAB'ALSA Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 flex flex-col items-start pt-6">
          {/* Logo at top left */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <img src="/logo.png" alt="KAB'ALSA Logo" className="h-32 drop-shadow-lg" />
          </motion.div>

          {/* Main heading and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Des extérieurs pensés pour durer
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
              KAB'ALSA Services Fruhauf entretient, imagine et valorise vos jardins avec passion, depuis plus de 13 ans en Alsace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33765274895">
                <Button className="bg-[#c4b5a0] text-[#2d5016] hover:bg-[#b39f8a] text-lg px-8 py-6 shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 shadow-lg">
                  Demander un devis
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Navigation links - floating */}
        <nav className="absolute top-8 right-8 z-20 hidden md:flex gap-8">
          <a href="#services" className="text-white hover:text-[#c4b5a0] transition font-medium drop-shadow-lg">Services</a>
          <a href="#pourquoi" className="text-white hover:text-[#c4b5a0] transition font-medium drop-shadow-lg">Pourquoi nous</a>
          <a href="#contact" className="text-white hover:text-[#c4b5a0] transition font-medium drop-shadow-lg">Contact</a>
        </nav>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#2d5016] mb-16 text-center">
            Nos services
          </h2>
          
          <div className="space-y-12">
            {/* Row 1: 2 services side by side */}
            <div className="grid md:grid-cols-2 gap-12">
            {/* Espaces Verts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#f5f3f0] to-[#ede8e3] p-8 rounded-xl border border-[#d7cebe] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d5016]">
                  Entretien Espaces Verts
                </h3>
              </div>
              
              <p className="text-[#67766d] mb-6 leading-relaxed">
                Tonte, taille, plantation, désherbage, nettoyage... Nous prenons soin de vos jardins toute l'année avec nos packs KAÏDAN adaptés à vos besoins.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Tonte régulière</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Taille de haies et arbustes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Plantation et engazonnement</span>
                </div>
              </div>

              <Link href="/espaces-verts">
                <a>
                  <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white">
                    Découvrir les packs KAÏDAN
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </Link>
            </motion.div>

            {/* Piscine et Spa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#f5f3f0] to-[#ede8e3] p-8 rounded-xl border border-[#d7cebe] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d5016]">
                  Entretien Piscine & Spa
                </h3>
              </div>
              
              <p className="text-[#67766d] mb-6 leading-relaxed">
                Une eau cristalline toute l'année. Nettoyage, traitement chimique, maintenance... Nos experts garantissent une piscine saine et sécurisée.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Nettoyage complet</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Traitement chimique</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Maintenance filtration</span>
                </div>
              </div>

              <Link href="/piscine-spa">
                <a>
                  <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white">
                    Découvrir le pack BAHÏA
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </Link>
            </motion.div>
            </div>
            {/* Row 2: 1 service full width */}
            <div>
            {/* Aménagement paysager */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#f5f3f0] to-[#ede8e3] p-8 rounded-xl border border-[#d7cebe] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2d5016]">
                  Aménagement Paysager
                </h3>
              </div>
              
              <p className="text-[#67766d] mb-6 leading-relaxed">
                Conception d'espaces extérieurs élégants, structurés et adaptés à l'architecture de votre propriété. Réalisation de projets variés pour améliorer et valoriser votre extérieur.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Création de jardins</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Aménagement paysager</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                  <span className="text-[#67766d]">Petits travaux extérieurs</span>
                </div>
              </div>

              <a href="#contact">
                <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section id="pourquoi" className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#2d5016] mb-2">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-sm text-[#67766d] mb-6 font-medium">
              L'exigence au quotidien
            </p>
            <h3 className="text-3xl font-bold text-[#2d5016] mb-6">
              Un jardin, une piscine, propre, soigné et agréable toute l'année.
            </h3>
            <p className="text-lg text-[#67766d] mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous prenons soin de vos extérieurs avec sérieux, régularité et passion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-xl border border-[#d7cebe] text-center hover:shadow-lg transition-shadow h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#2d5016] text-lg leading-relaxed">{adv.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#2d5016] mb-4 text-center">
            Demander un devis
          </h2>
          <p className="text-center text-[#67766d] mb-12 max-w-2xl mx-auto">
            Remplissez rapidement ce formulaire et nous vous recontacterons dans les meilleurs délais.
          </p>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#f5f3f0] to-[#ede8e3] p-8 rounded-xl border border-[#d7cebe]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d7cebe] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] bg-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d7cebe] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] bg-white"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d7cebe] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] bg-white"
                    placeholder="07 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2d5016] mb-2">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#d7cebe] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] bg-white"
                  >
                    <option value="espaces-verts">Entretien Espaces Verts</option>
                    <option value="piscine-spa">Entretien Piscine & Spa</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2d5016] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#d7cebe] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d5016] bg-white"
                  placeholder="Décrivez vos besoins..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white py-6 text-lg">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">KAB'ALSA Services</h4>
              <p className="text-[#c4b5a0] text-sm">
                Entretien de jardins et piscines en Alsace depuis 2011.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/espaces-verts">
                    <a className="text-[#c4b5a0] hover:text-white transition">Espaces Verts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/piscine-spa">
                    <a className="text-[#c4b5a0] hover:text-white transition">Piscine & Spa</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Réseaux sociaux</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1CWaNuDomP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#c4b5a0] hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/kabalsa" target="_blank" rel="noopener noreferrer" className="text-[#c4b5a0] hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://share.google.com/zy4OlTSVQcMyVkitV" target="_blank" rel="noopener noreferrer" className="text-[#c4b5a0] hover:text-white transition">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#4a6b2e] pt-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="font-semibold text-white mb-2">Contact</p>
                <p className="text-[#c4b5a0]">📞 07 65 27 48 95</p>
                <p className="text-[#c4b5a0]">✉️ contact@kabalsa-services.fr</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Zones d'intervention</p>
                <p className="text-[#c4b5a0]">Strasbourg • Lipsheim • Fegersheim • Blaesheim • Entzheim • Geispolsheim</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Localisation</p>
                <p className="text-[#c4b5a0]">Alsace Bas-Rhin</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#4a6b2e] mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#c4b5a0]">
              <p>&copy; 2024 KAB'ALSA Services Fruhauf. Tous droits réservés. | SIRET : 10336606800015</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="/mentions-legales" className="hover:text-white transition">
                  Mentions légales
                </a>
                <a href="/cgvi" className="hover:text-white transition">
                  CGVI
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
