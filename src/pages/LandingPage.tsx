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
  Check,
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
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section, { SectionHeader } from '@/components/ui/Section';

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
        <section id="hero" className="relative bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-secondary-dark text-white py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(2,177,151,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="flex justify-center lg:justify-start animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    src={heroImage}
                    alt={t('hero.title')}
                    className="relative rounded-2xl shadow-2xl w-96 h-96 object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8 animate-slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-brand-primary drop-shadow-lg">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                  {t('hero.description')}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={scrollToDownload}
                    leftIcon={<Download size={24} />}
                    className="shadow-xl"
                  >
                    {t('hero.ctaShort')}
                  </Button>
                  <Link to="/pro">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-brand-secondary"
                    >
                      Solutions Professionnelles
                    </Button>
                  </Link>
                </div>
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
        <Section background="gray" id="gestion-section" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative z-10">
            <SectionHeader
              title={t('benefits.title')}
              subtitle={t('benefits.subtitle')}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('benefits.items', { returnObjects: true }) as Array<{ image: string; title: string; description: string }>).map((benefit, index) => {
                const icons = [FileCheck, Scan, Sparkles, Shield, TrendingUp, ArrowRightLeft];
                const Icon = icons[index % icons.length];

                return (
                  <Card
                    key={index}
                    variant="default"
                    hover
                    className="relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-brand-accent/5 to-transparent rounded-tr-full group-hover:scale-110 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <img
                            src={benefitImages[benefit.image]}
                            alt={benefit.title}
                            className="w-44 h-44 object-contain relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl group-hover:from-brand-primary/20 group-hover:to-brand-primary/10 transition-all duration-300 group-hover:scale-110">
                          <Icon className="w-6 h-6 text-brand-primary group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-brand-secondary mb-4 text-center group-hover:text-brand-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base text-center">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        {/* How It Works Section */}
        <Section background="white">
          <SectionHeader
            title={t('howItWorks.title')}
            subtitle={t('howItWorks.subtitle')}
          />

          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-12 bottom-12 w-1 bg-gradient-to-b from-brand-primary via-brand-primary to-transparent hidden md:block rounded-full" />

              {(t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; description: string; cta?: string }>).map((step, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {index + 1}
                  </div>
                  <Card variant="outlined" className="flex-1 group-hover:border-brand-primary/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      {step.description}
                    </p>
                    {step.cta && (
                      <Link
                        to="/trace"
                        className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors group/link"
                      >
                        {step.cta}
                        <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    )}
                  </Card>
                </div>
              ))}
            </div>

            <div className="hidden lg:block sticky top-24">
              <Card variant="elevated" className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-0 overflow-hidden">
                <div className="p-8">
                  <img
                    src={stickyImage}
                    alt="Interface de l'application AUTYVO"
                    className="rounded-xl w-full max-h-[500px] object-contain shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              onClick={scrollToDownload}
              leftIcon={<Download size={24} />}
            >
              {t('cta.button')}
            </Button>
          </div>
        </Section>

        {/* Trust Section */}
        <TrustSection />

        {/* Security Section */}
        <Section background="gradient" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,177,151,0.15),transparent_70%)]"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary/30 blur-xl rounded-full"></div>
                  <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <Shield size={56} className="text-brand-primary" />
                  </div>
                </div>
              </div>
              <SectionHeader
                title={t('security.title')}
                subtitle={t('security.subtitle')}
                light
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {(t('security.items', { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => {
                const Icon = index === 0 ? Shield : Database;
                return (
                  <Card
                    key={index}
                    variant="gradient"
                    className="bg-white/10 backdrop-blur-md text-center group hover:bg-white/20 border-white/20"
                    hover
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-brand-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon size={48} className="text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                    <div className="mt-6 flex justify-center">
                      <Check className="w-6 h-6 text-brand-primary" />
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card variant="gradient" className="bg-white/10 backdrop-blur-md border-2 border-brand-primary max-w-4xl mx-auto hover:border-brand-primary-light">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-primary/20 rounded-xl">
                    <FileText size={32} className="text-brand-primary flex-shrink-0" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg mb-1">{t('security.transparency.title')}</p>
                    <p className="text-gray-200 text-sm">{t('security.transparency.description')}</p>
                  </div>
                </div>
                <Link to="/legal/privacy" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="whitespace-nowrap">
                    {t('security.transparency.cta')}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </Section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </>
  );
}

export default LandingPage;
