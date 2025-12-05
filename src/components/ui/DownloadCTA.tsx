import { useTranslation } from 'react-i18next';
import { Download, Smartphone } from 'lucide-react';
import { STORE_LINKS } from '@/constants';
import googlePlayImg from '@/assets/images/stores/google-play.png';
import appStoreImg from '@/assets/images/stores/apple-store.jpg';

interface DownloadCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

const DownloadCTA: React.FC<DownloadCTAProps> = ({
  title,
  subtitle,
  variant = 'default',
  className = ''
}) => {
  const { t } = useTranslation('common');

  const defaultTitle = title || t('download.title');
  const defaultSubtitle = subtitle || t('download.subtitle');

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-brand-primary to-blue-600 rounded-2xl p-8 ${className}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <Smartphone className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{defaultTitle}</h3>
            </div>
            <p className="text-white/90 text-lg">{defaultSubtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={googlePlayImg}
                alt="Télécharger sur Google Play"
                className="h-14 relative z-10"
                loading="lazy"
              />
            </a>
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={appStoreImg}
                alt="Télécharger sur l'App Store"
                className="h-14 relative z-10"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`relative py-24 bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-secondary overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
              <Download className="text-white w-16 h-16" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {defaultTitle}
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            {defaultSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={googlePlayImg}
                alt="Télécharger sur Google Play"
                className="h-16 relative z-10"
                loading="lazy"
              />
            </a>
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={appStoreImg}
                alt="Télécharger sur l'App Store"
                className="h-16 relative z-10"
                loading="lazy"
              />
            </a>
          </div>

          <p className="text-white/70 text-sm mt-8">
            🎁 Gratuit • Sans engagement • Rapport AUTYVO Trace offert
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-brand-primary via-blue-600 to-brand-primary p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <Download className="text-white w-12 h-12" />
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {defaultTitle}
          </h3>

          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed">
            {defaultSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={STORE_LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={googlePlayImg}
                alt="Télécharger sur Google Play"
                className="h-14 relative z-10"
                loading="lazy"
              />
            </a>
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={appStoreImg}
                alt="Télécharger sur l'App Store"
                className="h-14 relative z-10"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-br from-gray-50 to-white text-center">
        <p className="text-gray-600 text-sm">
          🎁 <strong className="text-brand-secondary">100% Gratuit</strong> • Sans engagement • Premier rapport AUTYVO Trace offert
        </p>
      </div>
    </div>
  );
};

export default DownloadCTA;
