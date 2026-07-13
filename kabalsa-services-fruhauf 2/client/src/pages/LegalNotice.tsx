import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function LegalNotice() {
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
          <h1 className="font-display text-2xl text-[#173124]">Mentions légales</h1>
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
          {/* Éditeur du site */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Éditeur du site</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <strong>Raison sociale :</strong> KAB'ALSA Services Fruhauf
              </p>
              <p>
                <strong>Forme juridique :</strong> Micro-entreprise
              </p>
              <p>
                <strong>SIRET :</strong> 10336606800015
              </p>
              <p>
                <strong>Adresse :</strong> Strasbourg Sud, 67118 GEISPOLSHEIM, France
              </p>
              <p>
                <strong>Téléphone :</strong> 07 65 27 48 95
              </p>
              <p>
                <strong>Email :</strong> contact@kabalsa-services.fr
              </p>
            </div>
          </section>

          {/* Responsable de publication */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Responsable de publication</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <strong>Nom :</strong> M. FRUHAUF Guillaume
              </p>
              <p>
                <strong>Fonction :</strong> Gérant
              </p>
              <p>
                <strong>Email :</strong> contact@kabalsa-services.fr
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Hébergement</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <strong>Hébergeur :</strong> Manus
              </p>
              <p>
                Ce site est hébergé sur la plateforme Manus, qui fournit les services d'hébergement et de déploiement.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Propriété intellectuelle</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos, etc.) est la propriété exclusive de KAB'ALSA Services Fruhauf ou de ses partenaires, sauf indication contraire.
              </p>
              <p>
                Toute reproduction, distribution, transmission, adaptation ou traduction du contenu sans autorisation préalable écrite est interdite.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Responsabilité</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                KAB'ALSA Services Fruhauf s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité du contenu.
              </p>
              <p>
                Nous ne serons pas responsables des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Données personnelles</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                Les données personnelles collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et vous proposer nos services.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, veuillez nous contacter à : contact@kabalsa-services.fr
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Cookies</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                Ce site utilise des cookies pour améliorer votre expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti avant qu'un cookie soit enregistré.
              </p>
            </div>
          </section>

          {/* Liens externes */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Liens externes</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                Ce site peut contenir des liens vers des sites externes. KAB'ALSA Services Fruhauf n'est pas responsable du contenu de ces sites externes et décline toute responsabilité quant à leur utilisation.
              </p>
            </div>
          </section>

          {/* Conditions d'utilisation */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Conditions d'utilisation</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                L'accès à ce site est gratuit et réservé à un usage personnel. Vous vous engagez à ne pas utiliser ce site de manière abusive ou illégale.
              </p>
              <p>
                KAB'ALSA Services Fruhauf se réserve le droit de modifier ou de supprimer le contenu de ce site à tout moment sans préavis.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-xl text-[#173124] mb-4">Contact</h2>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                Pour toute question concernant ces mentions légales, veuillez nous contacter :
              </p>
              <p>
                <strong>Email :</strong> contact@kabalsa-services.fr<br />
                <strong>Téléphone :</strong> 07 65 27 48 95
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="border-t border-[#d7cebe] pt-8 text-xs text-[#a49478]">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
