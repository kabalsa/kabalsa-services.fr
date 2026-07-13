import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, Leaf, Scissors, Sprout, Wind, Home, Trash2, Calendar, FileText, Trees, AlertTriangle, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Link } from 'wouter';

export default function EspacesVerts() {
  const packs = [
    {
      name: "KAÏDAN ESSENTIEL",
      frequency: "1 passage / mois",
      description: "Idéal pour les petits jardins et un entretien régulier",
      tagline: "Prestation idéale pour maintenir votre jardin propre et soigné tout au long de l'année.",
      icon: Leaf,
      isPopular: false
    },
    {
      name: "KAÏDAN CONFORT",
      frequency: "2 passages / mois",
      description: "Le bon équilibre pour un jardin harmonieux et bien entretenu",
      tagline: "Pour les jardins de taille moyenne qui nécessitent un entretien régulier et un rendu impeccable.",
      icon: Leaf,
      isPopular: true
    },
    {
      name: "KAÏDAN PRESTIGE",
      frequency: "1 passage / semaine",
      description: "L'entretien haut de gamme pour un extérieur impeccable",
      tagline: "Pour les jardins exigeants qui méritent une attention constante et professionnelle.",
      icon: Leaf,
      isPopular: false
    }
  ];

  const allServices = [
    { icon: "tondeuse", title: "Tonte", description: "Tonte régulière de la pelouse selon la croissance" },
    { icon: "secateur", title: "Taille de haies et arbustes", description: "Taille des haies, arbustes et massif pour une croissance harmonieuse" },
    { icon: "debroussailleuse", title: "Débroussaillage", description: "Débroussaillage des zones encombrées et difficiles d'accès" },
    { icon: "fleur", title: "Désherbage", description: "Désherbage manuel des massifs, allées, terrasses et cours" },
    { icon: "souffleur", title: "Soufflage des feuilles", description: "Soufflage des feuilles, allées, terrasses et cours" },
    { icon: "maison", title: "Entretien général", description: "Nettoyage des dechets végétaux et entretiens général de votre jardin" }
  ];

  const infoItems = [
    { icon: Calendar, title: "Interventions planifiées", description: "Les interventions sont planifiées à l'avance, jour fixe selon la tournée." },
    { icon: FileText, title: "Forfait établi pour une année entière", description: "Le forfait est établi pour un entretien normal. Intervention exceptionnelle (eau verte, tempête...) sur devis complémentaire." },
    { icon: AlertTriangle, title: "Intervention exceptionnelle", description: "Abattage, abattage, gros travaux...) sur devis complémentaire." },
    { icon: Leaf, title: "Produits et consommables", description: "Les produits utilisés respectent votre jardin et l'environnement." }
  ];

  const advantages = [
    { icon: Users, title: "Un seul interlocuteur", description: "Un contact unique, proche et réactif" },
    { icon: Calendar, title: "Une seule planification", description: "Interventions planifiées à l'avance, jour fixe selon la tournée" },
    { icon: FileText, title: "Une seule facturation", description: "Transparence et suivi personnalisé" },
    { icon: Award, title: "Budget maîtrisé", description: "Forfait annuel avantageux avec possibilité de mensualisation" },
    { icon: Leaf, title: "Valorisation", description: "Valorisation de votre propriété toute l'année" },
    { icon: Clock, title: "Plus de temps", description: "Profitez de votre jardin et de votre piscine" }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2d5016] text-white shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
              <span className="text-sm md:text-base">Retour</span>
            </a>
          </Link>
          <h1 className="text-lg md:text-xl font-bold">Espaces Verts</h1>
          <div className="w-20 md:w-24"></div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5016] via-[#3d6b1f] to-[#1f3810]"></div>
        
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Entretien Espaces Verts
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Un jardin soigné, un extérieur qui respire. Le Pack KAÏDAN vous garantit des espaces verts entretenus avec soin tout au long de l'année, pour un extérieur propre, harmonieux et agréable en toute saison.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packs Section - 2 and 1 layout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-20 text-center">3 niveaux de prestations, 3 fréquences adaptées à vos besoins</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {packs.slice(0, 2).map((pack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative rounded-xl border-2 p-8 transition-all flex flex-col ${
                  pack.isPopular
                    ? 'border-[#2d5016] bg-white shadow-xl'
                    : 'border-gray-300 bg-white'
                }`}
              >
                {/* Popular Badge */}
                {pack.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-[#2d5016] text-white px-4 py-1 rounded-full text-xs font-bold">
                      Le plus choisi
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#2d5016] rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#2d5016] mb-2">{pack.name}</h3>
                <p className="text-sm font-semibold text-white bg-[#2d5016] px-3 py-1 rounded-full inline-block mb-4 w-fit">{pack.frequency}</p>
                
                {/* Description */}
                <p className="text-base text-[#67766d] mb-4">{pack.description}</p>

                {/* Tagline */}
                <p className="text-sm italic text-[#2d5016] font-semibold mb-6 border-t pt-4">
                  {pack.tagline}
                </p>

                {/* Button */}
                <Link href="/espaces-verts#packs">
                  <a className="block mt-auto">
                    <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white py-3 text-base">
                      Découvrir le Pack KAÏDAN
                    </Button>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Third pack centered */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border-2 p-8 transition-all flex flex-col w-full md:w-1/2 ${
                packs[2].isPopular
                  ? 'border-[#2d5016] bg-white shadow-xl'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#2d5016] rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2d5016] mb-2">{packs[2].name}</h3>
              <p className="text-sm font-semibold text-white bg-[#2d5016] px-3 py-1 rounded-full inline-block mb-4 w-fit">{packs[2].frequency}</p>
              
              {/* Description */}
              <p className="text-base text-[#67766d] mb-4">{packs[2].description}</p>

              {/* Tagline */}
              <p className="text-sm italic text-[#2d5016] font-semibold mb-6 border-t pt-4">
                {packs[2].tagline}
              </p>

              {/* Button */}
              <Link href="/espaces-verts#packs">
                <a className="block mt-auto">
                  <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white py-3 text-base">
                    Découvrir le Pack KAÏDAN
                  </Button>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Les prestations incluses dans tous les packs KAÏDAN</h2>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {allServices.map((service, idx) => {
              const getImageUrl = (icon: string) => {
                const urls: { [key: string]: string } = {
                  "tondeuse": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/tondeuse-illustration-6dAEcvQ7caz8gxvp4zPMGg.webp",
                  "secateur": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/secateur-illustration-MNmx46j7DE4ndsWviBJxkF.webp",
                  "debroussailleuse": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/debroussailleuse-illustration-JxPgFQszYouHgumUA44qM7.webp",
                  "fleur": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/fleur-terre-illustration-Gu6Z747HodLy8idqDyUFzC.webp",
                  "souffleur": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/souffleur-illustration-SmjXkojBprWeAGrK2FRuvc.webp",
                  "maison": "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/maison-illustration-DXqTLGUteRzRntosp2qdoM.webp"
                };
                return urls[icon] || "";
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="mb-6 flex justify-center">
                    <img src={getImageUrl(service.icon)} alt={service.title} className="w-20 h-20" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2d5016] mb-3">{service.title}</h3>
                  <p className="text-base text-[#67766d] leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Informations importantes</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {infoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#f5f3f0] to-[#ede8e3] p-8 rounded-lg border border-[#d7cebe]"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-[#2d5016] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#2d5016] mb-3 text-center">{item.title}</h3>
                  <p className="text-sm text-[#67766d] text-center">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages KAÏDAN */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Les avantages KAÏDAN</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg border border-[#d7cebe] text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#2d5016] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-[#2d5016] mb-2">{adv.title}</p>
                  <p className="text-xs text-[#67766d]">{adv.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-8">Prêt à transformer votre jardin ?</h2>
          <p className="text-lg md:text-xl text-[#67766d] mb-12 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé et découvrez comment nos packs KAÏDAN peuvent entretenir votre jardin toute l'année.
          </p>
          <a href="/">
            <Button className="bg-[#2d5016] hover:bg-[#1f3810] text-white px-10 py-4 text-lg">
              Demander un devis
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
