import { Link } from 'wouter';
import { ChevronLeft, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PiscineSpa() {
  const seasons = [
    {
      name: 'ESTIVAGE',
      subtitle: 'Mise en service',
      description: 'Préparation de votre piscine pour l\'été',
      services: [
        'Ouverture de la tuyauterie ou bâche à bar',
        'Remplissage des bouchons, Gizmo et flotteurs',
        'Remise en place de la manomètre',
        'Remise en eau du système de filtration et de la pompe à chaleur',
        'Nettoyage complet du bassin',
        'Nettoyage des skimmers et pièces à sceller si nécessaire',
        'Changement de la chaussette du skimmer',
        'Vérification du bon fonctionnement du système de filtration',
        'Régulation de la chimie de l\'eau aux bassins',
        'Test à l\'analyseur 1 fois par mois',
        'Absorbant Water Lily offert à chaque passage',
        'Conseils personnalisés'
      ]
    },
    {
      name: 'ENTRETIEN COURANT',
      subtitle: 'Mai à septembre',
      description: 'Maintenance régulière tout l\'été',
      services: [
        '1 passage par semaine compris',
        'Nettoyage de la ligne d\'eau',
        'Nettoyage fond, parois, escalier et plage',
        'Passage de l\'épuisette de surface',
        'Passage de l\'aspirateur du fond',
        'Nettoyage des skimmers et pièces à sceller si nécessaire',
        'Changement de la chaussette du skimmer',
        'Vérification du bon fonctionnement du système de filtration',
        'Régulation de la chimie de l\'eau aux bassins',
        'Test à l\'analyseur 1 fois par mois',
        'Absorbant Water Lily offert à chaque passage',
        'Conseils personnalisés'
      ]
    },
    {
      name: 'HIVERNAGE',
      subtitle: 'Mise en repos',
      description: 'Préparation pour l\'hiver',
      services: [
        'Vidange de la piscine jusqu\'en dessous des refoulements',
        'Vidange des canalisations par soufflage ou aspiration',
        'Mise en place des flotteurs',
        'Mise en place des bouchons et du Gizmo d\'hivernage',
        'Mise en place de la bâche d\'hivernage',
        'Mise hors gel du manomètre'
      ]
    }
  ];

  const advantages = [
    { icon: '✓', title: 'Sérénité toute l\'année', description: 'Une piscine saine et protégée' },
    { icon: '👤', title: 'Un interlocuteur unique', description: 'Suivi personnalisé' },
    { icon: '💧', title: 'Eau propre et équilibrée', description: 'Qualité garantie' },
    { icon: '💰', title: 'Budget maîtrisé avec mensualisation', description: 'Tarifs transparents' },
    { icon: '🏊', title: 'Piscine saine et protégée', description: 'Entretien professionnel' }
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
          <h1 className="text-xl font-bold">Piscine & Spa</h1>
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
              Entretien Piscine & Spa
            </h2>
            <p className="text-xl text-[#67766d] max-w-2xl">
              Une eau claire, un esprit léger. Le Pack BAHÏA vous garantit une piscine propre, saine et parfaitement entretenue tout au long de la saison et en toute sérénité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pack BAHIA */}
      <section className="py-20">
        <div className="container">
          <h3 className="text-3xl font-bold text-[#2d5016] mb-4 text-center">
            Pack BAHÏA
          </h3>
          <p className="text-center text-[#67766d] mb-12 max-w-2xl mx-auto">
            De janvier à décembre, pour une tranquillité toute l'année.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-8"
              >
                <h4 className="text-2xl font-bold text-[#2d5016] mb-1">{season.name}</h4>
                <p className="text-sm font-semibold text-[#67766d] mb-2">{season.subtitle}</p>
                <p className="text-[#67766d] mb-6 italic">{season.description}</p>
                
                <div className="space-y-2 mb-8">
                  {season.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={18} className="text-[#2d5016] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#67766d]">{service}</span>
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

      {/* Advantages */}
      <section className="py-20 bg-[#f5f3f0]">
        <div className="container">
          <h3 className="text-3xl font-bold text-[#2d5016] mb-12 text-center">
            Les avantages du Pack BAHÏA
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-[#d7cebe] text-center"
              >
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h4 className="font-bold text-[#2d5016] mb-2">{adv.title}</h4>
                <p className="text-sm text-[#67766d]">{adv.description}</p>
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
              <h4 className="font-bold text-[#2d5016] mb-2">Produits de traitement</h4>
              <p className="text-[#67766d]">
                Les produits de traitement ne sont pas inclus et seront facturés en supplément selon la consommation.
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
                Remise en état d'eau verte, dépannage de filtration, recherche de fuite, remplacement de pièces détachées. 1 jour de préavis minimum.
              </p>
            </div>

            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Pièces détachées</h4>
              <p className="text-[#67766d]">
                Les pièces détachées, consommables et matériels nécessaires à la réparation sont facturés en supplément.
              </p>
            </div>

            <div className="border-l-4 border-[#2d5016] pl-6">
              <h4 className="font-bold text-[#2d5016] mb-2">Clients prioritaires</h4>
              <p className="text-[#67766d]">
                Les clients bénéficiant du Pack BAHÏA disposent d'une priorité d'intervention selon les disponibilités de l'entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2d5016] text-white">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-6">
            Profitez d'une piscine impeccable toute l'année
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
