import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FileCheck, Gift, ArrowRight } from 'lucide-react';
import traceImage from '@/assets/images/report/report-cover-page.png';

interface TraceSectionProps {
  onBack: () => void;
}

function TraceSection({ onBack }: TraceSectionProps) {
  const { t } = useTranslation('landing');

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
        {/* AUTYVO Trace Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button
              onClick={onBack}
              className="mb-8 text-brand-primary hover:text-brand-primary-dark transition-colors flex items-center font-semibold"
            >
              ← Retour
            </button>

            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-brand-secondary mb-6">
                AUTYVO Trace
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                Parce qu'un véhicule bien entretenu mérite d'être reconnu.
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <p className="text-gray-800 text-lg leading-relaxed mb-4">{t('trace.intro')}</p>
                  <p className="text-brand-secondary text-base font-semibold italic">{t('trace.tagline')}</p>
                </div>

                <div className="bg-gradient-to-br from-brand-primary/5 via-white to-brand-secondary/5 p-8 rounded-2xl border-2 border-brand-primary/20 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark p-3 rounded-xl shadow-md">
                      <FileCheck className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-secondary">
                      {t('trace.overviewTitle')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {(t('trace.overviewItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium pt-0.5 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-brand-secondary to-brand-primary-dark p-3 rounded-xl shadow-md">
                      <FileCheck className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-secondary">
                      {t('trace.whyShareTitle')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {(t('trace.whyShareItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-2 rounded-lg shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium pt-0.5 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 group hover:shadow-3xl transition-all overflow-hidden">
                    <img
                      src={traceImage}
                      alt="Exemple d'AUTYVO Trace"
                      className="rounded-xl w-full h-auto object-cover"
                    />

                    <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-secondary rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                      <div className="relative px-6 py-8 text-center">
                        <div className="flex flex-col items-center gap-3 mb-4">
                          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                            <Gift className="text-white" size={24} />
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {t('trace.bonus.title')}
                          </h3>
                        </div>
                        <p className="text-sm text-white/95 mb-5 leading-relaxed">
                          {t('trace.bonus.description')}
                        </p>
                        <button
                          onClick={scrollToDownload}
                          className="bg-white text-brand-secondary px-5 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center gap-2 group/btn"
                        >
                          <span>{t('trace.bonus.cta')}</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TraceSection;
