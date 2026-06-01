import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function FRContact() {
  useSEO({
    title: 'Contact | CCBONLINE INC. | Services de crédibilité et connexion intermarchés',
    description: 'Contactez CCBONLINE INC. pour des services de crédibilité commerciale et de connexion intermarchés entre le Canada, l\'Amérique du Nord et la Chine.',
    canonical: 'https://www.ccbonline.ca/fr/contact',
    ogType: 'website',
    lang: 'fr',
  })
  useEffect(() => {
    document.title = 'Contact | CCBONLINE INC. | Services de crédibilité et connexion intermarchés'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="fr" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Contact</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Contactez CCBONLINE INC.
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              Entreprise enregistrée au Canada, basée à Toronto. Services de crédibilité commerciale et de connexion intermarchés disponibles en français, anglais et chinois.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[600px]">
            <div className="space-y-6 mb-10">
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <h3 className="font-semibold text-[16px] mb-2">Adresse</h3>
                <p className="text-[14px] text-[#444] leading-[1.7]">
                  CCBONLINE INC.<br />
                  84 Kenhar Dr<br />
                  North York, ON M9L 1N2<br />
                  Canada
                </p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <h3 className="font-semibold text-[16px] mb-2">Coordonnées</h3>
                <p className="text-[14px] text-[#444] leading-[1.7]">
                  Email : info@ccbonline.ca<br />
                  Téléphone : +1 647 568 1128<br />
                  Site web : www.ccbonline.ca
                </p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <h3 className="font-semibold text-[16px] mb-2">Langues de service</h3>
                <p className="text-[14px] text-[#444] leading-[1.7]">
                  Français · English · 中文
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#0B0E14] text-center">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] mb-6">
                Pour des informations détaillées sur nos services, nous vous invitons à consulter nos versions en anglais ou en chinois.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/en/contact" className="btn-primary text-[14px] px-6 py-3">English</Link>
                <Link to="/zh/contact" className="btn-outline text-[14px] px-6 py-3" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>中文</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="fr" />
    </div>
  )
}
