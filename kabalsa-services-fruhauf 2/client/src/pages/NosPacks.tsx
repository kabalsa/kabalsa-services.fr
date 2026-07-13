import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function NosPacks() {
  const packs = [
    {
      name: "KAÏDAN",
      subtitle: "ENTRETIEN ESPACES VERTS",
      description: "Un jardin soigné, un extérieur qui respire",
      fullDescription: "Le Pack KAÏDAN vous garantit des espaces verts entretenus avec soin tout au long de l'année, pour un extérieur propre, harmonieux et agréable en toute saison.",
      color: "bg-[#2d5016]",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-kaidan-jardin-gKKW5nkudSrBMTZDvxg8GL.webp",
      link: "/jardin",
      levels: [
        { name: "KAÏDAN ESSENTIEL", frequency: "1 PASSAGE / MOIS", desc: "Idéal pour les petits jardins et un entretien régulier." },
        { name: "KAÏDAN CONFORT", frequency: "2 PASSAGES / MOIS", desc: "Le bon équilibre pour un jardin harmonieux et bien entretenu." },
        { name: "KAÏDAN PRESTIGE", frequency: "1 PASSAGE / SEMAINE", desc: "L'entretien haut de gamme pour un extérieur toujours parfait." }
      ]
    },
    {
      name: "BAHÏA",
      subtitle: "ENTRETIEN PISCINE",
      description: "Une eau claire, un esprit léger",
      fullDescription: "Le Pack BAHÏA vous garantit une piscine propre, saine et parfaitement entretenue tout au long de la saison et en toute sérénité.",
      color: "bg-[#1e5a96]",
      image: "/manus-storage/K7lYeLmwVgSR_5179b158.jpg",
      link: "/piscine",
      levels: [
        { name: "ESTIVAGE", desc: "(MISE EN SERVICE)" },
        { name: "ENTRETIEN COURANT", desc: "(MAI À SEPTEMBRE)" },
        { name: "HIVERNAGE", desc: "" }
      ]
    },
    {
      name: "TINA",
      subtitle: "PISCINE + JARDIN",
      description: "La sérénité totale de vos extérieurs",
      fullDescription: "Le Pack TINA réunit l'expertise des offres BAHÏA et KAÏDAN afin de garantir un extérieur impéccable tout au long de l'année.",
      color: "bg-[#c4a574]",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574569307/BhXdDjxYcYVuZNHd2akwoe/pack-tina-combo-YZMU6hE6FHgz6FqAvECyC8.webp",
      link: "/tina",
      tagline: "Une seule entreprise, un seul interlocuteur, une seule organisation."
    }
  ];

  const comparison = [
    { feature: "Prestations piscine", bahia: true, kaidan: false, tina: true },
    { feature: "Prestations jardin", bahia: false, kaidan: true, tina: true },
    { feature: "Un seul interlocuteur", bahia: true, kaidan: true, tina: true },
    { feature: "Produits inclus", bahia: true, kaidan: true, tina: true },
    { feature: "Forfait annuel", bahia: true, kaidan: true, tina: true },
    { feature: "Mensualisation possible", bahia: true, kaidan: true, tina: true },
    { feature: "Priorité d'intervention", bahia: false, kaidan: false, tina: true },
    { feature: "Suivi personnalisé", bahia: true, kaidan: true, tina: true }
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
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors font-semibold">Nos Packs</a>
            </Link>
            <Link href="/a-propos">
              <a className="text-[#2d5016] hover:text-[#1f3810] transition-colors">À propos</a>
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
              Nos Packs d'Entretien
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Des formules complètes, adaptées à vos besoins, pour des extérieurs impeccables toute l'année
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packs Presentation */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="space-y-16">
            {packs.map((pack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <img 
                    src={pack.image}
                    alt={pack.name}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <p className={`text-sm font-semibold mb-2 ${pack.name === "KAÏDAN" ? "text-[#2d5016]" : pack.name === "BAHÏA" ? "text-[#1e5a96]" : "text-[#c4a574]"}`}>
                    PACK
                  </p>
                  <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${pack.name === "KAÏDAN" ? "text-[#2d5016]" : pack.name === "BAHÏA" ? "text-[#1e5a96]" : "text-[#c4a574]"}`}>
                    {pack.name}
                  </h2>
                  
                  <div className={`${pack.color} text-white px-6 py-2 rounded-full inline-block mb-6 font-semibold`}>
                    {pack.subtitle}
                  </div>

                  <p className={`text-lg italic font-semibold mb-4 ${pack.name === "KAÏDAN" ? "text-[#2d5016]" : pack.name === "BAHÏA" ? "text-[#1e5a96]" : "text-[#c4a574]"}`}>
                    {pack.description}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {pack.fullDescription}
                  </p>

                  {pack.tagline && (
                    <p className="text-[#c4a574] font-semibold mb-6">
                      {pack.tagline}
                    </p>
                  )}

                  {pack.levels && (
                    <div className="mb-6">
                      <h3 className={`font-bold mb-4 ${pack.name === "KAÏDAN" ? "text-[#2d5016]" : pack.name === "BAHÏA" ? "text-[#1e5a96]" : "text-[#c4a574]"}`}>
                        {pack.name === "KAÏDAN" ? "3 NIVEAUX DE PRESTATIONS" : "LES PRESTATIONS INCLUSES"}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {pack.levels.map((level: any, lidx: number) => (
                          <div key={lidx} className={`p-3 rounded border-l-4 ${pack.name === "KAÏDAN" ? "border-[#2d5016] bg-[#f0f4ed]" : pack.name === "BAHÏA" ? "border-[#1e5a96] bg-[#f0f5fa]" : "border-[#c4a574] bg-[#faf8f4]"}`}>
                            <p className="font-bold text-sm">{level.name}</p>
                            <p className="text-xs text-gray-600">{(level as any).frequency || level.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={pack.link}>
                    <a className={`inline-block ${pack.color} text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`}>
                      En savoir plus
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 md:py-32 bg-[#f5f3f0]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d5016] mb-16 text-center">Comparatif des packs</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#2d5016]">
                  <th className="text-left py-4 px-4 font-bold text-[#2d5016]">Prestations</th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-[#2d5016] rounded-t-lg">PACK KAÏDAN</th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-[#1e5a96] rounded-t-lg">PACK BAHÏA</th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-[#c4a574] rounded-t-lg">PACK TINA</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={`border-b border-[#d7cebe] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fafaf8]'}`}>
                    <td className="py-4 px-4 font-semibold text-[#2d5016]">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.kaidan ? <CheckCircle className="w-6 h-6 text-[#2d5016] mx-auto" /> : <span className="text-[#ccc]">—</span>}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.bahia ? <CheckCircle className="w-6 h-6 text-[#1e5a96] mx-auto" /> : <span className="text-[#ccc]">—</span>}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.tina ? <CheckCircle className="w-6 h-6 text-[#c4a574] mx-auto" /> : <span className="text-[#ccc]">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5016] text-white py-12">
        <div className="container text-center">
          <p className="mb-4">© 2026 KAB'ALSA Services Fruhauf. Tous droits réservés.</p>
          <p className="text-sm opacity-80">Entretien de jardins et piscines en Alsace</p>
        </div>
      </footer>
    </div>
  );
}
