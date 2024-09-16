import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import './NavBar.css'; 
const NavBar = () => { 
  const { t } = useTranslation();
  return ( 
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">Iyalo Blog</Link>
      </div>
      <ul className="liens">
        <li><Link to="/" className="lien">{t('navbar.menu1')}</Link></li>
        <li><Link to="/Ajouter" className="lien buttonArticle">{t('navbar.menu2')}</Link></li>
      </ul>
    </nav>
  );
} 

export default NavBar; 
