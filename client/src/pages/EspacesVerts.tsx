import { Link } from 'wouter';
import { ChevronLeft, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function EspacesVerts() {
  const packs = [
    {
      name: 'KAÏDAN ESSENTIEL',
      frequency: '1 passage / mois',
      description: 'Idéal pour les petits jardins et un entretien régulier',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-300',
      services: [
        'Tonte régulière',
        'Taille de haies et arbustes',
        'Débourrassage des zones encombrées',
        'Désherbage manuel',
        'Soufflage des feuilles',
        'Entretien général'
      ]
    },
    {
      name: 'KAÏDAN CONFORT',
      frequency: '2 passages / mois',
      description: 'Le bon équilibre pour un jardin harmonieux et bien entretenu',
      color: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-300',
      services: [
        'Tonte régulière',
        'Taille de haies et arbustes',
        'Débourrassage des zones encombrées',
        'Désherbage manuel',
        'Soufflage des feuilles',
        'Entretien général'
      ]
    },
    {
      name: 'KAÏDAN PRESTIGE',
      frequency: '1 passage / semaine',
      description: 'L\'entretien haut de gamme pour un extérieur impeccable',
      color: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-300',
      services: [
        'Tonte régulière',
        'Taille de haies et arbustes',
        'Débourrassage des zones encombrées',
        'Désherbage manuel',
        'Soufflage des feuilles',
        'Entretien général'
      ]
    }
  ];

  const allServices = [
    { icon: '✂️', title: 'Tonte', description: 'Tonte régulière selon la saison' },
    { icon: '🌳', title: 'Taille de haies et arbustes', description: 'Taille précise et soignée' },
    { icon: '🧹', title: 'Débourrassage', description: 'Débourrassage des zones encombrées' },
    { icon: '🌱', title: 'Désherbage', description: 'Désherbage manuel et mécanique' },
    { icon: '💨', title: 'Soufflage', description: 'Soufflage des feuilles et débris' },
    { icon: '🏡', title: 'Entretien général', description: 'Maintenance générale du jardin' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2d5016] text-white shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ChevronLeft size={24} />
              <span>Retour</span>
            </a>
          </Link>
          <h1 className="text-xl font-bold">Espaces Verts</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3f0] to-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-4">
              Entretien Espaces Verts
            </h2>
            <p className="text-xl text-[#67766d] max-w-2xl">
              Un jardin soigné, un extérieur qui respire. Nos packs KAÏDAN vous garantissent des espaces verts entretenus avec soin tout au long de l'année, pour un extérieur propre, harmonieux et agréable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-3xl font-bold text-[#2d5016] mb-12 text-center">
            Nos packs KAÏDAN
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${pack.color} border-2 ${pack.borderColor} rounded-lg p-8`}
              >
                <h4 className="text-2xl font-bold text-[#2d5016] mb-2">{pack.name}</h4>
                <p className="text-sm font-semibold text-[#67766d] mb-4">{pack.frequency}</p>
                <p className="text-[#67766d] mb-6">{pack.description}</p>
                
                <div className="space-y-3 mb-8">
                  {pack.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                      <span className="text-[#67766d]">{service}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:+33765274895">
                  <Button className="w-full bg-[#2d5016] hover:bg-[#1f3810] text-white">
                    <Phone size={16} className="mr-2" />
                    Nous contacter pour les tarifs
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-[#f5f3f0]">
        <div className="container">
          <h3 className="text-3xl font-bold text-[#2d5016] mb-12 text-center">
            Services inclus dans tous les packs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-[#d7cebe]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-2">{service.title}</h4>
                <p className="text-[#67766d]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h3 className="text-2xl font-bold text-[#2d5016] mb-8">
            Informations importantes
          </h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Interventions planifiées</h4>
              <p className="text-[#67766d]">
                Les interventions sont planifiées à l'avance selon les tournées et disponibilités de KAB'ALSA Services Fruhauf.
              </p>
            </div>

            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Forfait établi pour une année entière</h4>
              <p className="text-[#67766d]">
                Le forfait est établi pour une piscine entretenue dans l'état d'entretien normal. Tout travail supplémentaire sera facturé en sus.
              </p>
            </div>

            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Interventions exceptionnelles</h4>
              <p className="text-[#67766d]">
                Intervention exceptionnelle de dépannage, débarrassage, élagage, abattage ou dessouchage. 1 jour de préavis minimum.
              </p>
            </div>

            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Produits et consommables</h4>
              <p className="text-[#67766d]">
                Les produits utilisés respectent vos jardins et l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2d5016] text-white">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-6">
            Prêt à transformer votre jardin ?
          </h3>
          <p className="text-lg mb-8 text-[#c4b5a0] max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et recevoir un devis personnalisé.
          </p>
          <a href="tel:+33765274895">
            <Button className="bg-[#c4b5a0] text-[#2d5016] hover:bg-[#b39f8a]">
              <Phone size={20} className="mr-2" />
              Appeler maintenant
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 KAB'ALSA Services Fruhauf</p>
            <div className="flex gap-6">
              <a href="/mentions-legales" className="text-[#c4b5a0] hover:text-white transition">
                Mentions légales
              </a>
              <a href="/cgvi" className="text-[#c4b5a0] hover:text-white transition">
                CGVI
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
