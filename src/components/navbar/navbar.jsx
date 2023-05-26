import { useState } from 'react';
import './navbar.css';
import iconMenu from '../../assets/icons/menu-icon.svg';

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
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : 'mobile-close'}`}>
        <li>
          <a
            href="#"
            className={selectedItem === 'CONTACT' ? 'active' : 'inactive'}
            onClick={() => handleItemClick('CONTACT')}
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href="#"
            className={selectedItem === 'ABOUT' ? 'active' : 'inactive'}
            onClick={() => handleItemClick('ABOUT')}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#"
            className={selectedItem === 'HOME' ? 'active' : 'inactive'}
            onClick={() => handleItemClick('HOME')}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            className={selectedItem === 'PORTFOLIO' ? 'active' : 'inactive'}
            onClick={() => handleItemClick('PORTFOLIO')}
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            href="#"
            className={selectedItem === 'SKILLS' ? 'active' : 'inactive'}
            onClick={() => handleItemClick('SKILLS')}
          >
            SKILLS
          </a>
        </li>
      </ul>
      <div className="menu-mobile">
        <div className="logo-mobile">GR</div>
        <button onClick={toggleMobileMenu}>
          <img className="icon-mobile" src={iconMenu} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
