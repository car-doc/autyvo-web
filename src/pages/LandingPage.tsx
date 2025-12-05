import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import {
  Download,
  Shield,
  FileText,
  Database,
  FileCheck,
  Sparkles,
  TrendingUp,
  Scan,
  ArrowRightLeft,
  ArrowRight,
  Star,
  Sparkle,
} from 'lucide-react';

import heroImage from '@/assets/images/illustrations/transaction.jpeg';
import stickyImage from '@/assets/images/app/dashboard-screen.jpeg';
import zeroPapierImg from '@/assets/images/app/zero_papier.png';
import scanneImg from '@/assets/images/app/Scanne.png';
import entretienPlanifieImg from '@/assets/images/app/Entretien_planifie.png';
import bouclierImg from '@/assets/images/app/Bouclier.png';
import autyvoTraceImg from '@/assets/images/app/Autyvo_trace.png';
import transfereImg from '@/assets/images/app/Transfere.png';
import TrustSection from '@/components/sections/TrustSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';

function LandingPage() {
  const { t } = useTranslation('landing');
  const location = useLocation();
  const [showStickyButton, setShowStickyButton] = useState(false);

  const benefitImages: Record<string, string> = {
    'zero_papier.png': zeroPapierImg,
    'Scanne.png': scanneImg,
    'Entretien_planifie.png': entretienPlanifieImg,
    'Bouclier.png': bouclierImg,
    'Autyvo_trace.png': autyvoTraceImg,
    'Transfere.png': transfereImg,
  };

  // Gestion du scroll au montage si hash dans l'URL
  useEffect(() => {
    const hash = location.hash.slice(1); // Retire le #
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyButton(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-br from-brand-secondary to-brand-secondary-dark text-white py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Ligne 1 : Photo à gauche, Titre à droite */}
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={heroImage}
                  alt={t('hero.title')}
                  className="rounded-xl shadow-2xl w-96 h-96 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-brand-primary">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Download Button (Mobile) */}
        {showStickyButton && (
          <button
            onClick={scrollToDownload}
            className="lg:hidden fixed bottom-6 right-6 z-50 bg-brand-primary text-white p-4 rounded-full shadow-2xl hover:bg-brand-primary-dark transition-all transform hover:scale-110"
            aria-label={t('hero.ctaShort')}
          >
            <Download size={28} />
          </button>
        )}

        {/* Benefits Section */}
        <section id="gestion-section" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                {t('benefits.title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                {t('benefits.subtitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('benefits.items', { returnObjects: true }) as Array<{ image: string; title: string; description: string }>).map((benefit, index) => {
                const icons = [FileCheck, Scan, Sparkles, Shield, TrendingUp, ArrowRightLeft];
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-brand-primary/30 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300"></div>

                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                          <img
                            src={benefitImages[benefit.image]}
                            alt={benefit.title}
                            className="w-44 h-44 object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-brand-primary" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-brand-secondary mb-4 text-center group-hover:text-brand-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base text-center">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary text-center mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-brand-primary via-brand-primary to-transparent hidden md:block" />

                {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; description: string; cta?: string }>).map((step, index) => (
                  <div key={index} className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-brand-secondary mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                      {step.cta && (
                        <Link
                          to="/trace"
                          className="inline-flex items-center gap-2 mt-4 text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors group"
                        >
                          {step.cta}
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block sticky top-24">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-700">
                  <img
                    src={stickyImage}
                    alt="Interface de l'application AUTYVO"
                    className="rounded-xl w-full max-h-[500px] object-contain shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={scrollToDownload}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                <Download size={24} />
                {t('cta.button')}
              </button>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-gradient-to-br from-brand-secondary to-brand-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Shield size={48} className="text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('security.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('security.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {(t('security.items', { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all">
                  <div className="flex justify-center mb-4">
                    {index === 0 ? <Shield size={40} className="text-brand-primary" /> : <Database size={40} className="text-brand-primary" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border-2 border-brand-primary rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <FileText size={32} className="text-brand-primary mr-4 flex-shrink-0" />
                  <div className="text-white">
                    <p className="font-bold text-lg mb-1">{t('security.transparency.title')}</p>
                    <p className="text-gray-300 text-sm">{t('security.transparency.description')}</p>
                  </div>
                </div>
                <Link
                  to="/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-all whitespace-nowrap inline-block text-center"
                >
                  {t('security.transparency.cta')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </>
  );
}

export default LandingPage;
