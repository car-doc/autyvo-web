import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileCheck, Gift, ArrowRight, Shield, CheckCircle2, TrendingUp } from 'lucide-react';
import traceImage from '@/assets/images/report/report-cover-page.png';
import verificationImage from '@/assets/images/illustrations/autyvo-schema.png';
import DownloadCTA from '@/components/ui/DownloadCTA';

interface TraceSectionProps {
  onBack: () => void;
}

function TraceSection({ onBack }: TraceSectionProps) {
  const { t } = useTranslation(['landing', 'common']);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>AUTYVO Trace - La Traçabilité Automobile - Autyvo</title>
        <meta name="description" content="Découvrez comment la traçabilité augmente la valeur de votre véhicule et facilite sa revente." />
      </Helmet>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button
              onClick={onBack}
              className="mb-10 text-brand-primary hover:text-brand-primary-dark transition-colors flex items-center font-semibold group"
            >
              <ArrowRight size={20} className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Retour
            </button>

            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-brand-primary to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Shield className="text-white" size={48} />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-brand-secondary mb-6 tracking-tight">
                AUTYVO Trace
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                Parce qu'un véhicule bien entretenu mérite d'être reconnu.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <p className="text-gray-700 text-xl leading-relaxed mb-6">{t('trace.intro')}</p>
                  <div className="flex items-start gap-3 bg-gradient-to-r from-brand-primary/10 to-blue-500/10 p-4 rounded-xl">
                    <CheckCircle2 className="text-brand-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-brand-secondary text-lg font-semibold">{t('trace.tagline')}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-blue-50/30 to-white p-10 rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-4 rounded-2xl shadow-lg">
                      <FileCheck className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-secondary">
                      {t('trace.overviewTitle')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {(t('trace.overviewItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2.5 rounded-xl shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium pt-1 text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-600 to-brand-primary p-4 rounded-2xl shadow-lg">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-secondary">
                      {t('trace.whyShareTitle')}
                    </h3>
                  </div>
                  <ul className="space-y-5">
                    {(t('trace.whyShareItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-2.5 rounded-xl shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium pt-1 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-primary/20 via-blue-500/20 to-brand-primary/20 rounded-[2.5rem] blur-3xl animate-pulse"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100 group hover:shadow-3xl transition-all duration-300 overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
                      <img
                        src={traceImage}
                        alt="Exemple d'AUTYVO Trace"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-brand-primary via-blue-600 to-brand-primary-dark rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
                      <div className="relative px-8 py-10 text-center">
                        <div className="flex flex-col items-center gap-4 mb-6">
                          <div className="bg-white/25 backdrop-blur-sm p-3.5 rounded-2xl shadow-lg">
                            <Gift className="text-white" size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {t('trace.bonus.title')}
                          </h3>
                        </div>
                        <p className="text-base text-white/95 mb-6 leading-relaxed">
                          {t('trace.bonus.description')}
                        </p>
                        <button
                          onClick={scrollToDownload}
                          className="bg-white text-brand-secondary px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl inline-flex items-center gap-3 group/btn"
                        >
                          <span>{t('trace.bonus.cta')}</span>
                          <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Compact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DownloadCTA
              variant="compact"
              title={t('common:download.title')}
              subtitle={t('common:download.subtitle')}
            />
          </div>
        </section>

        {/* Verification Section */}
        <section className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-10">
                  <div className="flex gap-5 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Shield className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
                        {t('verification.title')}
                      </h2>
                      <p className="text-2xl md:text-3xl font-semibold text-gray-600 mt-2">
                        {t('verification.subtitle')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-primary/10 via-blue-50 to-transparent border-l-4 border-brand-primary p-8 rounded-2xl mb-8 shadow-lg">
                  <p className="text-2xl font-bold text-brand-secondary leading-relaxed">
                    {t('verification.tagline')}
                  </p>
                </div>

                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <p>{t('verification.description')}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="text-brand-primary flex-shrink-0 mt-1" size={24} />
                      <p className="font-bold text-brand-secondary text-xl">
                        {t('verification.rule')}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      <p>{t('verification.conclusion')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-primary/20 via-blue-500/20 to-brand-primary/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl border-2 border-gray-100">
                    <img
                      src={verificationImage}
                      alt="Schéma de vérification AUTYVO"
                      className="rounded-2xl w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Hero Section */}
        <DownloadCTA
          variant="hero"
          title={t('common:download.ctaTitle')}
          subtitle={t('common:download.ctaSubtitle')}
        />
      </div>
    </>
  );
}

export default TraceSection;
