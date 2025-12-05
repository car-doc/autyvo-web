import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Database,
  FileText,
  Users,
  CheckCircle,
  Target,
  UserCheck,
  Cookie,
  Clock,
  Lock,
  AlertTriangle,
  Scale,
  Bell
} from 'lucide-react';
import { CONTACT_EMAIL, LEGAL_ENTITY } from '@/constants';

// Type for privacy policy data items
interface PrivacyDataItem {
  title: string;
  detail: string;
}

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation('privacy');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-gray-900 text-white py-20 relative overflow-hidden">
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
                    <Shield size={64} className="text-brand-primary" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('header.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
                {t('header.subtitle')}
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-sm md:text-base text-gray-300">
                  {t('header.version')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section 1: Introduction */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <FileText className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 01
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.introduction.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                    {(t('sections.introduction.content', { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className="leading-loose" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Responsable du traitement */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Users className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 02
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.controller.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t('sections.controller.intro')}
                  </p>
                  <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 p-6 rounded-xl border border-brand-primary/20 space-y-3">
                    <p className="text-xl font-bold text-brand-secondary">{LEGAL_ENTITY.name}</p>
                    <p className="text-gray-700 flex items-start">
                      <span className="mr-2">📍</span>
                      {t('sections.controller.address')}
                    </p>
                    <p className="text-gray-700 flex items-start">
                      <span className="mr-2">✉️</span>
                      {t('sections.controller.contact')}{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:underline font-semibold ml-1">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-blue-900">{t('sections.controller.dpo')}</strong>{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:underline font-semibold">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Données collectées */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Database className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 03
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.data.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {t('sections.data.intro')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(t('sections.data.items', { returnObjects: true }) as PrivacyDataItem[]).map((item, index) => (
                      <div key={index} className="group/item hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-brand-primary/50">
                        <div className="flex items-start space-x-3">
                          <div className="bg-brand-primary/10 p-2 rounded-lg group-hover/item:bg-brand-primary/20 transition-colors">
                            <CheckCircle className="text-brand-primary flex-shrink-0" size={24} />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-brand-secondary mb-2 text-lg">{item.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Finalités du traitement */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Target className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 04
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.purpose.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {t('sections.purpose.intro')}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-brand-secondary to-brand-secondary-dark text-white">
                          <th className="px-6 py-4 text-left font-semibold text-lg">
                            {(t('sections.purpose.table.headers', { returnObjects: true }) as string[])[0]}
                          </th>
                          <th className="px-6 py-4 text-left font-semibold text-lg">
                            {(t('sections.purpose.table.headers', { returnObjects: true }) as string[])[1]}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(t('sections.purpose.table.rows', { returnObjects: true }) as string[][]).map((row, index) => (
                          <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-brand-primary/5 transition-colors`}>
                            <td className="px-6 py-4 border-b border-gray-200 font-medium text-gray-800">{row[0]}</td>
                            <td className="px-6 py-4 border-b border-gray-200 text-gray-600">
                              <span className="inline-block bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                                {row[1]}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Destinataires */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <UserCheck className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 05
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.recipients.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t('sections.recipients.intro')}
                  </p>
                  <ul className="space-y-4 mb-6">
                    {(t('sections.recipients.items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-brand-primary/50 hover:shadow-md transition-all">
                        <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" size={24} />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-gray-800 font-semibold flex items-center">
                      <Shield className="text-green-600 mr-2" size={20} />
                      {t('sections.recipients.note')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Cookies */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Cookie className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 06
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.cookies.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">{t('sections.cookies.content')}</p>
                </div>
              </div>
            </div>

            {/* Section 7: Conservation */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Clock className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 07
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.retention.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t('sections.retention.intro')}
                  </p>
                  <div className="space-y-4">
                    {(t('sections.retention.items', { returnObjects: true }) as Array<{ type: string; duration: string }>).map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200 hover:shadow-md transition-all">
                        <Clock className="text-brand-primary mr-3 mt-1 flex-shrink-0" size={24} />
                        <div className="flex-1">
                          <span className="font-bold text-brand-secondary block mb-1">{item.type}</span>
                          <span className="text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Sécurité */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Lock className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 08
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.security.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {t('sections.security.intro')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(t('sections.security.items', { returnObjects: true }) as Array<{ title: string; detail: string }>).map((item, index) => (
                      <div key={index} className="group/item hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 hover:border-green-400">
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 p-3 rounded-lg group-hover/item:bg-green-200 transition-colors">
                            <Lock className="text-green-600 flex-shrink-0" size={24} />
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-brand-secondary mb-2 text-lg">{item.title}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Violations */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <AlertTriangle className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 09
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.breach.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed text-lg">{t('sections.breach.content')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Droits */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Scale className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 10
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.rights.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {t('sections.rights.intro')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {(t('sections.rights.items', { returnObjects: true }) as string[]).map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-200 hover:shadow-md hover:border-purple-400 transition-all">
                        <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={24} />
                        <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 p-6 rounded-xl border border-brand-primary/30 space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-brand-secondary">{t('sections.rights.exercise')}</strong>{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary hover:underline font-bold">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">{t('sections.rights.cnil')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11: Mises à jour */}
            <div className="relative mb-16 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary/10 to-transparent p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-primary/10 p-4 rounded-xl">
                      <Bell className="text-brand-primary" size={32} />
                    </div>
                    <div>
                      <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Section 11
                      </span>
                      <h2 className="text-3xl font-bold text-brand-secondary">
                        {t('sections.updates.title')}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed text-lg">{t('sections.updates.content')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-primary-dark to-brand-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-secondary p-12 rounded-3xl text-white text-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="inline-block bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-6">
                    <Shield size={56} className="mx-auto text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('sections.conclusion.title')}</h3>
                  <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-gray-100">
                    {t('sections.conclusion.content')}
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <span>Nous contacter</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;
