import {useState} from 'react';
import './navbar.css'

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
    </nav>
  )
}

export default Navbar;