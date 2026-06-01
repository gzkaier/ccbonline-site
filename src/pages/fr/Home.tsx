import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function FRHome() {
  useSEO({
    title: 'CCBONLINE INC. | Services de crédibilité et de connexion commerciale intermarchés',
    description: 'CCBONLINE INC. aide les entreprises à établir une présence de marché crédible, une communication localisée et des connexions commerciales entre le Canada, l\'Amérique du Nord et la Chine.',
    canonical: 'https://www.ccbonline.ca/fr',
    ogType: 'website',
    lang: 'fr',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Services de crédibilité et de connexion commerciale intermarchés'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="fr" />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE INC."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Entreprise enregistrée au Canada · Bilingue · Trilingue
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Crédibilité commerciale et connexions intermarchés entre le Canada, l'Amérique du Nord et la Chine
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. est une entreprise canadienne basée à Toronto qui aide les entreprises à établir une présence de marché crédible, une communication localisée et des connexions commerciales entre le Canada, l'Amérique du Nord et la Chine. Nos services incluent le diagnostic d'entrée sur le marché, l'audit de crédibilité de marque, l'optimisation de la confiance numérique, les matériaux commerciaux bilingues et les services de connexion intermarchés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/fr/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Nous contacter</Link>
              <Link to="/en/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Contact us in English</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Toronto · Ontario · Canada</span>
              <span>·</span>
              <span>Français · English · 中文</span>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Nos services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-6">
              Comment nous aidons les entreprises à se préparer et à se connecter
            </h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Diagnostic d\'entrée sur le marché nord-américain', desc: 'Évaluation initiale de l\'adéquation produit-marché, des lacunes réglementaires, de la préparation des documents en anglais et d\'un plan d\'action de 30 à 90 jours.' },
                { title: 'Audit de crédibilité de marque', desc: 'Diagnostic de la clarté de votre proposition de valeur, de la confiance de vos clients potentiels et de votre différenciation concurrentielle.' },
                { title: 'Optimisation de la confiance numérique', desc: 'Audit de votre site web : vos acheteurs peuvent-ils vous comprendre, vous faire confiance et trouver une raison de vous contacter ?' },
                { title: 'Matériaux commerciaux bilingues', desc: 'Contenu commercial en anglais et en chinois, adapté à la culture d\'affaires locale et aux attentes des acheteurs.' },
                { title: 'Contenu médiatique et visibilité', desc: 'Articles professionnels, observations sectorielles et contenu optimisé pour les moteurs de recherche et les systèmes d\'IA.' },
                { title: 'Salons, événements et connexions locales', desc: 'Préparation pré-salon, support sur site, gestion des leads post-salon et facilitation de partenariats.' },
                { title: 'Support d\'exécution 30/90 jours', desc: 'Accompagnement pratique avec des points hebdomadaires, gestion des tâches et coordination des fournisseurs.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10">
                  <span className="text-[#D4AF37] text-[13px] font-medium shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="text-white text-[16px] font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/55 text-[14px] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] mb-6">
                Pour des informations plus détaillées sur nos services, veuillez nous contacter en anglais ou en chinois. Notre équipe basée à Toronto est disponible pour discuter de vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/fr/contact" className="btn-primary text-[14px] px-6 py-3">Nous contacter</Link>
                <Link to="/en" className="btn-outline text-[14px] px-6 py-3" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>English version</Link>
                <Link to="/zh" className="btn-outline text-[14px] px-6 py-3" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>中文版</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[600px] text-center">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Contactez CCBONLINE INC.
            </h2>
            <p className="text-[15px] text-[#444] leading-[1.65] mb-6">
              Entreprise enregistrée au Canada, opérant depuis Toronto en Ontario.<br />
              Services disponibles en français, anglais et chinois.
            </p>
            <div className="space-y-2 text-[14px] text-[#444]">
              <p>info@ccbonline.ca</p>
              <p>+1 647 568 1128</p>
              <p>84 Kenhar Dr, North York, ON M9L 1N2, Canada</p>
              <p>www.ccbonline.ca</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </div>
  )
}
