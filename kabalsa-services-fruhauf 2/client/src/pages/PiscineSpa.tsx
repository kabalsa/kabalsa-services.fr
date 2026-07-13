import { ChevronLeft, Check, Phone, FileText, AlertCircle, Droplets, Package, Euro, Clock, Wrench, Waves, Snowflake, Calendar, Leaf, Droplet, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PiscineSpa() {
  const packs = [
    {
      name: 'ESTIVAGE',
      frequency: 'Mise en service',
      description: 'Préparation de votre piscine pour l\'été',
      isPopular: false,
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      services: [
        'Retrait des équipements d\'hivernage',
        'Remise en place du manomètre',
        'Remise en eau et filtration',
        'Nettoyage complet du bassin',
        'Contrôle et équilibrage de l\'eau',
        'Conseils personnalisés'
      ]
    },
    {
      name: 'ENTRETIEN COURANT',
      frequency: 'Mai à septembre',
      description: 'Maintenance régulière tout l\'été',
      isPopular: true,
      color: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-400',
      services: [
        '1 passage par semaine compris',
        'Nettoyage complet du bassin',
        'Nettoyage des équipements',
        'Vérification du système de filtration',
        'Analyse de l\'eau (1 fois par mois)',
        'Conseils personnalisés'
      ]
    },
    {
      name: 'HIVERNAGE',
      frequency: 'Mise en repos',
      description: 'Préparation pour l\'hiver',
      isPopular: false,
      color: 'from-sky-50 to-sky-100',
      borderColor: 'border-sky-300',
      services: [
        'Vidange de la piscine',
        'Vidange des canalisations',
        'Mise en place des flotteurs',
        'Mise en place des bouchons',
        'Mise en place de la bâche',
        'Mise hors gel du manomètre'
      ]
    }
  ];

  const allServices = [
    { icon: Waves, title: 'Nettoyage', description: 'Nettoyage complet du bassin' },
    { icon: Droplet, title: 'Traitement', description: 'Contrôle et équilibrage de l\'eau' },
    { icon: Wrench, title: 'Maintenance', description: 'Vérification des équipements' },
    { icon: Droplets, title: 'Analyse', description: 'Analyse professionnelle de l\'eau' },
    { icon: Wind, title: 'Filtration', description: 'Entretien du système de filtration' },
    { icon: Clock, title: 'Suivi', description: 'Suivi régulier toute l\'année' }
  ];

  const advantages = [
    { icon: FileText, title: 'Un seul contrat pour toute l\'année' },
    { icon: AlertCircle, title: 'Aucun oubli d\'entretien' },
    { icon: Droplets, title: 'Eau claire et équilibrée en permanence' },
    { icon: Package, title: 'Produits de traitement inclus' },
    { icon: Euro, title: 'Budget maîtrisé grâce à la mensualisation' },
    { icon: Clock, title: 'Priorité d\'intervention en cas de besoin' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
            <span className="text-sm md:text-base">Retour</span>
          </a>
          <h1 className="text-lg md:text-xl font-bold">Piscine & Spa</h1>
          <div className="w-20 md:w-24"></div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Entretien Piscine & Spa
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Confiez l'entretien de votre piscine à une entreprise locale spécialisée et profitez d'une eau cristalline toute l'année. Le Pack BAHÏA vous offre un suivi régulier adapté à votre bassin, de la mise en service à l'hivernage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packs */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Nos packs BAHÏA
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {packs.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                {pack.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus choisi
                    </div>
                  </div>
                )}
                <div className={`bg-gradient-to-br ${pack.color} border-2 ${pack.borderColor} rounded-lg p-10 h-full`}>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">{pack.name}</h4>
                  <p className="text-sm font-semibold text-slate-600 mb-4">{pack.frequency}</p>
                  <p className="text-slate-700 mb-6">{pack.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pack.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-blue-900 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  <a href="tel:+33765274895">
                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      <Phone size={16} className="mr-2" />
                      Obtenir un devis personnalisé
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Tous les packs comprennent
          </h3>
          
          <div className="grid md:grid-cols-6 gap-6">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent size={32} className="text-blue-900" />
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Les avantages du Pack BAHÏA
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-blue-100"
                >
                  <div className="flex justify-center mb-6">
                    <IconComponent size={48} className="text-blue-900" />
                  </div>
                  <h4 className="font-bold text-blue-900 text-base">{item.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-blue-50">
        <div className="container max-w-4xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">
            Informations importantes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-900 pl-6 bg-white p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Produits de traitement</h4>
              <p className="text-slate-700 text-sm">
                Les produits de traitement sont inclus dans le Pack BAHÏA pour un entretien complet et sans surprise.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6 bg-white p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Forfait établi pour une année entière</h4>
              <p className="text-slate-700 text-sm">
                Les forfaits sont calculés sur la base d'une piscine entretenue dans l'état d'entretien normal. Toute intervention supplémentaire fera l'objet d'un devis complémentaire.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6 bg-white p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Interventions exceptionnelles</h4>
              <p className="text-slate-700 text-sm">
                Les prestations exceptionnelles (réparation, remplacement d'équipements) font l'objet d'un devis complémentaire.
              </p>
            </div>

            <div className="border-l-4 border-blue-900 pl-6 bg-white p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">Pièces détachées</h4>
              <p className="text-slate-700 text-sm">
                Les pièces détachées et matériels nécessaires à la réparation sont facturés en supplément.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-6">
            Prêt à profiter d'une piscine impeccable ?
          </h3>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et découvrez comment le Pack BAHÏA peut transformer votre expérience piscine.
          </p>
          <a href="tel:+33765274895">
            <Button className="bg-cyan-400 text-blue-900 hover:bg-cyan-300">
              <Phone size={20} className="mr-2" />
              Appeler maintenant
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
