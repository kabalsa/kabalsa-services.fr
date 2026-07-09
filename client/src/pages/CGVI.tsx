import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

export default function CGVI() {
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
          <h1 className="text-xl font-bold">KAB'ALSA Services</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Conditions Générales de Vente et d'Intervention
          </h1>

          <div className="bg-card text-card-foreground p-8 rounded-lg mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Les présentes Conditions Générales de Vente et d'intervention (CGVI) s'appliquent à l'ensemble des prestations proposées par KAB'ALSA Services Fruhauf, notamment dans le cadre des contrats BAHÏA, KAÏDAN, et TINA ainsi que pour toute intervention ponctuelle.
            </p>
            <p className="text-lg leading-relaxed">
              Elles définissent les modalités d'exécution des prestations, les conditions de paiement, les responsabilités des partis ainsi que les conditions applicables aux interventions d'urgences et hors forfait.
            </p>
          </div>

          {/* Article 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 1 – Objet</h2>
            <p className="leading-relaxed mb-4">
              Les présentes Conditions Générales de Vente et d'Intervention (CGVI) régissent l'ensemble des prestations réalisées par KAB'ALSA Services Fruhauf dans les domaines de l'entretien de piscines, spas, espaces verts et services associés.
            </p>
            <p className="leading-relaxed">
              Toute signature d'un devis, contrat, bon de commande ou fiche de souscription implique l'acceptation pleine et entière des présentes conditions.
            </p>
          </section>

          {/* Article 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 2 – Acceptation du Devis</h2>
            <p className="leading-relaxed mb-4">
              Le devis est valable 30 jours à compter de sa date d'émission.
            </p>
            <p className="leading-relaxed mb-4">
              La commande est considérée comme ferme et définitive après :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Signature du devis accompagnée de la mention « Bon pour accord »</li>
              <li>Versement d'un acompte correspondant à 30 % du montant total TTC</li>
            </ul>
            <p className="leading-relaxed">
              La signature du devis et le versement de l'acompte valent acceptation définitive des présentes CGVI.
            </p>
          </section>

          {/* Article 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 3 – Description des Prestations</h2>
            <p className="leading-relaxed mb-4">
              Les prestations réalisées correspondent exclusivement aux services décrits dans le devis ou le contrat signé.
            </p>
            <p className="leading-relaxed mb-4">
              Les forfaits BAHÏA, KAÏDAN et TINA comprennent uniquement les prestations expressément mentionnées.
            </p>
            <p className="leading-relaxed">
              Toute prestation supplémentaire fera l'objet d'un devis ou d'une facturation complémentaire.
            </p>
          </section>

          {/* Article 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 4 – Planification des Interventions</h2>
            <p className="leading-relaxed mb-4">
              Les interventions sont organisées selon les tournées et disponibilités de KAB'ALSA Services Fruhauf.
            </p>
            <p className="leading-relaxed mb-4">
              Les dates communiquées sont données à titre indicatif.
            </p>
            <p className="leading-relaxed mb-4">
              L'entreprise se réserve le droit de modifier les dates d'intervention en cas :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>d'intempéries</li>
              <li>de gel</li>
              <li>d'orage</li>
              <li>de canicule</li>
              <li>de panne matérielle</li>
              <li>de contraintes techniques</li>
              <li>de situation exceptionnelle</li>
            </ul>
            <p className="leading-relaxed">
              Aucune indemnité ne pourra être réclamée à ce titre.
            </p>
          </section>

          {/* Article 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 5 – Accès aux Installations</h2>
            <p className="leading-relaxed mb-4">
              Le client s'engage à permettre l'accès aux installations nécessaires à la réalisation des prestations.
            </p>
            <p className="leading-relaxed mb-4">
              En cas d'absence d'accès lors du déplacement du technicien, un déplacement pourra être facturé.
            </p>
            <p className="leading-relaxed mb-4">
              Le client reste responsable de la présence éventuelle :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>d'animaux</li>
              <li>d'obstacles</li>
              <li>de matériels</li>
              <li>de réseaux non signalés</li>
            </ul>
          </section>

          {/* Article 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 6 – Produits et Consommables</h2>
            <p className="leading-relaxed mb-4">
              Sauf mention contraire sur le devis :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Les produits de traitement piscine ne sont pas inclus dans les forfaits</li>
              <li>Les pièces détachées ne sont pas incluses</li>
              <li>Les végétaux, fournitures et matériaux sont facturés séparément</li>
              <li>Les consommables spécifiques font l'objet d'une facturation complémentaire</li>
            </ul>
          </section>

          {/* Article 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 7 – Interventions Hors Forfait et Urgences</h2>
            <p className="leading-relaxed mb-4">
              Les prestations non prévues au contrat sont considérées comme hors forfait.
            </p>
            <p className="leading-relaxed mb-4">
              Tarifs applicables :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Déplacement supplémentaire hors contrat : 35 € TTC</li>
              <li>Main-d'œuvre dépannage : 60 € TTC / heure</li>
              <li>Intervention urgente sous 48 heures : 55 € TTC</li>
              <li>Intervention urgente sous 24 heures : 85 € TTC</li>
              <li>Déplacement le samedi : 65 € TTC</li>
              <li>Déplacement le dimanche ou jour férié : 95 € TTC</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Toute heure commencée est due.
            </p>
            <p className="leading-relaxed mb-4">
              Les pièces détachées, consommables, fournitures et matériels nécessaires à la réparation ou à l'intervention sont facturés en supplément.
            </p>
            <p className="leading-relaxed mb-4">
              Les interventions réalisées les week-ends, jours fériés ou en dehors des horaires habituels de l'entreprise peuvent faire l'objet d'une majoration complémentaire selon la nature, la durée et la complexité des travaux.
            </p>
            <p className="leading-relaxed mb-4">
              Les clients bénéficiant d'un contrat BAHÏA, KAÏDAN ou TINA disposent d'une priorité d'intervention selon les disponibilités de l'entreprise.
            </p>
            <p className="leading-relaxed">
              Toute intervention hors forfait fera l'objet d'une information préalable du client et, lorsque cela est possible, d'un devis complémentaire.
            </p>
          </section>

          {/* Article 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 8 – Prestations Exceptionnelles</h2>
            <p className="leading-relaxed mb-4">
              Sont notamment considérées comme prestations exceptionnelles :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Remise en état d'eau verte</li>
              <li>Nettoyage après sinistre ou intempérie</li>
              <li>Dépannage de filtration</li>
              <li>Dépannage de pompe</li>
              <li>Recherche et réparation de fuite</li>
              <li>Réparation ou remplacement de matériel</li>
              <li>Remplacement de pompe, filtre ou accessoires</li>
              <li>Remise en état d'un jardin fortement dégradé</li>
              <li>Évacuation exceptionnelle de déchets</li>
              <li>Élagage</li>
              <li>Abattage</li>
              <li>Dessouchage</li>
              <li>Travaux non prévus au contrat</li>
            </ul>
            <p className="leading-relaxed">
              Ces prestations feront l'objet d'un devis complémentaire.
            </p>
          </section>

          {/* Article 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 9 – Contrats Annuels</h2>
            <p className="leading-relaxed mb-4">
              Les contrats BAHÏA, KAÏDAN et TINA sont conclus pour une durée d'un an.
            </p>
            <p className="leading-relaxed mb-4">
              Un acompte de 30 % du montant TTC est exigé à la signature du contrat.
            </p>
            <p className="leading-relaxed mb-4">
              Le solde pourra être réglé :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>comptant</li>
              <li>par mensualisation</li>
              <li>selon l'échéancier prévu au contrat</li>
            </ul>
            <p className="leading-relaxed">
              Toute mensualité engagée reste due pour les prestations déjà réalisées.
            </p>
          </section>

          {/* Article 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 10 – Conditions de Paiement</h2>
            <p className="leading-relaxed mb-4">
              Pour les prestations ponctuelles, travaux d'aménagement, remises en état, élagages, créations paysagères ou toute prestation faisant l'objet d'un devis spécifique, un acompte de 30 % du montant total TTC est exigible à la signature du devis.
            </p>
            <p className="leading-relaxed mb-4">
              Aucune intervention ne pourra être programmée avant réception de cet acompte, sauf accord particulier de KAB'ALSA Services Fruhauf.
            </p>
            <p className="leading-relaxed mb-4">
              Le solde est payable à l'achèvement des travaux ou selon les modalités indiquées sur le devis.
            </p>
            <p className="leading-relaxed mb-4">
              Pour les contrats annuels BAHÏA, KAÏDAN et TINA, les modalités de règlement sont définies au contrat et peuvent être effectuées :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>comptant</li>
              <li>par mensualisation</li>
              <li>selon l'échéancier convenu entre les parties</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Moyens de paiement acceptés :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Virement bancaire</li>
              <li>Chèque</li>
              <li>Espèces dans les limites légales</li>
            </ul>
            <p className="leading-relaxed">
              En cas d'annulation d'une prestation ponctuelle après signature du devis, l'acompte versé restera acquis à KAB'ALSA Services Fruhauf au titre des frais administratifs, de réservation et de planification engagés.
            </p>
          </section>

          {/* Article 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 11 – Retard de Paiement</h2>
            <p className="leading-relaxed">
              Tout retard de paiement pourra entraîner :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>la suspension immédiate des prestations</li>
              <li>l'annulation des interventions programmées</li>
              <li>l'exigibilité immédiate des sommes restantes dues</li>
            </ul>
          </section>

          {/* Article 12 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 12 – Responsabilité</h2>
            <p className="leading-relaxed mb-4">
              KAB'ALSA Services Fruhauf est soumis à une obligation de moyens.
            </p>
            <p className="leading-relaxed mb-4">
              L'entreprise ne saurait être tenue responsable :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>des intempéries</li>
              <li>des catastrophes naturelles</li>
              <li>d'un défaut d'entretien antérieur</li>
              <li>d'une utilisation inappropriée des installations</li>
              <li>de pannes survenant sur des équipements vétustes</li>
              <li>d'une dégradation de l'eau entre deux passages due à une fréquentation importante ou à des conditions climatiques exceptionnelles</li>
            </ul>
          </section>

          {/* Article 13 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 13 – Annulation et Résiliation</h2>
            <p className="leading-relaxed mb-4">
              Toute annulation d'intervention moins de 24 heures avant la date prévue pourra donner lieu à la facturation du déplacement.
            </p>
            <p className="leading-relaxed">
              En cas de résiliation anticipée du contrat par le client, les prestations déjà réalisées demeurent dues.
            </p>
          </section>

          {/* Article 14 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 14 – Données Personnelles</h2>
            <p className="leading-relaxed">
              Les informations recueillies sont utilisées exclusivement pour la gestion administrative et commerciale des prestations.
            </p>
            <p className="leading-relaxed">
              Elles ne sont ni vendues ni transmises à des tiers sauf obligation légale.
            </p>
          </section>

          {/* Article 15 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Article 15 – Litiges</h2>
            <p className="leading-relaxed mb-4">
              Les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
            </p>
            <p className="leading-relaxed">
              À défaut d'accord amiable, le litige sera porté devant les juridictions compétentes du ressort du siège social de l'entreprise.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
