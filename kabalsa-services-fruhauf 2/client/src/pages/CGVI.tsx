import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function CGVI() {
  const articles = [
    {
      title: "ARTICLE 1 – OBJET",
      content: "Les présentes CGVI définissent les droits et obligations des parties concernant l'exécution des prestations, les modalités de paiement, les responsabilités de chacun ainsi que les conditions applicables aux interventions programmées, urgentes ou exceptionnelles."
    },
    {
      title: "ARTICLE 2 – ACCEPTATION DU DEVIS",
      content: "Les devis sont valables trente (30) jours à compter de leur date d'émission.\nLa commande devient ferme et définitive après :\n• la signature du devis avec la mention « Bon pour accord » ;\n• le versement d'un acompte de 30 % du montant TTC, sauf mention contraire.\nLa signature vaut acceptation des présentes CGVI."
    },
    {
      title: "ARTICLE 3 – DESCRIPTION DES PRESTATIONS",
      content: "Les prestations réalisées correspondent exclusivement aux travaux décrits dans le devis, le contrat ou la fiche de souscription.\nLes forfaits BAHÏA, KAÏDAN et TINA comprennent uniquement les prestations expressément indiquées.\nToute prestation supplémentaire fera l'objet d'une facturation complémentaire après accord du client."
    },
    {
      title: "ARTICLE 4 – PLANIFICATION DES INTERVENTIONS",
      content: "Les interventions sont organisées selon les tournées de KAB'ALSA Services Fruhauf.\nLes dates sont communiquées à titre indicatif.\nL'entreprise pourra modifier les dates d'intervention notamment en cas de :\n• pluie importante\n• orage\n• gel\n• neige\n• canicule\n• vent violent\n• panne de matériel\n• problème technique\n• absence d'approvisionnement\n• cas de force majeure.\nCes reports n'ouvrent droit à aucune indemnisation."
    },
    {
      title: "ARTICLE 5 – ACCÈS AUX INSTALLATIONS",
      content: "Le client s'engage à garantir un accès libre et sécurisé aux installations.\nEn cas d'impossibilité d'accès lors du déplacement du technicien, un déplacement pourra être facturé.\nLe client demeure responsable de la présence éventuelle :\n• d'animaux\n• d'obstacles\n• de véhicules\n• de réseaux enterrés non signalés\n• de tout élément susceptible de gêner l'intervention."
    },
    {
      title: "ARTICLE 6 – PRODUITS, FOURNITURES ET CONSOMMABLES",
      content: "Sauf mention contraire figurant au devis :\n• les pièces détachées\n• les fournitures\n• les végétaux\n• les accessoires\n• les consommables spécifiques\nsont facturés en supplément.\n\nCas particulier du contrat BAHÏA\nLe contrat BAHÏA comprend les produits nécessaires :\n• à l'ouverture de la piscine\n• à l'hivernage\n• à l'entretien courant durant la saison.\nCette prise en charge est limitée à une utilisation normale du bassin.\nRestent exclus :\n• les remises en état d'eau verte ;\n• les traitements de choc exceptionnels ;\n• les surconsommations liées à une mauvaise utilisation ;\n• les traitements après intempéries, pollution importante ou panne technique.\nCes prestations feront l'objet d'une facturation complémentaire."
    },
    {
      title: "ARTICLE 7 – INTERVENTIONS HORS FORFAIT ET URGENCES",
      content: "Toute prestation non prévue au contrat est considérée comme hors forfait.\nTarifs applicables :\n• Déplacement supplémentaire : 35 € TTC\n• Main-d'œuvre dépannage : 60 € TTC / heure\n• Intervention sous 48 heures : 55 € TTC\n• Intervention sous 24 heures : 85 € TTC\n• Intervention le samedi : 65 € TTC\n• Intervention le dimanche ou jour férié : 95 € TTC\nToute heure commencée est due.\nLes pièces, fournitures, consommables et matériels restent facturés en supplément.\nLes interventions réalisées en dehors des horaires habituels peuvent faire l'objet d'une majoration complémentaire.\nLes clients titulaires d'un contrat BAHÏA, KAÏDAN ou TINA bénéficient d'une priorité d'intervention selon les disponibilités de l'entreprise."
    },
    {
      title: "ARTICLE 8 – PRESTATIONS EXCEPTIONNELLES",
      content: "Sont notamment considérées comme prestations exceptionnelles :\n• remise en état d'eau verte ;\n• nettoyage après intempéries ;\n• nettoyage après sinistre ;\n• dépannage de filtration ;\n• remplacement de pompe ;\n• remplacement de filtre ;\n• recherche de fuite ;\n• remplacement d'équipements ;\n• remise en état d'un jardin fortement dégradé ;\n• évacuation exceptionnelle de déchets ;\n• élagage ;\n• abattage ;\n• dessouchage ;\n• tous travaux non prévus au contrat.\nCes prestations feront systématiquement l'objet d'un devis complémentaire."
    },
    {
      title: "ARTICLE 9 – CONTRATS ANNUELS",
      content: "Les contrats BAHÏA, KAÏDAN et TINA sont conclus pour une durée d'un an.\nLe règlement peut être effectué :\n• comptant ;\n• par mensualisation ;\n• selon un échéancier.\nLa mensualisation constitue uniquement une facilité de paiement et ne modifie pas la durée d'engagement du contrat.\nLes prestations hors contrat sont facturées en supplément.\nLes clients titulaires d'un contrat annuel bénéficient d'un suivi personnalisé ainsi que d'une priorité d'intervention.\nLe contrat pourra être renouvelé par accord des parties.\nEn cas de résiliation anticipée, les prestations déjà réalisées demeurent dues."
    },
    {
      title: "ARTICLE 10 – CONDITIONS DE PAIEMENT",
      content: "Pour toute prestation ponctuelle, un acompte de 30 % est demandé à la signature du devis.\nAucune intervention ne sera programmée avant son encaissement, sauf accord particulier.\nLe solde est payable à réception de facture.\nModes de paiement acceptés :\n• virement bancaire ;\n• chèque ;\n• espèces dans les limites légales.\nEn cas d'annulation après signature du devis, l'acompte demeure acquis à KAB'ALSA Services Fruhauf au titre des frais engagés."
    },
    {
      title: "ARTICLE 11 – RETARD DE PAIEMENT",
      content: "Tout retard pourra entraîner :\n• suspension immédiate des prestations ;\n• report ou annulation des interventions ;\n• exigibilité immédiate des sommes restant dues.\nDes pénalités de retard pourront être appliquées conformément aux dispositions légales en vigueur."
    },
    {
      title: "ARTICLE 12 – RESPONSABILITÉ",
      content: "KAB'ALSA Services Fruhauf est tenu à une obligation de moyens.\nL'entreprise ne saurait être tenue responsable :\n• des intempéries\n• des catastrophes naturelles\n• d'un mauvais entretien antérieur\n• d'une utilisation non conforme des installations\n• de la vétusté des équipements\n• d'une panne de filtration\n• d'une panne de pompe\n• d'une panne d'électrolyseur\n• d'un régulateur pH défectueux\n• d'une dégradation de la qualité de l'eau entre deux passages liée à une forte fréquentation ou à des conditions climatiques exceptionnelles."
    },
    {
      title: "ARTICLE 13 – ANNULATION ET RÉSILIATION",
      content: "Toute annulation moins de 24 heures avant une intervention pourra entraîner la facturation du déplacement.\nEn cas de résiliation anticipée du contrat, les prestations déjà réalisées restent dues."
    },
    {
      title: "ARTICLE 14 – FORCE MAJEURE",
      content: "Aucune des parties ne pourra être tenue responsable de l'inexécution de ses obligations en cas de force majeure au sens de l'article 1218 du Code civil."
    },
    {
      title: "ARTICLE 15 – RÉSERVE DE PROPRIÉTÉ",
      content: "Les matériels, équipements et fournitures vendus demeurent la propriété de KAB'ALSA Services Fruhauf jusqu'au paiement intégral du prix."
    },
    {
      title: "ARTICLE 16 – GARANTIES",
      content: "Les pièces remplacées bénéficient exclusivement de la garantie accordée par leur fabricant.\nLa garantie ne couvre pas les dommages résultant d'une mauvaise utilisation, d'un défaut d'entretien ou d'une intervention réalisée par un tiers."
    },
    {
      title: "ARTICLE 17 – DROIT À L'IMAGE",
      content: "Sauf opposition écrite du client, KAB'ALSA Services Fruhauf est autorisée à réaliser des photographies avant, pendant et après les interventions à des fins techniques ou de communication.\nAucune donnée permettant d'identifier le propriétaire ou l'adresse ne sera divulguée sans son accord."
    },
    {
      title: "ARTICLE 18 – DONNÉES PERSONNELLES",
      content: "Les données recueillies sont utilisées uniquement pour la gestion administrative, comptable et commerciale des prestations.\nElles ne sont jamais cédées à des tiers, sauf obligation légale."
    },
    {
      title: "ARTICLE 19 – LITIGES",
      content: "Les parties s'engagent à rechercher une solution amiable avant toute procédure judiciaire.\nÀ défaut d'accord, tout litige sera porté devant les juridictions compétentes du ressort du siège social de KAB'ALSA Services Fruhauf."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f3ea] text-[#445248]">
      {/* Header */}
      <header className="border-b border-[#d7cebe] bg-white py-6">
        <div className="container flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-2 text-[#173124] hover:text-[#11271d] transition">
              <ChevronLeft className="h-5 w-5" />
              Retour
            </a>
          </Link>
          <h1 className="font-display text-2xl text-[#173124]">Conditions Générales de Vente et d'Intervention</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-8"
        >
          {/* Intro */}
          <section className="bg-white p-6 rounded-lg border border-[#d7cebe]">
            <h2 className="font-display text-xl text-[#2d5016] mb-4">KAB'ALSA Services Fruhauf</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Les présentes Conditions Générales de Vente et d'Intervention (CGVI) s'appliquent à l'ensemble des prestations réalisées par KAB'ALSA Services Fruhauf dans les domaines de l'entretien de piscines, spas, espaces verts, travaux paysagers et services associés.
              </p>
              <p>
                Elles s'appliquent notamment aux contrats BAHÏA, KAÏDAN et TINA ainsi qu'à toute intervention ponctuelle.
              </p>
              <p>
                Toute signature d'un devis, contrat, bon de commande ou fiche de souscription vaut acceptation pleine et entière des présentes CGVI.
              </p>
            </div>
          </section>

          {/* Articles */}
          {articles.map((article, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-[#d7cebe]"
            >
              <h3 className="font-display text-lg text-[#2d5016] mb-4 font-bold">{article.title}</h3>
              <div className="text-sm leading-relaxed space-y-2 whitespace-pre-line">
                {article.content}
              </div>
            </motion.section>
          ))}

          {/* Date de mise à jour */}
          <div className="border-t border-[#d7cebe] pt-8 text-xs text-[#a49478]">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
