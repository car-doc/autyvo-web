import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { FileText, ChevronRight } from 'lucide-react';

// Types for CGU sections from i18n
interface CGUItem {
  term?: string;
  definition?: string;
}

interface CGUSection {
  title: string;
  content?: string | string[];
  items?: (string | CGUItem)[];
  intro?: string;
  report?: {
    intro: string;
    items: string[];
  };
  objective?: string;
  disclaimer?: string[];
}

const TermsPage: React.FC = () => {
  const { t } = useTranslation('cgu');

  const renderSection = (sectionKey: string, index: number) => {
    const section = t(`sections.${sectionKey}`, { returnObjects: true }) as CGUSection;

    if (!section) return null;

    return (
      <div
        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-brand-primary/30"
        key={sectionKey}
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight flex-1">{section.title}</h2>
        </div>

        <div className="space-y-4 text-gray-700">
          {/* Simple content (string) */}
          {typeof section.content === 'string' && (
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
          )}

          {/* Array of content */}
          {Array.isArray(section.content) && section.content.map((paragraph: string, idx: number) => (
            <p key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}

          {/* Items list (definitions) */}
          {section.items && Array.isArray(section.items) && !section.intro && (
            <ul className="space-y-3">
              {section.items.map((item: string | CGUItem, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="flex-shrink-0 w-5 h-5 text-brand-primary mt-0.5" />
                  <span>
                    {item.term && <strong className="text-gray-900">{item.term}</strong>}
                    {item.definition && <span> {item.definition}</span>}
                    {typeof item === 'string' && item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Intro + items */}
          {section.intro && (
            <>
              <p className="leading-relaxed">{section.intro}</p>
              {section.items && (
                <ul className="space-y-3 ml-4">
                  {section.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ChevronRight className="flex-shrink-0 w-5 h-5 text-brand-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {/* Section 15 specific structure */}
          {section.report && (
            <>
              <p className="leading-relaxed">{section.report.intro}</p>
              <ul className="space-y-3 ml-4">
                {section.report.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-brand-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {section.objective && (
            <p className="leading-relaxed">{section.objective}</p>
          )}

          {section.disclaimer && Array.isArray(section.disclaimer) && (
            <>
              {section.disclaimer.map((para: string, idx: number) => (
                <p key={idx} className="leading-relaxed">{para}</p>
              ))}
            </>
          )}
        </div>
      </div>
    );
  };

  // Liste des sections disponibles
  const sectionKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-gray-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary opacity-20 blur-xl rounded-full"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <FileText size={64} className="text-brand-primary drop-shadow-lg" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                {t('header.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 font-medium drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)' }}>
                {t('header.subtitle')}
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-xl">
                <p className="text-sm md:text-base text-white font-medium">
                  {t('header.lastUpdate')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sectionKeys.map((key, index) => renderSection(key, index))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Questions sur nos conditions ?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos conditions générales d'utilisation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Nous contacter
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;
