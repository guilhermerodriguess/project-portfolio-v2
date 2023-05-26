import { useState } from 'react';
import './navbar.css';
import { useTranslation } from 'react-i18next';
import iconMenu from '../../assets/icons/menu-icon.svg';
import iconMenuClose from '../../assets/icons/menu-icon-close.svg';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul className={ `nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}` }>
        <li>
          <button
            className={ selectedItem === 'CONTACT' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('CONTACT') }
          >
            {t('navbar.contact')}
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'ABOUT' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('ABOUT') }
          >
            {t('navbar.about')}
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'HOME' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('HOME') }
          >
            {t('navbar.home')}
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'PORTFOLIO' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('PORTFOLIO') }
          >
            {t('navbar.portfolio')}
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'SKILLS' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('SKILLS') }
          >
            {t('navbar.skills')}
          </button>
        </li>
      </ul>
      <div className="menu-mobile">
        <div className="logo-mobile">GR</div>
        <button
          className={ `language-mobile ${isMobileMenuOpen ? 'off' : ''}` }
          onClick={ () => changeLanguage(t('language') === 'PT-BR' ? 'pt' : 'en') }
        >
          {t('language')}
        </button>
        <button onClick={ toggleMobileMenu }>
          <img
            className="icon-mobile"
            src={ isMobileMenuOpen ? iconMenu : iconMenuClose }
            alt=""
          />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
