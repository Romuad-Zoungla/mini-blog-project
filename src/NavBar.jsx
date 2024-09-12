import { Link } from 'react-router-dom';
// import './NavBar.css'; 
const NavBar = () => {
  return ( 
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">Iyalo Blog</Link>
      </div>
      <ul className="liens">
        <li><Link to="/" className="lien">Accueil</Link></li>
        <li><Link to="/Ajouter" className="lien buttonArticle">Créer un Article</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar; 
