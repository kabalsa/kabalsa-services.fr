import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, Shield, Leaf, Users, Award } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Professionnalisme",
      description: "Service sérieux et fiable depuis plus de 13 ans en Alsace"
    },
    {
      icon: Leaf,
      title: "Respect de la nature",
      description: "Utilisation de produits professionnels respectueux de l'environnement"
    },
    {
      icon: Users,
      title: "Relation client",
      description: "Un seul interlocuteur, proche et réactif à vos besoins"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Engagement pour la qualité et la satisfaction de nos clients"
    }
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
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors font-semibold">À propos</a>
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

      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d5016] via-[#3d6b1f] to-[#1f3810]">
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Découvrez l'histoire et les valeurs de KABALSA Services Fruhauf
            </p>
          </motion.div>
        </div>
      </section>

      {/* À propos du gérant */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="/manus-storage/B9D7C5AA-E60B-401C-9CC5-3BF968E65E53_c3ff880f.PNG" 
                alt="Guillaume Fruhauf" 
                className="rounded-lg w-full object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-[#2d5016] mb-6">Notre Histoire</h3>
              <p className="text-lg text-[#67766d] mb-6 leading-relaxed">
                Après plus de 13 ans de passion et d'expérience dans les espaces verts, KAB'ALSA Services Fruhauf est né d'une envie simple : proposer un travail soigné, humain et de confiance.
              </p>
              <p className="text-lg text-[#67766d] mb-6 leading-relaxed">
                Chaque chantier est réalisé avec sérieux, passion et le goût du travail bien fait.
              </p>
              <p className="text-lg text-[#67766d] mb-8 leading-relaxed">
                Aujourd'hui, cette aventure se construit aussi en famille, en transmettant à nos enfants les valeurs du courage, du respect et de la passion du métier.
              </p>
              <Link href="/">
                <a>
                  <Button className="bg-[#2d5016] hover:bg-[#1f3810] text-white px-8 py-3 text-lg">
                    Nous contacter
                  </Button>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Nos valeurs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
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
                  <h3 className="text-xl font-bold text-[#2d5016] mb-3">{value.title}</h3>
                  <p className="text-[#67766d] leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Notre zone d'intervention</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#67766d] mb-6 leading-relaxed">
                Nous intervenons dans la région de Strasbourg Sud et ses alentours, couvrant les communes suivantes :
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Strasbourg",
                  "Lipsheim",
                  "Fegersheim",
                  "Blaesheim",
                  "Entzheim",
                  "Geispolsheim"
                ].map((commune, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2d5016] rounded-full"></div>
                    <span className="text-[#2d5016] font-semibold">{commune}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-[#67766d] leading-relaxed">
                Vous ne trouvez pas votre commune ? N'hésitez pas à nous contacter pour vérifier si nous pouvons intervenir chez vous.
              </p>
            </motion.div>


          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#2d5016] text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Prêt à nous faire confiance ?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et recevoir un devis personnalisé.
          </p>
          <Link href="/">
            <a>
              <Button className="bg-white hover:bg-gray-100 text-[#2d5016] px-10 py-4 text-lg font-semibold">
                Nous contacter
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
