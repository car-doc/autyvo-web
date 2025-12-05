import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';
import { scrollToElement } from '@/utils/navigation';

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const scrollToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const scrollToDownload = () => {
    scrollToElement('download', navigate, location.pathname);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={logoImg} alt="AUTYVO" className="h-12 transition-transform duration-300 group-hover:rotate-3" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToHome}
              className="text-brand-secondary hover:text-brand-primary transition-all duration-300 font-medium relative group"
            >
              {t('header.nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              to="/pro"
              className="text-brand-secondary hover:text-brand-primary transition-all duration-300 font-medium relative group"
            >
              {t('header.nav.professionals')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-brand-secondary hover:text-brand-primary transition-all duration-300 font-medium relative group"
            >
              {t('header.nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={scrollToDownload}
              className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              {t('header.cta.download')}
            </button>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-brand-secondary p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-3 border-t border-gray-200 animate-fade-in">
            <button
              onClick={scrollToHome}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              {t('header.nav.home')}
            </button>
            <button
              onClick={() => handleNavigation('/pro')}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              {t('header.nav.professionals')}
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left text-brand-secondary hover:text-brand-primary py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              {t('header.nav.contact')}
            </button>
            <button
              onClick={scrollToDownload}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 mt-2"
            >
              {t('header.cta.download')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
