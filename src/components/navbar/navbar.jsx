import { useState } from 'react';
import './navbar.css';
import iconMenu from '../../assets/icons/menu-icon.svg';
import iconMenuClose from '../../assets/icons/menu-icon-close.svg';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <ul className={ `nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}` }>
        <li>
          <button
            className={ selectedItem === 'CONTACT' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('CONTACT') }
          >
            CONTACT
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'ABOUT' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('ABOUT') }
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'HOME' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('HOME') }
          >
            HOME
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'PORTFOLIO' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('PORTFOLIO') }
          >
            PORTFOLIO
          </button>
        </li>
        <li>
          <button
            className={ selectedItem === 'SKILLS' ? 'active' : 'inactive' }
            onClick={ () => handleItemClick('SKILLS') }
          >
            SKILLS
          </button>
        </li>
      </ul>
      <div className="menu-mobile">
        <div className="logo-mobile">GR</div>
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
