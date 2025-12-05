import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { STORE_LINKS } from '@/constants';
import googlePlayImg from '@/assets/images/stores/google-play.png';
import appStoreImg from '@/assets/images/stores/apple-store.jpg';
import { scrollToElement } from '@/utils/navigation';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToFaq = () => {
    scrollToElement('faq', navigate, location.pathname);
  };

  return (
    <footer id="download" className="bg-gradient-to-br from-brand-secondary via-brand-secondary-dark to-brand-secondary text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Section À propos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('footer.about.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Section Liens Utiles */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('footer.links.title')}
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToFaq}
                  className="text-gray-300 hover:text-brand-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                >
                  {t('footer.links.faq')}
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-brand-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                >
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section Télécharger */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('footer.download.title')}
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href={STORE_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-fit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={googlePlayImg}
                  alt={t('footer.download.googlePlay')}
                  className="h-12 relative z-10"
                  loading="lazy"
                />
              </a>
              <a
                href={STORE_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-fit"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={appStoreImg}
                  alt={t('footer.download.appStore')}
                  className="h-12 relative z-10"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Section Légale et Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <Link
                to="/legal/privacy"
                className="text-gray-300 hover:text-brand-primary transition-all duration-300 font-medium relative group"
              >
                {t('footer.legal.privacy')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/legal/terms"
                className="text-gray-300 hover:text-brand-primary transition-all duration-300 font-medium relative group"
              >
                {t('footer.legal.terms')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <p className="text-sm text-gray-300 font-medium">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
