import {useState} from 'react';
import './navbar.css'
import iconMenu from '../../assets/icons/menu-icon.svg'
import Logo from '../logo/logo';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('HOME');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <nav>
      <ul className="nav-links">
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
      <div className='menu-mobile' >
        <div className="logo-mobile">
          GR
        </div>
        <button><img className='icon-mobile' src={iconMenu} alt='' ></img></button>
      </div>
    </nav>
  )
}

export default Navbar;